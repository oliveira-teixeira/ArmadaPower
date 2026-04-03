import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronDown, MapPin, Zap, Moon, Sun, CheckCircle } from 'lucide-react';

const historyData = [
  {
    period: 'Today',
    events: [
      { icon: 'moon', title: 'Sleep Mode activated', sub: 'Triggered by Evening Routine', device: 'Apt 4B', time: '10:00 PM' },
      { icon: 'therm', title: 'Temperature set to 72°', sub: 'Manually adjusted', device: 'Living Room Thermostat', time: '6:30 PM' },
    ],
  },
  {
    period: 'Yesterday',
    events: [
      { icon: 'sun', title: 'Morning Schedule active', sub: 'Scheduled change', device: 'Living Room Thermostat', time: '8:00 AM' },
      { icon: 'zap', title: 'Energy saving event ended', sub: 'Set by utility program', device: 'Water Heater', time: '7:15 AM' },
    ],
  },
  {
    period: 'Earlier',
    events: [
      { icon: 'pin', title: 'Away Mode activated', sub: 'Triggered by location', device: 'Main Home', time: 'Oct 12, 9:00 AM' },
      { icon: 'power', title: 'Water heater turned on', sub: 'Manually adjusted', device: 'Water Heater', time: 'Oct 11, 8:45 PM' },
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
      {type === 'therm' && (
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
          <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {type === 'sun' && <Sun size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />}
      {type === 'zap' && <Zap size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />}
      {type === 'pin' && <MapPin size={15} style={{ color: 'var(--accent)' }} strokeWidth={1.8} />}
      {type === 'power' && (
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
          <path d="M18.36 6.64a9 9 0 11-12.73 0M12 2v10" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

export default function ActivityPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'alerts' | 'history'>('alerts');

  return (
    <div style={{ background: 'var(--background)', minHeight: '100%', fontFamily: 'var(--font-body)' }}>

      {/* ── Header ── */}
      <div
        className="sticky top-0 z-10 px-5 pt-4 pb-0"
        style={{ background: 'var(--panel)', borderBottom: '1px solid var(--chart-5)' }}
      >
        <div className="flex items-center gap-3 mb-1">
          <button onClick={() => navigate(-1)} style={{ color: 'var(--foreground)' }}>
            <ArrowLeft size={22} strokeWidth={2} />
          </button>
          <div className="flex-1 text-center pr-6">
            <p className="font-semibold text-base" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}>
              Activity
            </p>
            <button className="flex items-center gap-1 justify-center mx-auto">
              <span className="text-sm" style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}>Apt 4B</span>
              <ChevronDown size={14} style={{ color: 'var(--accent)' }} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mt-2" style={{ borderBottom: '1px solid var(--border)' }}>
          <button
            onClick={() => setTab('alerts')}
            className="flex-1 py-3.5 font-semibold relative flex items-center justify-center gap-2"
            style={{
              color: tab === 'alerts' ? 'var(--foreground)' : 'var(--accent)',
              opacity: tab === 'alerts' ? 1 : 0.7,
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
            }}
          >
            Alerts
            <span
              className="text-xs rounded-full px-1.5 py-0.5 font-semibold"
              style={{ background: 'var(--primary)', color: 'var(--foreground)', fontFamily: 'var(--font-ui)' }}
            >
              1
            </span>
            {tab === 'alerts' && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'var(--foreground)' }} />
            )}
          </button>
          <button
            onClick={() => setTab('history')}
            className="flex-1 py-3.5 font-semibold relative"
            style={{
              color: tab === 'history' ? 'var(--foreground)' : 'var(--accent)',
              opacity: tab === 'history' ? 1 : 0.7,
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
            }}
          >
            History
            {tab === 'history' && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'var(--foreground)' }} />
            )}
          </button>
        </div>
      </div>

      {tab === 'alerts' ? (
        <div className="p-4 space-y-5">

          {/* Active Alerts */}
          <div>
            <p
              className="font-semibold text-base mb-3"
              style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}
            >
              Active Alerts
            </p>
            <div className="space-y-3">

              {/* Water Heater Offline */}
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid #fca5a5',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                <div className="p-4">
                  <div className="flex gap-3">
                    <div className="size-10 rounded-full flex items-center justify-center flex-none" style={{ background: '#fef2f2' }}>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                        <path d="M1 6s4-4 11-4 11 4 11 4" stroke="var(--danger)" strokeWidth="2" strokeLinecap="round" />
                        <path d="M1 6l1.5 1.5M23 6l-1.5 1.5M1 6l11 11L23 6" stroke="var(--danger)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                        Water heater is offline
                      </p>
                      <p className="text-sm opacity-70 mt-0.5" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                        We lost connection to your device and cannot control it.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                    <span className="text-xs opacity-70" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                      Basement • Water Heater
                    </span>
                    <span className="text-xs opacity-60" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                      12 min ago
                    </span>
                  </div>
                </div>
                <div className="p-3 flex gap-2" style={{ borderTop: '1px solid var(--border)' }}>
                  <button
                    className="flex-1 py-2 rounded-lg text-sm font-semibold"
                    style={{
                      border: '1px solid var(--border)',
                      color: 'var(--surface-foreground)',
                      fontFamily: 'var(--font-body)',
                      borderRadius: 'var(--radius-button)',
                    }}
                  >
                    Troubleshoot
                  </button>
                  <button
                    className="flex-1 py-2 rounded-lg text-sm font-semibold"
                    style={{
                      background: 'var(--primary)',
                      color: 'var(--foreground)',
                      fontFamily: 'var(--font-body)',
                      borderRadius: 'var(--radius-button)',
                    }}
                  >
                    View Device
                  </button>
                </div>
              </div>

              {/* Utility Event Alert */}
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid #fde68a',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                <div className="p-4">
                  <div className="flex gap-3">
                    <div className="size-10 rounded-full flex items-center justify-center flex-none" style={{ background: '#fffbeb' }}>
                      <Zap size={18} style={{ color: 'var(--warning)' }} strokeWidth={1.8} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                        Utility event starting soon
                      </p>
                      <p className="text-sm opacity-70 mt-0.5" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                        Your utility provider will limit energy usage from 2:00 PM to 6:00 PM.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                    <span className="text-xs opacity-70" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                      Main Home
                    </span>
                    <span className="text-xs opacity-60" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                      45 min ago
                    </span>
                  </div>
                </div>
                <div className="p-3 flex gap-2" style={{ borderTop: '1px solid var(--border)' }}>
                  <button
                    className="flex-1 py-2 rounded-lg text-sm font-semibold"
                    style={{
                      border: '1px solid var(--border)',
                      color: 'var(--surface-foreground)',
                      fontFamily: 'var(--font-body)',
                      borderRadius: 'var(--radius-button)',
                    }}
                  >
                    Opt-out
                  </button>
                  <button
                    className="flex-1 py-2 rounded-lg text-sm font-semibold"
                    style={{
                      background: 'var(--primary)',
                      color: 'var(--foreground)',
                      fontFamily: 'var(--font-body)',
                      borderRadius: 'var(--radius-button)',
                    }}
                  >
                    Review
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Alerts */}
          <div>
            <p
              className="font-semibold text-base mb-3"
              style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}
            >
              Recent Alerts
            </p>
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-card)',
              }}
            >
              <div className="p-4">
                <div className="flex gap-3">
                  <div
                    className="size-10 rounded-full flex items-center justify-center flex-none border"
                    style={{ background: 'rgba(202,214,236,0.3)', borderColor: 'var(--border)' }}
                  >
                    <CheckCircle size={18} style={{ color: 'var(--primary)' }} strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-base" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                      Sensor is back online
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)' }}>
                      The living room temperature sensor is back online.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                  <span className="text-xs opacity-70" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                    Living Room • Sensor
                  </span>
                  <span className="text-xs opacity-60" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                    Yesterday
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* History Tab */
        <div className="p-4">
          {/* Filters */}
          <div className="flex gap-2 mb-5">
            <button
              className="flex items-center gap-1.5 rounded-full px-4 py-1.5"
              style={{ border: '1px solid var(--border)' }}
            >
              <span className="text-sm" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}>All Devices</span>
              <ChevronDown size={14} style={{ color: 'var(--foreground)' }} />
            </button>
            <button
              className="flex items-center gap-1.5 rounded-full px-4 py-1.5"
              style={{ border: '1px solid var(--border)' }}
            >
              <span className="text-sm" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}>All Events</span>
              <ChevronDown size={14} style={{ color: 'var(--foreground)' }} />
            </button>
          </div>

          {historyData.map((section) => (
            <div key={section.period} className="mb-6">
              <p
                className="font-semibold text-base mb-3"
                style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}
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
                          className="w-px h-full min-h-[24px] my-1 opacity-30"
                          style={{ background: 'var(--chart-5)' }}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p
                        className="font-semibold text-base"
                        style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}
                      >
                        {event.title}
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" className="opacity-60">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="var(--accent)" strokeWidth="2" />
                          <path d="M12 6v6l4 2" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span
                          className="text-xs opacity-80"
                          style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
                        >
                          {event.sub}
                        </span>
                      </div>
                      <p
                        className="text-xs opacity-50 mt-0.5"
                        style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
                      >
                        {event.device} • {event.time}
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
