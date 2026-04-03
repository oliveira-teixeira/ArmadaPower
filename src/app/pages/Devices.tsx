import { useNavigate } from 'react-router';
import { ArrowLeft, Thermometer, Droplets, Check, AlertTriangle, X } from 'lucide-react';

const devices = [
  {
    id: 'thermostat',
    name: 'Armada Power Thermostat',
    model: 'TH-400',
    status: 'online',
    path: '/devices/thermostat',
    icon: Thermometer,
  },
  {
    id: 'water-heater',
    name: 'Armada Power Water Heater',
    model: 'WH-300',
    status: 'online',
    path: '/devices/water-heater',
    icon: Droplets,
  },
  {
    id: 'sensor',
    name: 'Water Leak Sensor',
    model: 'WLS-100',
    status: 'online',
    path: null,
    icon: ({ size, stroke, strokeWidth }: { size: number; stroke: string; strokeWidth: number }) => (
      <svg width={size} height={size} fill="none" viewBox="0 0 22 20">
        <path d="M11 1L1 19h20L11 1z" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 8v4M11 15h.01" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === 'online') {
    return (
      <div className="flex items-center gap-1.5">
        <Check size={15} style={{ color: 'var(--success-dark)' }} strokeWidth={2.5} />
        <span
          className="text-xs font-semibold"
          style={{ color: 'var(--success-dark)', fontFamily: 'var(--font-ui)' }}
        >
          Online
        </span>
      </div>
    );
  }
  if (status === 'attention') {
    return (
      <div className="flex items-center gap-1.5">
        <AlertTriangle size={15} style={{ color: 'var(--warning)' }} strokeWidth={2} />
        <span
          className="text-xs font-semibold"
          style={{ color: 'var(--warning)', fontFamily: 'var(--font-ui)' }}
        >
          Needs attention
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5">
      <X size={15} style={{ color: 'var(--danger)' }} strokeWidth={2.5} />
      <span
        className="text-xs font-semibold"
        style={{ color: 'var(--danger)', fontFamily: 'var(--font-ui)' }}
      >
        Offline
      </span>
    </div>
  );
}

export default function DevicesPage() {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--background)', minHeight: '100%', fontFamily: 'var(--font-body)' }}>

      {/* ── Header ── */}
      <div
        className="sticky top-0 z-10 px-5 py-4 flex items-center gap-3"
        style={{ background: 'var(--panel)', borderBottom: '1px solid var(--chart-5)' }}
      >
        <button onClick={() => navigate(-1)} style={{ color: 'var(--foreground)' }}>
          <ArrowLeft size={22} strokeWidth={2} />
        </button>
        <span
          className="flex-1 text-center font-semibold text-base pr-6"
          style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}
        >
          Devices Available
        </span>
      </div>

      <div className="p-6 space-y-4">
        <p
          className="font-semibold text-2xl"
          style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}
        >
          Devices Available
        </p>
        <p
          className="text-base"
          style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
        >
          View all Armada Power devices connected to your home.
        </p>

        <div className="space-y-3 pt-1">
          {devices.map((device) => {
            const IconComp = device.icon as any;
            return (
              <button
                key={device.id}
                onClick={() => device.path && navigate(device.path)}
                disabled={!device.path}
                className="w-full rounded-xl p-5 flex items-center gap-4 text-left disabled:cursor-default"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 'var(--radius-card)',
                }}
              >
                <div
                  className="size-[52px] rounded-lg flex items-center justify-center flex-none"
                  style={{ background: 'var(--accent)', borderRadius: 'var(--radius)' }}
                >
                  <IconComp size={22} stroke="var(--accent-foreground)" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="font-semibold text-base leading-tight"
                    style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}
                  >
                    {device.name}
                  </p>
                  <p
                    className="text-sm leading-tight opacity-60 mt-0.5"
                    style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)' }}
                  >
                    {device.model}
                  </p>
                  <div className="mt-1.5">
                    <StatusBadge status={device.status} />
                  </div>
                </div>

              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}