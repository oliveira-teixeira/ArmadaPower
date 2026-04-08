import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Bell, ChevronDown, X, Zap, Thermometer, Droplets, Wifi, BarChart2, ChevronRight, SquareArrowOutUpRight, Home, AlarmSmoke } from 'lucide-react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';

const weeklyData = [
  { day: 'M', value: 30 },
  { day: 'T', value: 38 },
  { day: 'W', value: 52, current: true },
  { day: 'T', value: 42 },
  { day: 'F', value: 33 },
  { day: 'S', value: 25 },
  { day: 'S', value: 25 },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [welcomeDismissed, setWelcomeDismissed] = useState(false);
  const [energyEventDismissed, setEnergyEventDismissed] = useState(false);
  const [awayMode, setAwayMode] = useState(false);

  return (
    <div style={{ background: 'var(--background)', minHeight: '100%', fontFamily: 'var(--font-body)' }}>

      {/* ── Header ── */}
      <div
        className="sticky top-0 z-10 px-5 py-4 flex items-center justify-between"
        style={{ background: 'var(--panel)', borderBottom: '1px solid var(--chart-5)', borderBottomOpacity: 0.5 }}
      >
        <button className="flex items-center gap-1.5">
          <span className="font-semibold text-xl" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}>
            Unit 4B
          </span>
          <ChevronDown size={16} style={{ color: 'var(--foreground)' }} />
        </button>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/activity')}>
            <Bell size={22} style={{ color: 'var(--foreground)' }} strokeWidth={1.8} />
          </button>
          <button
            className="size-8 rounded-full flex items-center justify-center"
            style={{ background: 'var(--accent)' }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: 'var(--accent-foreground)', fontFamily: 'var(--font-ui)' }}
            >
              LS
            </span>
          </button>
        </div>
      </div>

      <div className="p-4 space-y-3">

        {/* ── Welcome Banner ── */}
        {!welcomeDismissed && (
          <div
            className="relative rounded-xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #183d64 0%, #0f2a4a 100%)', border: '1px solid var(--chart-5)' }}
          >
            <button
              onClick={() => setWelcomeDismissed(true)}
              className="absolute top-3 right-3"
              style={{ color: 'var(--accent)' }}
            >
              <X size={16} />
            </button>
            <div className="p-5 pr-8">
              <p
                className="font-semibold text-xl mb-2"
                style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}
              >
                Welcome to Armada Power
              </p>
              <p
                className="text-sm opacity-90 mb-4"
                style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}
              >
                Let's take a quick tour to learn how to manage your new smart devices.
              </p>
              <button
                className="w-full py-2.5 rounded-lg font-semibold text-base"
                style={{
                  background: 'var(--primary)',
                  color: 'var(--foreground)',
                  fontFamily: 'var(--font-body)',
                  borderRadius: 'var(--radius-button)',
                }}
              >
                Start Tour
              </button>
            </div>
          </div>
        )}

        {/* ── Energy Saving Event ── */}
        {!energyEventDismissed && (
          <div
            className="relative rounded-xl p-4 pr-8"
            style={{ background: 'var(--panel)', border: '1px solid var(--chart-5)' }}
          >
            <button
              onClick={() => setEnergyEventDismissed(true)}
              className="absolute top-3 right-3"
              style={{ color: 'var(--accent)' }}
            >
              <X size={16} />
            </button>
            <div className="flex items-start gap-3">
              <Zap size={22} style={{ color: 'var(--foreground)' }} strokeWidth={2} className="mt-0.5 flex-none" />
              <div>
                <p className="font-semibold text-sm" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}>
                  Energy Saving Event Active
                </p>
                <p className="text-xs opacity-70 mt-1" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}>
                  Heating temporarily limited by your utility provider.
                </p>
                <p className="text-xs opacity-70 mt-1" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}>
                  Ends in: 48 minutes
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── Set Away Mode ── */}
        <button
          onClick={() => setAwayMode(m => !m)}
          className="w-full text-left"
          style={{
            background: awayMode ? '#183d64' : 'var(--surface)',
            border: awayMode ? '1px solid #7695cf' : '1px solid var(--border)',
            borderRadius: 'var(--radius-card)',
            padding: awayMode ? '24px 17px' : '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* Icon */}
          <div
            className="flex items-center justify-center flex-none"
            style={{
              width: 36,
              height: 36,
              borderRadius: '6px',
              background: awayMode ? 'var(--panel)' : 'var(--accent)',
              flexShrink: 0,
            }}
          >
            {awayMode ? (
              <SquareArrowOutUpRight size={20} style={{ color: 'var(--foreground)' }} strokeWidth={1.7} />
            ) : (
              <Home size={20} style={{ color: 'var(--accent-foreground)' }} strokeWidth={1.7} />
            )}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p
              className="font-semibold"
              style={{
                color: awayMode ? 'var(--foreground)' : 'var(--surface-foreground)',
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: '20px',
              }}
            >
              {awayMode ? 'Away Mode Active' : 'Set Away Mode'}
            </p>
            {awayMode && (
              <p
                style={{
                  color: 'var(--primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '10.24px',
                  lineHeight: '16px',
                  fontWeight: 600,
                }}
              >
                Tap to return to Home mode
              </p>
            )}
          </div>

          {/* Trailing chevron only in default state */}
          {!awayMode && <ChevronRight size={18} style={{ color: 'var(--border)' }} />}
        </button>

        {/* ── Thermostat Card ── */}
        <button
          onClick={() => navigate('/devices/thermostat')}
          className="w-full rounded-xl p-5 text-left"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-card)',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Thermometer size={20} style={{ color: 'var(--surface-foreground)' }} strokeWidth={1.8} />
              <span className="font-semibold text-base" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                Thermostat
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full" style={{ background: 'var(--success-dark)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--success-dark)', fontFamily: 'var(--font-ui)' }}>
                Online
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center mb-3">
            <span
              className="font-bold"
              style={{ color: 'var(--surface-foreground)', fontSize: '4rem', lineHeight: 1.1, fontFamily: 'var(--font-body)' }}
            >
              72°
            </span>
            <span
              className="text-base mt-1"
              style={{ color: 'var(--accent-foreground)', fontFamily: 'var(--font-body)', opacity: 0.7 }}
            >
              Cooling to 70°
            </span>
            <span
              className="text-xs font-semibold mt-0.5"
              style={{ color: 'var(--destructive)', fontFamily: 'var(--font-body)' }}
            >
              Auxiliary mode
            </span>
          </div>
          <div
            className="flex justify-between pt-3"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <span
              className="text-xs font-semibold opacity-70"
              style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}
            >
              Indoor Humidity: 45%
            </span>
            <span
              className="text-xs font-semibold opacity-70"
              style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}
            >
              Outdoor: 85°
            </span>
          </div>
        </button>

        {/* ── Water Heater Card ── */}
        <button
          onClick={() => navigate('/devices/water-heater')}
          className="w-full rounded-xl p-5 text-left"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-card)',
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Droplets size={20} style={{ color: 'var(--surface-foreground)' }} strokeWidth={1.8} />
              <span className="font-semibold text-base" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                Water Heater
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full" style={{ background: 'var(--success-dark)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--success-dark)', fontFamily: 'var(--font-ui)' }}>
                Online
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="size-20 rounded-lg flex items-center justify-center flex-none"
              style={{ background: 'var(--accent)' }}
            >
              <span
                className="font-bold text-2xl"
                style={{ color: 'var(--accent-foreground)', fontFamily: 'var(--font-body)' }}
              >
                120°
              </span>
            </div>
            <div>
              <p className="text-xs opacity-60 mb-1" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                Current Mode
              </p>
              <p className="font-semibold text-base" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                Standard Heating
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                Hot Water Level
              </p>
              <p className="font-semibold text-base" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
                85%
              </p>
            </div>
          </div>
        </button>

        {/* ── Water Leak Sensor ── */}
        <div
          className="rounded-xl p-4 flex items-center gap-3"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-card)',
          }}
        >
          <div
            className="size-9 rounded-lg flex items-center justify-center flex-none"
            style={{ background: 'var(--accent)', borderRadius: 'var(--radius)' }}
          >
            <AlarmSmoke size={18} style={{ color: 'var(--accent-foreground)' }} strokeWidth={1.8} />
          </div>
          <span
            className="font-semibold text-base flex-1"
            style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}
          >
            Water Leak Sensor
          </span>
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: 'var(--success-dark)',
              color: 'var(--foreground)',
              fontFamily: 'var(--font-ui)',
            }}
          >
            All clear
          </span>
        </div>

        {/* ── Energy Usage Card ── */}
        <button
          onClick={() => navigate('/energy')}
          className="w-full p-5 text-left"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-card)',
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <BarChart2 size={18} style={{ color: 'var(--surface-foreground)' }} strokeWidth={1.8} />
            <span className="font-semibold text-base" style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}>
              Energy Usage
            </span>
          </div>
          <p
            className="font-bold mt-2"
            style={{ color: 'var(--surface-foreground)', fontSize: '2.5rem', fontFamily: 'var(--font-body)' }}
          >
            245 kWh
          </p>
          <p
            className="text-xs mt-1 mb-4"
            style={{ color: 'var(--surface-foreground)', opacity: 0.5, fontFamily: 'var(--font-body)' }}
          >
            Total last week
          </p>
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={weeklyData} barCategoryGap="20%">
              <XAxis
                dataKey="day"
                tick={{ fill: 'var(--accent-foreground)', fontSize: 11, fontFamily: 'var(--font-ui)', opacity: 0.55 }}
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                {weeklyData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.current ? 'var(--primary)' : 'rgba(75,117,192,0.45)'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </button>
      </div>
    </div>
  );
}