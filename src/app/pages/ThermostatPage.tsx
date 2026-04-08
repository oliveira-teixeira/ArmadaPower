import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronDown, Moon, Sun, Zap, MapPin, Flame, Minus, Plus, Thermometer, Leaf, Info, Clock, Power } from 'lucide-react';

const historyData = [
  {
    period: 'TODAY',
    events: [
      { icon: 'moon', title: 'Sleep Mode activated', sub: 'Triggered by Evening Routine', time: '10:00 PM' },
      { icon: 'therm', title: 'Temperature set to 72°', sub: 'Manually adjusted', time: '6:30 PM' },
    ],
  },
  {
    period: 'YESTERDAY',
    events: [
      { icon: 'sun', title: 'Morning Schedule active', sub: 'Scheduled change', time: '8:00 AM' },
      { icon: 'zap', title: 'Energy saving event ended', sub: 'Set by utility program', time: '8:00 AM' },
      { icon: 'zap', title: 'Energy saving event started', sub: 'Set by utility program', time: '5:15 AM' },
    ],
  },
  {
    period: 'EARLIER',
    events: [
      { icon: 'pin', title: 'Away Mode activated', sub: 'Triggered by location', time: 'Oct 12, 9:00 AM' },
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
      {type === 'moon' && <Moon size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />}
      {type === 'therm' && <Thermometer size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />}
      {type === 'sun' && <Sun size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />}
      {type === 'zap' && <Zap size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />}
      {type === 'pin' && <MapPin size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />}
      {type === 'power' && <Power size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />}
    </div>
  );
}

export default function ThermostatPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'overview' | 'history'>('overview');
  const [targetTemp, setTargetTemp] = useState(74);
  const [heatMode, setHeatMode] = useState<'heat' | 'cool' | 'fan' | 'auto'>('heat');
  const [deviceInfoOpen, setDeviceInfoOpen] = useState(false);

  return (
    <div style={{ background: 'var(--background)', minHeight: '100%', fontFamily: 'var(--font-body)' }}>

      {/* ── Header ── */}
      <div
        className="sticky top-0 z-10 px-5 pt-4 pb-0"
        style={{ background: 'var(--panel)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-start justify-between mb-1">
          <div className="flex-1">
            {/* Title */}
            <div className="flex items-center gap-1.5">
              <span
                className="font-semibold text-xl"
                style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}
              >
                Thermostat (living room)
              </span>
              <ChevronDown size={16} style={{ color: 'var(--foreground)' }} />
            </div>
            {/* Subtitle */}
            <p
              className="text-[12.8px] mt-0.5"
              style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
            >
              Oakwood Residences • Unit 4B
            </p>
            {/* Status */}
            <div className="flex items-center gap-1.5 mt-1">
              <div className="size-2 rounded-sm" style={{ background: 'var(--success)' }} />
              <span
                className="text-xs font-semibold"
                style={{ color: 'var(--success)', fontFamily: 'var(--font-ui)' }}
              >
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
                fontSize: '16px',
              }}
            >
              {t}
              {tab === t && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: 'var(--foreground)' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {tab === 'overview' ? (
        <div className="space-y-0">

          {/* ── Sleep Mode Banner ── */}
          <div className="px-4 pt-4">
            <div
              className="rounded-lg flex items-center gap-3 px-4 py-3"
              style={{
                background: 'var(--warning-light)',
                border: '1px solid var(--warning)',
              }}
            >
              <div
                className="size-6 flex items-center justify-center flex-none rounded"
                style={{ background: 'var(--warning-light)' }}
              >
                <Moon size={20} style={{ color: 'var(--accent-foreground)' }} strokeWidth={1.67} />
              </div>
              <div>
                <p
                  className="font-semibold text-[16px] leading-5"
                  style={{ color: 'var(--accent-foreground)', fontFamily: 'var(--font-body)' }}
                >
                  Set by Sleep Mode
                </p>
                <p
                  className="text-[12.8px] leading-5 opacity-90 mt-0.5"
                  style={{ color: 'var(--accent-foreground)', fontFamily: 'var(--font-body)' }}
                >
                  Next scheduled change at 6:30 AM
                </p>
              </div>
            </div>
          </div>

          {/* ── Temperature Hero ── */}
          <div className="relative px-4 pt-6 pb-4" style={{ minHeight: '280px' }}>
            {/* Center content — offset right so pill doesn't overlap */}
            <div className="flex flex-col items-center" style={{ paddingRight: '64px' }}>
              {/* Heating label */}
              <div className="flex items-center gap-1.5 mb-2">
                <Flame size={16} style={{ color: 'var(--foreground)' }} strokeWidth={1.33} />
                <span
                  className="font-semibold"
                  style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: '16px' }}
                >
                  Heating
                </span>
              </div>

              {/* Big temperature */}
              <div
                className="font-bold leading-none"
                style={{
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '148px',
                  lineHeight: 1,
                  letterSpacing: '-0.05px',
                }}
              >
                72°
              </div>

              {/* Target */}
              <p
                className="mt-2 text-[16px]"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
              >
                Target: {targetTemp}°
              </p>
            </div>

            {/* Right-side vertical temperature control
                The pill is a horizontal flex (308px × 56px) rotated -90deg
                so it appears as a tall vertical element on the right.
                Inside: [minus] [target°] [plus] — after rotation: plus is top, minus is bottom */}
            <div
              className="absolute top-0 bottom-0 right-0 flex items-center justify-center"
              style={{ width: '60px' }}
            >
              {/* Outer pill — rotated horizontal → appears vertical */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px',
                  borderRadius: '32px',
                  background: 'var(--accent)',
                  width: '256px',
                  height: '52px',
                  transform: 'rotate(-90deg)',
                  flexShrink: 0,
                }}
              >
                {/* Minus — appears at BOTTOM after -90deg rotation */}
                <button
                  onClick={() => setTargetTemp(t => Math.max(t - 1, 50))}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.05)',
                  }}
                >
                  <Minus size={20} style={{ color: 'var(--accent-foreground)', transform: 'rotate(90deg)' }} strokeWidth={1.67} />
                </button>

                {/* Target temp — counter-rotated so text reads normally */}
                <span
                  style={{
                    transform: 'rotate(90deg)',
                    fontFamily: 'var(--font-ui)',
                    fontWeight: 600,
                    fontSize: '22px',
                    color: 'var(--accent-foreground)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {targetTemp}°
                </span>

                {/* Plus — appears at TOP after -90deg rotation */}
                <button
                  onClick={() => setTargetTemp(t => Math.min(t + 1, 90))}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.05)',
                  }}
                >
                  <Plus size={20} style={{ color: 'var(--accent-foreground)', transform: 'rotate(90deg)' }} strokeWidth={1.67} />
                </button>
              </div>
            </div>
          </div>

          {/* ── Humidity Row ── */}
          <div className="px-4 pb-4">
            <div className="flex justify-between">
              <span
                className="text-[12.8px] font-semibold opacity-70"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
              >
                Indoor Humidity: 45%
              </span>
              <span
                className="text-[12.8px] font-semibold opacity-70"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
              >
                Outdoor: 85°
              </span>
            </div>
          </div>

          {/* ── Heat / Cool / Fan / Auto Toggle ── */}
          <div className="px-4 pb-4">
            <div
              className="flex h-12 p-1 rounded-lg"
              style={{ background: 'var(--surface)' }}
            >
              {(['heat', 'cool', 'fan', 'auto'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setHeatMode(mode)}
                  className="flex-1 rounded-md font-semibold capitalize transition-colors text-[16px]"
                  style={{
                    background: heatMode === mode ? '#ffffff' : 'transparent',
                    color: 'var(--accent-foreground)',
                    fontFamily: 'var(--font-body)',
                    boxShadow: heatMode === mode ? '0px 1px 3px 0px rgba(0,0,0,0.10)' : undefined,
                  }}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* ── Status Row ── */}
          <div className="px-4 pb-4 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full" style={{ background: '#16a34a' }} />
              <span
                className="font-semibold text-[12.8px]"
                style={{ color: '#0a8f3b', fontFamily: 'var(--font-body)' }}
              >
                Online
              </span>
            </div>
            <div className="size-1 rounded-full opacity-30" style={{ background: 'var(--foreground)' }} />
            <span
              className="text-[12.8px]"
              style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
            >
              Updated just now
            </span>
          </div>

          {/* ── Stat Cards ── */}
          <div className="px-4 pb-4 grid grid-cols-2 gap-3">
            {/* Today's Avg */}
            <div
              className="rounded-lg flex items-center gap-4 p-[17px]"
              style={{
                background: 'var(--surface)',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.02)',
              }}
            >
              <div
                className="size-9 rounded-full flex items-center justify-center flex-none"
                style={{ background: 'var(--accent)' }}
              >
                <Thermometer size={18} style={{ color: 'var(--accent-foreground)' }} strokeWidth={1.5} />
              </div>
              <div>
                <p
                  className="text-[12.8px] leading-5"
                  style={{ color: '#6b7785', fontFamily: 'var(--font-body)' }}
                >
                  Today's Avg
                </p>
                <p
                  className="font-semibold text-[16px] leading-5 mt-0.5"
                  style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}
                >
                  70°
                </p>
              </div>
            </div>

            {/* Energy Use */}
            <div
              className="rounded-lg flex items-center gap-4 p-[17px]"
              style={{
                background: 'var(--surface)',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.02)',
              }}
            >
              <div
                className="size-9 rounded-full flex items-center justify-center flex-none"
                style={{ background: 'var(--accent)' }}
              >
                <Leaf size={18} style={{ color: 'var(--accent-foreground)' }} strokeWidth={1.5} />
              </div>
              <div>
                <p
                  className="text-[12.8px] leading-5"
                  style={{ color: '#6b7785', fontFamily: 'var(--font-body)' }}
                >
                  Energy Use
                </p>
                <p
                  className="font-semibold text-[16px] leading-5 mt-0.5"
                  style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}
                >
                  Efficient
                </p>
              </div>
            </div>
          </div>

          {/* ── Device Info Accordion ── */}
          <div className="px-4 pb-6">
            <div
              className="rounded-lg overflow-hidden"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <button
                onClick={() => setDeviceInfoOpen(o => !o)}
                className="w-full px-5 py-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  {/* Info icon (Device Info) */}
                  <Info size={20} style={{ color: 'var(--surface-foreground)' }} strokeWidth={1.67} />
                  <span
                    className="font-semibold text-[16px]"
                    style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}
                  >
                    Device Info
                  </span>
                </div>
                <ChevronDown
                  size={20}
                  style={{ color: 'var(--surface-foreground)' }}
                  className={`transition-transform ${deviceInfoOpen ? 'rotate-180' : ''}`}
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
                    ['Model', 'Armada TH-400'],
                    ['Serial', 'AWH-4459-22'],
                    ['Firmware', '1.4.2'],
                    ['Connection', 'WiFi'],
                    ['Last Online', '10 sec ago'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between">
                      <span
                        className="text-[14px] opacity-70"
                        style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}
                      >
                        {k}
                      </span>
                      <span
                        className="text-[14px] font-semibold"
                        style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}
                      >
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* ── History Tab ── */
        <div className="p-4">
          {historyData.map((section) => (
            <div key={section.period} className="mb-6">
              <p
                className="text-xs font-semibold opacity-70 mb-3 tracking-wider"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)' }}
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
                        className="font-semibold text-[16px]"
                        style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}
                      >
                        {event.title}
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <Clock size={13} className="opacity-60" style={{ color: 'var(--accent)' }} strokeWidth={1.8} />
                        <span
                          className="text-xs opacity-70"
                          style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
                        >
                          {event.sub}
                        </span>
                      </div>
                      <p
                        className="text-xs opacity-50 mt-0.5"
                        style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
                      >
                        {event.time}
                      </p>
                      {i < section.events.length - 1 && (
                        <div
                          className="mt-3 opacity-20"
                          style={{ borderBottom: '1px solid var(--chart-5)' }}
                        />
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