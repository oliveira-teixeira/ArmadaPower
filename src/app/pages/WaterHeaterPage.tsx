import { useState } from 'react';
import { ChevronDown, ChevronRight, Info, AlertTriangle, Zap, MapPin, X, Droplets, Power, Home, Activity, Calendar, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';

const activityData = [
  { t: '12a', v: 1.2 }, { t: '3a', v: 0.4 }, { t: '6a', v: 2.8 }, { t: '9a', v: 1.5 },
  { t: '12p', v: 0.8 }, { t: '3p', v: 1.1 }, { t: '6p', v: 3.2, cur: true }, { t: '9p', v: 1.9 },
];

const historyData = [
  {
    period: 'TODAY',
    events: [
      { icon: 'zap', title: 'Energy saving event started', sub: 'Set by utility program', time: '6:00 PM' },
      { icon: 'water', title: 'Mode changed to Vacation', sub: 'Manually adjusted', time: '3:15 PM' },
    ],
  },
  {
    period: 'YESTERDAY',
    events: [
      { icon: 'water', title: 'Hot water low alert', sub: 'Triggered by sensor', time: '9:00 AM' },
      { icon: 'zap', title: 'Energy saving event ended', sub: 'Set by utility program', time: '7:15 AM' },
    ],
  },
  {
    period: 'EARLIER',
    events: [
      { icon: 'power', title: 'Water heater turned on', sub: 'Manually adjusted', time: 'Oct 11, 8:45 PM' },
    ],
  },
];

function EventIcon({ type }: { type: string }) {
  return (
    <div
      className="size-9 rounded-full flex items-center justify-center flex-none border"
      style={{ background: 'var(--panel)', borderColor: 'var(--chart-5)' }}
    >
      {type === 'zap' && <Zap size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />}
      {type === 'water' && <Droplets size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />}
      {type === 'power' && <Power size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />}
    </div>
  );
}

function Toggle({ value, onChange }: { value: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className="relative inline-flex h-7 w-12 items-center rounded-full transition-colors flex-none"
      style={{ background: value ? 'var(--primary)' : 'var(--accent)' }}
    >
      <span
        className="inline-block size-5 rounded-full bg-white shadow transition-transform"
        style={{ transform: value ? 'translateX(24px)' : 'translateX(4px)' }}
      />
    </button>
  );
}

function BypassConfirmModal({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{ background: 'rgba(0,0,0,0.6)' }}
      onClick={onCancel}
    >
      {/* Dialog */}
      <div
        className="w-full max-w-sm rounded-xl p-6 flex flex-col gap-4 relative"
        style={{
          background: 'var(--popover)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col gap-3">
          <p
            className="font-semibold"
            style={{ color: 'var(--foreground)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-h4)' }}
          >
            Activate Bypass Mode?
          </p>
          <p
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-sm)', lineHeight: '1.5' }}
          >
            Bypass Mode temporarily overrides energy optimization to heat your water heater normally.
            <br /><br />
            Use this when you need more hot water quickly.
          </p>
        </div>
        {/* Footer */}
        <div className="flex gap-2 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--foreground)',
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--text-sm)',
              background: 'transparent',
              borderRadius: 'var(--radius-button)',
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg"
            style={{
              background: 'rgba(127,29,29,1)',
              color: 'var(--foreground)',
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--text-sm)',
              borderRadius: 'var(--radius-button)',
            }}
          >
            Activate Bypass
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WaterHeaterPage() {
  const [tab, setTab] = useState<'overview' | 'history'>('overview');
  const [mode, setMode] = useState<'eco' | 'normal' | 'vacation'>('vacation');
  const [geofencing, setGeofencing] = useState(true);
  const [bypass, setBypass] = useState(false);
  const [bypassModalOpen, setBypassModalOpen] = useState(false);
  const [deviceInfoOpen, setDeviceInfoOpen] = useState(false);
  const [hotWaterDismissed, setHotWaterDismissed] = useState(false);
  const [energyEventDismissed, setEnergyEventDismissed] = useState(false);

  function handleBypassToggle() {
    if (!bypass) {
      // Turning on: show confirmation modal
      setBypassModalOpen(true);
    } else {
      // Turning off: no confirmation needed
      setBypass(false);
    }
  }

  function handleBypassConfirm() {
    setBypass(true);
    setBypassModalOpen(false);
  }

  return (
    <div style={{ background: 'var(--background)', minHeight: '100%', fontFamily: 'var(--font-body)' }}>

      {/* Bypass confirmation modal */}
      {bypassModalOpen && (
        <BypassConfirmModal
          onConfirm={handleBypassConfirm}
          onCancel={() => setBypassModalOpen(false)}
        />
      )}

      {/* ── Header ── */}
      <div
        className="sticky top-0 z-10 px-5 pt-4 pb-0"
        style={{ background: 'var(--panel)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-start justify-between mb-1">
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-h4)' }}>
                Water Heater
              </span>
              <ChevronDown size={16} style={{ color: 'var(--foreground)' }} />
            </div>
            <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: '12.8px' }} className="mt-0.5">
              Oakwood Residences • Unit 4B
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="size-2 rounded-sm" style={{ background: 'var(--success)' }} />
              <span className="font-semibold" style={{ color: 'var(--success)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-xs)' }}>
                Connected
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mt-3" style={{ borderBottom: '1px solid var(--border)' }}>
          {(['overview', 'history'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="flex-1 py-3.5 relative capitalize font-semibold"
              style={{
                color: tab === t ? 'var(--foreground)' : 'var(--accent)',
                opacity: tab === t ? 1 : 0.8,
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
              }}
            >
              {t}
              {tab === t && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'var(--foreground)' }} />
              )}
            </button>
          ))}
        </div>
      </div>

      {tab === 'overview' ? (
        <div
          className="p-4 space-y-4 min-h-full"
          style={{ background: 'var(--background)' }}
        >

          {/* Hot Water Alert */}
          {!hotWaterDismissed && (
            <div
              className="rounded-xl relative"
              style={{
                background: 'var(--warning-light)',
                border: '1px solid var(--warning-dark)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              {/* Close button row — top-right */}
              <div className="flex justify-end pt-2.5 pr-3">
                <button onClick={() => setHotWaterDismissed(true)} style={{ color: 'var(--warning-dark)' }}>
                  <X size={14} strokeWidth={2.5} />
                </button>
              </div>
              {/* Content row */}
              <div className="flex gap-3 px-4 pb-4">
                <AlertTriangle size={20} style={{ color: 'var(--warning)' }} strokeWidth={1.8} className="flex-none mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                    Hot Water Running Low
                  </p>
                  <p className="opacity-70 mt-1" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
                    Based on current usage, hot water may run out soon.
                  </p>
                  <p className="opacity-70 mt-1" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
                    Estimated time to reheat: 25 minutes
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Energy Event Banner */}
          {!energyEventDismissed && (
            <div
              className="rounded-xl relative"
              style={{
                background: 'var(--panel)',
                border: '1px solid var(--chart-5)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              {/* Close button row — top-right */}
              <div className="flex justify-end pt-2.5 pr-3">
                <button onClick={() => setEnergyEventDismissed(true)} style={{ color: 'var(--accent)' }}>
                  <X size={14} strokeWidth={2.5} />
                </button>
              </div>
              {/* Content row */}
              <div className="flex gap-3 px-4 pb-4">
                <Zap size={20} style={{ color: 'var(--foreground)' }} strokeWidth={1.8} className="flex-none mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                    Energy Saving Event Active
                  </p>
                  <p className="opacity-70 mt-1" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
                    Heating temporarily limited by your utility provider.
                  </p>
                  <p className="opacity-70 mt-1" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
                    Ends in: 48 minutes
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Status Hero — circular gauge */}
          <div
            className="rounded-xl py-5 px-4"
            style={{
              background: 'var(--surface)',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 'var(--radius-card)',
            }}
          >
            <div className="flex justify-center mb-5">
              <div className="relative size-[140px]">
                <svg width="140" height="140" className="-rotate-90 absolute inset-0">
                  <circle cx="70" cy="70" r="54" strokeWidth="8" stroke="var(--accent)" fill="none" />
                  <circle
                    cx="70" cy="70" r="54"
                    strokeWidth="8"
                    stroke="var(--warning)"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 54}`}
                    strokeDashoffset={`${2 * Math.PI * 54 * (1 - 0.68)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-bold" style={{ color: 'var(--warning)', fontFamily: 'var(--font-body)', fontSize: '2rem' }}>
                    68%
                  </span>
                  <span
                    className="font-semibold uppercase tracking-wide"
                    style={{ color: 'var(--primary)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-xs)' }}
                  >
                    Remaining
                  </span>
                </div>
              </div>
            </div>
            <div className="flex" style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
              {[
                { val: '128°F', label: 'Tank Temp', colorVar: 'var(--surface-foreground)' },
                { val: 'Heating', label: 'Status', colorVar: 'var(--warning)' },
                { val: '25 min', label: 'Est. Full', colorVar: 'var(--surface-foreground)' },
              ].map((item) => (
                <div key={item.label} className="flex-1 flex flex-col items-center gap-1">
                  <span
                    className="font-semibold"
                    style={{ color: item.colorVar, fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}
                  >
                    {item.val}
                  </span>
                  <span
                    className="opacity-70"
                    style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mode Selector */}
          <div
            className="rounded-xl p-5"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-card)',
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Home size={18} style={{ color: 'var(--surface-foreground)' }} strokeWidth={1.7} />
              <span className="font-semibold" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}>
                Mode
              </span>
            </div>
            <div
              className="rounded-lg p-1 flex mb-3"
              style={{ background: 'var(--accent)', borderRadius: 'var(--radius)' }}
            >
              {(['eco', 'normal', 'vacation'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className="flex-1 py-2 rounded-md capitalize transition-all"
                  style={{
                    background: mode === m ? 'var(--surface)' : 'transparent',
                    color: mode === m ? 'var(--surface-foreground)' : 'var(--accent-foreground)',
                    opacity: mode === m ? 1 : 0.8,
                    boxShadow: mode === m ? 'var(--elevation-sm)' : undefined,
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>
            <div
              className="rounded-lg px-4 py-3 flex items-center justify-between"
              style={{ background: 'var(--warning-light)', borderRadius: 'var(--radius)' }}
            >
              <div>
                <p className="font-semibold" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}>
                  Bypass active
                </p>
                <p className="opacity-80" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
                  Ends in 34 minutes
                </p>
              </div>
              <Zap size={18} style={{ color: 'var(--surface-foreground)' }} strokeWidth={1.8} />
            </div>
          </div>

          {/* Activity Chart */}
          <div
            className="rounded-xl p-5"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-card)',
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Activity size={18} style={{ color: 'var(--surface-foreground)' }} strokeWidth={1.7} />
              <span className="font-semibold" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}>
                Activity
              </span>
            </div>
            <div className="flex gap-2 mb-3">
              {['24h', '7d', '30d'].map((p) => (
                <div
                  key={p}
                  className="px-3 py-1 rounded-full font-semibold"
                  style={{
                    background: p === '24h' ? 'var(--surface-foreground)' : 'var(--accent)',
                    color: p === '24h' ? 'var(--foreground)' : 'var(--surface-foreground)',
                    opacity: p === '24h' ? 1 : 0.8,
                    fontFamily: 'var(--font-ui)',
                    fontSize: 'var(--text-xs)',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  {p}
                </div>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={90}>
              <BarChart data={activityData} barCategoryGap="25%">
                <XAxis
                  dataKey="t"
                  tick={{ fill: 'var(--surface-foreground)', fontSize: 10, opacity: 0.6, fontFamily: 'var(--font-ui)' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Bar dataKey="v" radius={[3, 3, 0, 0]}>
                  {activityData.map((entry, i) => (
                    <Cell key={i} fill={(entry as any).cur ? 'var(--primary)' : 'rgba(75,117,192,0.35)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="font-semibold mt-1" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
              3.8 KWH
            </p>
            <p className="opacity-60" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
              Energy Used
            </p>
          </div>

          {/* Schedule */}
          <div
            className="rounded-xl p-5"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-card)',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar size={18} style={{ color: 'var(--surface-foreground)' }} strokeWidth={1.7} />
                <span className="font-semibold" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}>
                  Schedule
                </span>
              </div>
              <button className="flex items-center gap-1 font-semibold" style={{ color: 'var(--primary)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-xs)' }}>
                See full schedule
              </button>
            </div>
            <div className="space-y-3">
              {[
                { time: '5:30 AM', action: 'Heat to 135°F' },
                { time: '10:00 AM', action: 'Eco Mode' },
                { time: '6:00 PM', action: 'Home Mode' },
              ].map((item) => (
                <div
                  key={item.time}
                  className="flex items-center justify-between py-1.5"
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  <span className="font-semibold" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                    {item.time}
                  </span>
                  <span className="opacity-70" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                    {item.action}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Geofencing Toggle */}
          <div
            className="rounded-xl p-5"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-card)',
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="size-9 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--accent)' }}
                >
                  <MapPin size={16} style={{ color: 'var(--accent-foreground)' }} strokeWidth={1.8} />
                </div>
                <p className="font-semibold" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                  Geofencing Automation
                </p>
              </div>
              <Toggle value={geofencing} onChange={() => setGeofencing(g => !g)} />
            </div>
            <p className="opacity-60 mt-2 ml-12" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
              When everyone leaves home → Switch to Eco mode
            </p>
          </div>

          {/* Bypass Mode Toggle */}
          <div
            className="rounded-xl p-5"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-card)',
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="size-9 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--accent)' }}
                >
                  <Zap size={16} style={{ color: 'var(--accent-foreground)' }} strokeWidth={1.8} />
                </div>
                <p className="font-semibold" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                  Bypass mode
                </p>
              </div>
              <Toggle value={bypass} onChange={handleBypassToggle} />
            </div>
            <p className="opacity-60 mt-2 ml-12" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
              Temporarily bypasses energy optimization to get hot water faster
            </p>
          </div>

          {/* Device Info */}
          <div
            className="rounded-xl overflow-hidden"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-card)',
            }}
          >
            <button
              onClick={() => setDeviceInfoOpen(o => !o)}
              className="w-full px-5 py-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Info size={16} style={{ color: 'var(--surface-foreground)' }} strokeWidth={1.8} />
                <span className="font-semibold" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                  Device Info
                </span>
              </div>
              <ChevronRight
                size={18}
                style={{ color: 'var(--surface-foreground)' }}
                className={`transition-transform ${deviceInfoOpen ? 'rotate-90' : ''}`}
              />
            </button>
            {deviceInfoOpen && (
              <div
                className="px-5 py-4 space-y-3"
                style={{
                  borderTop: '1px solid var(--border)',
                  background: 'rgba(202,214,236,0.15)',
                }}
              >
                {[
                  ['Model', 'Armada WH-300'],
                  ['Serial', 'AWH-4459-22'],
                  ['Firmware', '1.4.2'],
                  ['Connection', 'WiFi'],
                  ['Last Online', '10 sec ago'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between">
                    <span className="opacity-70" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                      {k}
                    </span>
                    <span className="font-semibold" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* History Tab */
        <div className="p-4" style={{ background: 'var(--background)' }}>
          {historyData.map((section) => (
            <div key={section.period} className="mb-6">
              <p
                className="font-semibold opacity-70 mb-3 tracking-wider"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-xs)' }}
              >
                {section.period}
              </p>
              <div>
                {section.events.map((event, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <EventIcon type={event.icon} />
                      {i < section.events.length - 1 && (
                        <div
                          className="w-px flex-1 my-1 min-h-[20px] opacity-30"
                          style={{ background: 'var(--chart-5)' }}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p
                        className="font-semibold"
                        style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)' }}
                      >
                        {event.title}
                      </p>
                      <p className="opacity-70 mt-0.5" style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
                        {event.sub}
                      </p>
                      <p className="opacity-50 mt-0.5" style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>
                        {event.time}
                      </p>
                      {i < section.events.length - 1 && (
                        <div className="mt-3 opacity-20" style={{ borderBottom: '1px solid var(--chart-5)' }} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
