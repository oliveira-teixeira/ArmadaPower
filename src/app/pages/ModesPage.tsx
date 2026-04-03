import { useState, useRef, useEffect, type CSSProperties } from 'react';
import {
  Home, Moon, Briefcase, Plane, Zap, Plus,
  Clock, MapPin, CheckCircle, AlertTriangle,
  ChevronDown, ChevronUp, ArrowRight, ArrowLeft,
  Bell, SlidersHorizontal, Thermometer, Droplets,
  Sun, Check, RefreshCw, X,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
type LucideComponent = React.ComponentType<{
  size?: number; strokeWidth?: number | string;
  style?: CSSProperties; className?: string;
}>;

interface Mode { id: string; icon: LucideComponent; label: string; description: string; }
interface Routine {
  id: string; name: string;
  triggerIcon: LucideComponent; triggerLabel: string; triggerSub: string;
  actionIcon: LucideComponent; actionLabel: string;
  lastRun?: string; conflict?: string; enabled: boolean;
}

// ─── Static data ──────────────────────────────────────────────────────────────
const MODES: Mode[] = [
  { id: 'home',     icon: Home,      label: 'Home',     description: 'Normal operation with comfort settings' },
  { id: 'sleep',    icon: Moon,      label: 'Sleep',    description: 'Reduced activity, lower temperatures at night' },
  { id: 'away',     icon: Briefcase, label: 'Away',     description: "Energy-saving mode when you're out" },
  { id: 'vacation', icon: Plane,     label: 'Vacation', description: 'Minimal energy use for extended absence' },
  { id: 'eco',      icon: Zap,       label: 'Eco',      description: 'Prioritize energy savings across all devices' },
];
const ICON_OPTS: { id: string; Icon: LucideComponent }[] = [
  { id: 'home', Icon: Home }, { id: 'sleep', Icon: Moon }, { id: 'morning', Icon: Sun },
  { id: 'vacation', Icon: Plane }, { id: 'away', Icon: Briefcase },
];
const INITIAL_ROUTINES: Routine[] = [
  { id: 'morning-warmup', name: 'Morning Warmup', triggerIcon: Clock, triggerLabel: '6:00 AM', triggerSub: '(Weekdays)', actionIcon: Sun,      actionLabel: 'Morning Mode', lastRun: 'Today, 6:00 AM', enabled: true },
  { id: 'leave-home',     name: 'Leave Home',     triggerIcon: MapPin, triggerLabel: 'Everyone', triggerSub: 'leaves',     actionIcon: Briefcase, actionLabel: 'Away Mode',    conflict: 'May conflict with Peak Energy Event', enabled: true },
  { id: 'nightly-savings',name: 'Nightly Savings',triggerIcon: Clock, triggerLabel: '10:30 PM', triggerSub: '(Daily)',    actionIcon: Moon,      actionLabel: 'Sleep Mode',  enabled: false },
];

// ─── Shared primitives ────────────────────────────────────────────────────────
function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button role="switch" aria-checked={on} onClick={() => onChange(!on)}
      style={{
        width: 44, height: 24, borderRadius: 12, flexShrink: 0,
        background: on ? 'var(--primary)' : 'rgba(0,0,0,0.15)',
        position: 'relative', border: 'none', cursor: 'pointer', transition: 'background 0.2s',
      }}>
      <span style={{
        position: 'absolute', top: 2, left: on ? 22 : 2, width: 20, height: 20,
        borderRadius: 10, background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.25)',
        transition: 'left 0.18s', display: 'block',
      }} />
    </button>
  );
}

function StepBadge({ n }: { n: number }) {
  return (
    <span style={{
      width: 24, height: 24, borderRadius: 12, flexShrink: 0,
      background: 'var(--panel-deep)', color: 'var(--foreground)',
      fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    }}>{n}</span>
  );
}
function StepHeading({ n, label }: { n: number; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <StepBadge n={n} />
      <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600 }}>
        {label}
      </span>
    </div>
  );
}

// ─── Time Modal ───────────────────────────────────────────────────────────────
const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function TimeModal({
  open, onClose, timeStart, timeEnd, dayPreset, customDays,
  onTimeStart, onTimeEnd, onDayPreset, onCustomDays,
}: {
  open: boolean; onClose: () => void;
  timeStart: string; timeEnd: string;
  dayPreset: 'weekdays' | 'weekends' | 'custom';
  customDays: string[];
  onTimeStart: (v: string) => void; onTimeEnd: (v: string) => void;
  onDayPreset: (v: 'weekdays' | 'weekends' | 'custom') => void;
  onCustomDays: (v: string[]) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) onClose(); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, onClose]);

  if (!open) return null;

  const pillBtn = (label: string, active: boolean, onClick: () => void) => (
    <button onClick={onClick} style={{
      flex: 1, padding: '8px 0', borderRadius: 'var(--radius-pill)',
      background: active ? 'var(--panel-highlight)' : 'transparent',
      border: `1px solid ${active ? 'var(--primary)' : 'var(--chart-5)'}`,
      color: active ? 'var(--foreground)' : 'var(--accent)',
      fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600,
      cursor: 'pointer', transition: 'all 0.15s',
    }}>{label}</button>
  );

  const toggleDay = (d: string) =>
    onCustomDays(customDays.includes(d) ? customDays.filter(x => x !== d) : [...customDays, d]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.45)',
    }}>
      <div ref={ref} style={{
        background: 'var(--panel)', borderRadius: 'var(--radius-card)',
        border: '1px solid var(--chart-5)', padding: 20, width: 'min(320px, 88vw)',
        boxSizing: 'border-box',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', gap: 14,
      }}>
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Clock size={14} strokeWidth={1.5} style={{ color: 'var(--secondary)' }} />
            <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600 }}>Time</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)', display: 'flex', alignItems: 'center' }}>
            <X size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Weekdays / Weekends */}
        <div style={{ display: 'flex', gap: 8 }}>
          {pillBtn('Weekdays', dayPreset === 'weekdays', () => onDayPreset('weekdays'))}
          {pillBtn('Weekends', dayPreset === 'weekends', () => onDayPreset('weekends'))}
        </div>

        {/* Select Days button */}
        <button
          onClick={() => onDayPreset('custom')}
          style={{
            width: '100%', padding: '8px 0', borderRadius: 'var(--radius-pill)',
            background: dayPreset === 'custom' ? 'var(--panel-highlight)' : 'transparent',
            border: `1px solid ${dayPreset === 'custom' ? 'var(--primary)' : 'var(--chart-5)'}`,
            color: dayPreset === 'custom' ? 'var(--foreground)' : 'var(--accent)',
            fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600,
            cursor: 'pointer',
          }}>Select Days</button>

        {/* Custom day picker */}
        {dayPreset === 'custom' && (
          <div style={{ display: 'flex', gap: 4 }}>
            {DAYS_OF_WEEK.map(d => (
              <button key={d} onClick={() => toggleDay(d)} style={{
                flex: 1, padding: '5px 0', borderRadius: 4,
                background: customDays.includes(d) ? 'var(--primary)' : 'var(--panel-deep)',
                border: 'none', cursor: 'pointer',
                color: customDays.includes(d) ? 'var(--foreground)' : 'var(--accent)',
                fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600,
              }}>{d[0]}</button>
            ))}
          </div>
        )}

        {/* Time range row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <input type="time" value={timeStart} onChange={e => onTimeStart(e.target.value)}
            style={{
              flex: 1, background: 'var(--panel-deep)', border: '1px solid var(--chart-5)',
              borderRadius: 8, padding: '8px 10px', color: 'var(--foreground)',
              fontFamily: 'var(--font-body)', fontSize: '12.8px', outline: 'none',
              colorScheme: 'dark',
            }} />
          <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px' }}>—</span>
          <input type="time" value={timeEnd} onChange={e => onTimeEnd(e.target.value)}
            style={{
              flex: 1, background: 'var(--panel-deep)', border: '1px solid var(--chart-5)',
              borderRadius: 8, padding: '8px 10px', color: 'var(--foreground)',
              fontFamily: 'var(--font-body)', fontSize: '12.8px', outline: 'none',
              colorScheme: 'dark',
            }} />
        </div>
      </div>
    </div>
  );
}

// ─── Location Modal ───────────────────────────────────────────────────────────
type LocationTrigger = 'none' | 'everyone-home' | 'no-one-home';
const LOCATION_OPTIONS: { id: LocationTrigger; label: string }[] = [
  { id: 'none',         label: 'No location triggers' },
  { id: 'everyone-home',label: 'Everyone is home' },
  { id: 'no-one-home',  label: 'No one is home' },
];

function LocationModal({ open, onClose, value, onChange }: {
  open: boolean; onClose: () => void;
  value: LocationTrigger; onChange: (v: LocationTrigger) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) onClose(); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.45)',
    }}>
      <div ref={ref} style={{
        background: 'var(--panel)', borderRadius: 'var(--radius-card)',
        border: '1px solid var(--chart-5)', overflow: 'hidden',
        width: 260, boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      }}>
        {/* Location label */}
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--chart-5)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <MapPin size={14} strokeWidth={1.5} style={{ color: 'var(--secondary)' }} />
          <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600 }}>Location</span>
        </div>
        {LOCATION_OPTIONS.map((opt, i) => (
          <button key={opt.id} onClick={() => { onChange(opt.id); onClose(); }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              width: '100%', padding: '14px 16px', textAlign: 'left',
              background: 'transparent', border: 'none', cursor: 'pointer',
              borderBottom: i < LOCATION_OPTIONS.length - 1 ? '1px solid var(--chart-5)' : 'none',
            }}>
            <span style={{
              color: 'var(--foreground)', fontFamily: 'var(--font-body)',
              fontSize: '12.8px', fontWeight: value === opt.id ? 600 : 400,
            }}>{opt.label}</span>
            {value === opt.id && <Check size={16} strokeWidth={2} style={{ color: 'var(--primary)', flexShrink: 0 }} />}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Mode Select Modal ────────────────────────────────────────────────────────
function ModeSelectModal({ open, onClose, value, onChange }: {
  open: boolean; onClose: () => void;
  value: string; onChange: (v: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) onClose(); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.55)',
    }}>
      <div ref={ref} style={{
        background: 'var(--panel)', borderRadius: 'var(--radius-card)',
        border: '1px solid var(--chart-5)', overflow: 'hidden',
        width: 'min(320px, 88vw)', boxSizing: 'border-box',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      }}>
        {/* Header */}
        <div style={{
          padding: '14px 16px', borderBottom: '1px solid var(--chart-5)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Moon size={14} strokeWidth={1.5} style={{ color: 'var(--secondary)' }} />
            <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600 }}>
              Select a Mode
            </span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)', display: 'flex', alignItems: 'center' }}>
            <X size={16} strokeWidth={2} />
          </button>
        </div>

        {/* Mode rows */}
        {MODES.map((mode, i) => {
          const isSelected = value === mode.id;
          return (
            <button key={mode.id}
              onClick={() => { onChange(mode.id); onClose(); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                width: '100%', padding: '14px 16px', textAlign: 'left',
                background: isSelected ? 'var(--panel-highlight)' : 'transparent',
                border: 'none', cursor: 'pointer',
                borderBottom: i < MODES.length - 1 ? '1px solid var(--chart-5)' : 'none',
                transition: 'background 0.12s',
              }}>
              {/* Icon */}
              <div style={{
                width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: isSelected ? 'var(--primary)' : 'var(--panel-deep)',
              }}>
                <mode.icon size={18} strokeWidth={1.5} style={{ color: 'var(--foreground)' }} />
              </div>
              {/* Labels */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, margin: 0 }}>
                  {mode.label} Mode
                </p>
                <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', margin: '2px 0 0', opacity: 0.85, lineHeight: '18px' }}>
                  {mode.description}
                </p>
              </div>
              {/* Check */}
              {isSelected && <Check size={18} strokeWidth={2.5} style={{ color: 'var(--primary)', flexShrink: 0 }} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Device Control Panel (for Direct Device Control) ─────────────────────────
function DeviceControlPanel({ opMode, setOpMode, temp, setTemp, waterMode, setWaterMode }: {
  opMode: string; setOpMode: (v: string) => void;
  temp: number; setTemp: (v: number) => void;
  waterMode: string; setWaterMode: (v: string) => void;
}) {
  const [thermoOpen, setThermoOpen] = useState(true);
  const [waterOpen, setWaterOpen]   = useState(true);

  const segBtn = (label: string, active: boolean, onClick: () => void) => (
    <button key={label} onClick={onClick} style={{
      flex: 1, padding: '8px 0', borderRadius: 4,
      background: active ? 'var(--surface)' : 'transparent',
      boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
      color: active ? 'var(--surface-foreground)' : 'var(--muted-foreground)',
      fontFamily: 'var(--font-body)', fontSize: '12.8px',
      fontWeight: active ? 600 : 400,
      border: 'none', cursor: 'pointer',
    }}>{label}</button>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Section label */}
      <div style={{ paddingLeft: 2 }}>
        <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600 }}>
          Device Control
        </span>
      </div>

      {/* Thermostat card */}
      <div style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', border: '1px solid var(--chart-5)' }}>
        <button onClick={() => setThermoOpen(o => !o)} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', padding: '14px 16px', background: 'var(--panel-highlight)',
          border: 'none', cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Thermometer size={18} strokeWidth={1.5} style={{ color: 'var(--foreground)' }} />
            </div>
            <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600 }}>
              Thermostat
            </span>
          </div>
          {thermoOpen
            ? <ChevronUp size={18} strokeWidth={1.5} style={{ color: 'var(--accent)' }} />
            : <ChevronDown size={18} strokeWidth={1.5} style={{ color: 'var(--accent)' }} />}
        </button>
        {thermoOpen && (
          <div style={{ background: 'var(--panel-deep)', padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Operating Mode */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600 }}>
                Operating Mode
              </span>
              <div style={{
                display: 'flex', background: 'var(--accent)', borderRadius: 6, padding: 3, gap: 0,
              }}>
                {['Cool', 'Heat', 'Fan', 'Auto'].map(m => segBtn(m, opMode === m.toLowerCase(), () => setOpMode(m.toLowerCase())))}
              </div>
            </div>
            {/* Target Temperature */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600 }}>
                Target Temperature
              </span>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 0,
                background: 'var(--surface)', borderRadius: 8, overflow: 'hidden',
                border: '1px solid var(--border)',
              }}>
                <button onClick={() => setTemp(Math.max(60, temp - 1))} style={{
                  width: 48, height: 44, border: 'none', background: 'transparent',
                  color: 'var(--surface-foreground)', fontSize: 22, cursor: 'pointer', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>−</button>
                <span style={{
                  flex: 1, textAlign: 'center', fontFamily: 'var(--font-body)',
                  fontSize: 16, fontWeight: 600, color: 'var(--surface-foreground)',
                }}>{temp}°F</span>
                <button onClick={() => setTemp(Math.min(90, temp + 1))} style={{
                  width: 48, height: 44, border: 'none', background: 'transparent',
                  color: 'var(--surface-foreground)', fontSize: 22, cursor: 'pointer', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>+</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Water Heater card */}
      <div style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', border: '1px solid var(--chart-5)' }}>
        <button onClick={() => setWaterOpen(o => !o)} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', padding: '14px 16px', background: 'var(--panel-highlight)',
          border: 'none', cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Droplets size={18} strokeWidth={1.5} style={{ color: 'var(--foreground)' }} />
            </div>
            <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600 }}>
              Water Heater
            </span>
          </div>
          {waterOpen
            ? <ChevronUp size={18} strokeWidth={1.5} style={{ color: 'var(--accent)' }} />
            : <ChevronDown size={18} strokeWidth={1.5} style={{ color: 'var(--accent)' }} />}
        </button>
        {waterOpen && (
          <div style={{ background: 'var(--panel-deep)', padding: 16 }}>
            <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600, display: 'block', marginBottom: 8 }}>
              Heating Mode
            </span>
            <div style={{ display: 'flex', background: 'var(--accent)', borderRadius: 6, padding: 3 }}>
              {['Eco', 'Normal', 'Bypass'].map(m => segBtn(m, waterMode === m.toLowerCase(), () => setWaterMode(m.toLowerCase())))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Create Routine ────────────────────────────────────────────────────────────
function CreateRoutineView({ onBack, onSave }: { onBack: () => void; onSave: () => void }) {
  // Trigger
  const [trigger,      setTrigger]      = useState<'time' | 'location'>('time');
  const [showTimeModal,setShowTimeModal] = useState(false);
  const [showLocModal, setShowLocModal]  = useState(false);
  const [timeStart,    setTimeStart]    = useState('22:00');
  const [timeEnd,      setTimeEnd]      = useState('22:30');
  const [dayPreset,    setDayPreset]    = useState<'weekdays' | 'weekends' | 'custom'>('weekdays');
  const [customDays,   setCustomDays]   = useState<string[]>([]);
  const [locTrigger,   setLocTrigger]   = useState<LocationTrigger>('none');

  // Action
  const [action,         setAction]       = useState<'mode' | 'device'>('mode');
  const [targetMode,     setTargetMode]   = useState('sleep');
  const [showModeModal,  setShowModeModal] = useState(false);

  // Device control (for Direct Device Control)
  const [opMode,    setOpMode]    = useState('cool');
  const [temp,      setTemp]      = useState(68);
  const [waterMode, setWaterMode] = useState('eco');

  // Permission
  const [askPermission, setAskPermission] = useState(true);

  // ── Derived display labels ──
  const fmt12 = (t: string) => {
    const [h, m] = t.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
    return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
  };
  const daysLabel = dayPreset === 'weekdays' ? 'Weekdays'
    : dayPreset === 'weekends' ? 'Weekends'
    : customDays.length ? customDays.join(', ')
    : 'Custom';

  const timeSummary  = `${fmt12(timeStart)}, ${daysLabel}`;
  const locSummary   = LOCATION_OPTIONS.find(o => o.id === locTrigger)?.label ?? '';
  const modeSummary  = MODES.find(m => m.id === targetMode)?.label ?? '';

  // Review sentence
  const reviewText = action === 'device'
    ? `At ${fmt12(timeStart)} on ${daysLabel.toLowerCase()}, set the thermostat to ${opMode.charAt(0).toUpperCase() + opMode.slice(1)} (${temp}°F) and the water heater to ${waterMode.charAt(0).toUpperCase() + waterMode.slice(1)} mode.`
    : `At ${fmt12(timeStart)} on ${daysLabel.toLowerCase()}, activate ${modeSummary.toLowerCase()} mode.`;

  // ── Shared row styles ──
  const cardStyle: CSSProperties = {
    background: 'var(--surface)', borderRadius: 'var(--radius-card)',
    border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden',
  };

  const iconBox = (active: boolean): CSSProperties => ({
    width: 36, height: 36, borderRadius: 6, flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: active ? 'var(--panel-deep)' : 'var(--accent)',
  });

  return (
    <div style={{ background: 'var(--background)', minHeight: '100%' }}>

      {/* Modals */}
      <TimeModal
        open={showTimeModal} onClose={() => setShowTimeModal(false)}
        timeStart={timeStart} timeEnd={timeEnd} dayPreset={dayPreset} customDays={customDays}
        onTimeStart={setTimeStart} onTimeEnd={setTimeEnd}
        onDayPreset={setDayPreset} onCustomDays={setCustomDays}
      />
      <LocationModal
        open={showLocModal} onClose={() => setShowLocModal(false)}
        value={locTrigger} onChange={setLocTrigger}
      />
      <ModeSelectModal
        open={showModeModal} onClose={() => setShowModeModal(false)}
        value={targetMode} onChange={setTargetMode}
      />

      {/* Header */}
      <div style={{
        background: 'var(--panel)', borderBottom: '1px solid var(--chart-5)',
        padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 8,
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <button onClick={onBack} style={{ color: 'var(--foreground)', background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
          <ArrowLeft size={22} strokeWidth={2} />
        </button>
        <p style={{
          flex: 1, textAlign: 'center', color: 'var(--foreground)',
          fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0,
        }}>Create Routine</p>
        <div style={{ width: 22 }} />
      </div>

      <div style={{ padding: '24px 20px 48px', display: 'flex', flexDirection: 'column', gap: 28 }}>

        {/* ── Step 1: Choose Trigger ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <StepHeading n={1} label="Choose Trigger" />
          <div style={cardStyle}>

            {/* Time row */}
            <button
              onClick={() => { setTrigger('time'); setShowTimeModal(true); }}
              style={{
                display: 'flex', alignItems: 'center', width: '100%',
                padding: '16px', textAlign: 'left', background: 'transparent', border: 'none',
                cursor: 'pointer', borderBottom: '1px solid rgba(0,0,0,0.08)',
              }}>
              <div style={{ width: 52, flexShrink: 0 }}>
                <div style={iconBox(trigger === 'time')}>
                  <Clock size={18} strokeWidth={1.5}
                    style={{ color: trigger === 'time' ? 'var(--foreground)' : 'var(--accent-foreground)' }} />
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>Time</p>
                {trigger === 'time' && (
                  <p style={{ color: 'var(--panel-deep)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600, margin: '4px 0 0' }}>
                    {timeSummary}
                  </p>
                )}
              </div>
              {trigger === 'time' && <Check size={20} strokeWidth={2} style={{ color: 'var(--primary)', flexShrink: 0 }} />}
            </button>

            {/* Location row */}
            <button
              onClick={() => { setTrigger('location'); setShowLocModal(true); }}
              style={{
                display: 'flex', alignItems: 'center', width: '100%',
                padding: '16px', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer',
              }}>
              <div style={{ width: 52, flexShrink: 0 }}>
                <div style={iconBox(trigger === 'location')}>
                  <MapPin size={18} strokeWidth={1.5}
                    style={{ color: trigger === 'location' ? 'var(--foreground)' : 'var(--accent-foreground)' }} />
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>Location</p>
                {trigger === 'location' && locTrigger !== 'none' && (
                  <p style={{ color: 'var(--panel-deep)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600, margin: '4px 0 0' }}>
                    {locSummary}
                  </p>
                )}
              </div>
              {trigger === 'location' && <Check size={20} strokeWidth={2} style={{ color: 'var(--primary)', flexShrink: 0 }} />}
            </button>
          </div>
        </div>

        {/* ── Step 2: Choose Action ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <StepHeading n={2} label="Choose Action" />
          <div style={cardStyle}>

            {/* Activate a Mode row */}
            <button
              onClick={() => { setAction('mode'); setShowModeModal(true); }}
              style={{
                display: 'flex', alignItems: 'center', width: '100%',
                padding: '16px', textAlign: 'left', background: 'transparent', border: 'none',
                cursor: 'pointer', borderBottom: '1px solid rgba(0,0,0,0.08)',
              }}>
              <div style={{ width: 52, flexShrink: 0 }}>
                <div style={iconBox(action === 'mode')}>
                  <Moon size={18} strokeWidth={1.5}
                    style={{ color: action === 'mode' ? 'var(--foreground)' : 'var(--accent-foreground)' }} />
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>Activate a Mode</p>
                {action === 'mode' && (
                  <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600, margin: '4px 0 0' }}>
                    {modeSummary} Mode
                  </p>
                )}
              </div>
              {action === 'mode' && <Check size={20} strokeWidth={2} style={{ color: 'var(--primary)', flexShrink: 0 }} />}
            </button>

            {/* Direct Device Control row */}
            <button
              onClick={() => setAction('device')}
              style={{
                display: 'flex', alignItems: 'center', width: '100%',
                padding: '16px', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer',
              }}>
              <div style={{ width: 52, flexShrink: 0 }}>
                <div style={iconBox(action === 'device')}>
                  <SlidersHorizontal size={18} strokeWidth={1.5}
                    style={{ color: action === 'device' ? 'var(--foreground)' : 'var(--accent-foreground)' }} />
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>Direct Device Control</p>
                <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: '12.8px', margin: '2px 0 0' }}>Advanced</p>
              </div>
              {action === 'device' && <Check size={20} strokeWidth={2} style={{ color: 'var(--primary)', flexShrink: 0 }} />}
            </button>
          </div>
        </div>

        {/* ── Device Control (only when Direct Device Control selected) ── */}
        {action === 'device' && (
          <DeviceControlPanel
            opMode={opMode} setOpMode={setOpMode}
            temp={temp} setTemp={setTemp}
            waterMode={waterMode} setWaterMode={setWaterMode}
          />
        )}

        {/* ── Step 3: Permission ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <StepHeading n={3} label="Permission" />
          <div style={{ ...cardStyle }}>
            <div style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <span style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, flex: 1 }}>
                Ask before starting routine
              </span>
              <Toggle on={askPermission} onChange={setAskPermission} />
            </div>
          </div>
        </div>

        {/* ── Step 4: Review Routine ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <StepHeading n={4} label="Review Routine" />

          {/* Summary card */}
          <div style={{
            background: 'var(--surface)', borderRadius: 'var(--radius-card)',
            border: '1px solid rgba(0,0,0,0.08)', padding: '16px 20px',
            display: 'flex', gap: 14, alignItems: 'flex-start',
          }}>
            <RefreshCw size={20} strokeWidth={1.5} style={{ color: 'var(--surface-foreground)', flexShrink: 0, marginTop: 2 }} />
            <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16, margin: 0, lineHeight: '24px' }}>
              {action === 'device' ? (
                <>
                  At <span style={{ fontWeight: 400 }}>{fmt12(timeStart)} on {daysLabel.toLowerCase()}</span>, set the thermostat to{' '}
                  <span style={{ fontWeight: 600 }}>{opMode.charAt(0).toUpperCase() + opMode.slice(1)} ({temp}°F)</span> and the water heater to{' '}
                  <span style={{ fontWeight: 600 }}>{waterMode.charAt(0).toUpperCase() + waterMode.slice(1)} mode</span>.
                </>
              ) : (
                <>
                  At <span style={{ fontWeight: 400 }}>{fmt12(timeStart)} on {daysLabel.toLowerCase()}</span>, activate{' '}
                  <span style={{ fontWeight: 600 }}>{modeSummary.toLowerCase()} mode</span>.
                </>
              )}
            </p>
          </div>

          {/* Conflict warning */}
          <div style={{
            background: 'var(--surface)', borderRadius: 6, borderLeft: '4px solid var(--warning)',
            boxShadow: 'var(--elevation-sm)', padding: '12px 16px 12px 20px',
            display: 'flex', gap: 12, alignItems: 'center',
          }}>
            <AlertTriangle size={18} strokeWidth={1.5} style={{ color: 'var(--warning)', flexShrink: 0 }} />
            <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px', margin: 0 }}>
              May conflict with your Nightly Savings automation schedule.
            </p>
          </div>
        </div>

        {/* Save */}
        <button onClick={onSave} style={{
          background: 'var(--primary)', borderRadius: 'var(--radius)', border: 'none',
          padding: '10px 12px', color: 'var(--foreground)',
          fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600,
          width: '100%', cursor: 'pointer',
        }}>Save routine</button>
      </div>
    </div>
  );
}

// ─── Create Mode View ─────────────────────────────────────────────────────────
function CreateModeView({ onBack, onSave }: { onBack: () => void; onSave: () => void }) {
  const [modeName,      setModeName]      = useState('New Mode');
  const [modeDesc,      setModeDesc]      = useState('');
  const [selectedIcon,  setSelectedIcon]  = useState('home');
  const [opMode,        setOpMode]        = useState('cool');
  const [temp,          setTemp]          = useState(68);
  const [waterMode,     setWaterMode]     = useState('eco');
  const [notifs,        setNotifs]        = useState(true);
  const iconDef = ICON_OPTS.find(i => i.id === selectedIcon) ?? ICON_OPTS[0];

  const segBtn = (label: string, val: string, active: boolean, onClick: () => void) => (
    <button key={val} onClick={onClick} style={{
      flex: 1, padding: '8px 0', borderRadius: 4,
      background: active ? 'var(--surface)' : 'transparent',
      boxShadow: active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
      color: active ? 'var(--surface-foreground)' : 'var(--muted-foreground)',
      fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: active ? 600 : 400,
      border: 'none', cursor: 'pointer',
    }}>{label}</button>
  );

  return (
    <div style={{ background: 'var(--background)', minHeight: '100%' }}>
      <div style={{
        background: 'var(--panel)', borderBottom: '1px solid var(--chart-5)',
        padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 8,
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <button onClick={onBack} style={{ color: 'var(--foreground)', background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
          <ArrowLeft size={22} strokeWidth={2} />
        </button>
        <p style={{ flex: 1, textAlign: 'center', color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>
          Create Mode
        </p>
        <div style={{ width: 22 }} />
      </div>

      <div style={{ padding: '24px 20px 48px', display: 'flex', flexDirection: 'column', gap: 32 }}>

        {/* Step 1: Basic Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <StepHeading n={1} label="Basic Info" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600 }}>Mode name</label>
              <input value={modeName} onChange={e => setModeName(e.target.value)}
                style={{
                  background: 'var(--panel-deep)', border: '1px solid var(--border)', borderRadius: 8,
                  padding: '8px 12px', height: 40, color: 'var(--foreground)',
                  fontFamily: 'var(--font-body)', fontSize: 16, boxShadow: 'var(--elevation-sm)',
                  width: '100%', boxSizing: 'border-box', outline: 'none',
                }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600 }}>Description (Optional)</label>
              <input value={modeDesc} onChange={e => setModeDesc(e.target.value)} placeholder="Enter description here"
                style={{
                  background: 'var(--panel-deep)', border: '1px solid var(--border)', borderRadius: 8,
                  padding: '8px 12px', height: 40, color: 'var(--foreground)',
                  fontFamily: 'var(--font-body)', fontSize: 16, boxShadow: 'var(--elevation-sm)',
                  width: '100%', boxSizing: 'border-box', outline: 'none',
                }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', opacity: 0.7 }}>Choose an Icon</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {ICON_OPTS.map(({ id, Icon }) => (
                  <button key={id} onClick={() => setSelectedIcon(id)} style={{
                    width: 52, height: 52, borderRadius: 8, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: selectedIcon === id ? 'var(--panel-highlight)' : 'var(--surface)',
                    border: selectedIcon === id ? '2px solid var(--primary)' : '1px solid var(--border)',
                    cursor: 'pointer',
                  }}>
                    <Icon size={22} strokeWidth={1.65}
                      style={{ color: selectedIcon === id ? 'var(--foreground)' : 'var(--surface-foreground)' }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Device Configuration */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <StepHeading n={2} label="Device Configuration" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Thermostat */}
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--chart-5)' }}>
              <div style={{ background: 'var(--panel-highlight)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Thermometer size={16} strokeWidth={1.5} style={{ color: 'var(--foreground)' }} />
                <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600 }}>Thermostat</span>
              </div>
              <div style={{ background: 'var(--panel-deep)', padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600 }}>Operating Mode</span>
                  <div style={{ display: 'flex', background: 'var(--accent)', borderRadius: 6, padding: 3 }}>
                    {['Cool', 'Heat', 'Fan', 'Auto'].map(m => segBtn(m, m.toLowerCase(), opMode === m.toLowerCase(), () => setOpMode(m.toLowerCase())))}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600 }}>Target Temperature</span>
                  <div style={{ display: 'flex', alignItems: 'center', background: 'var(--surface)', borderRadius: 8, overflow: 'hidden', border: '1px solid var(--border)' }}>
                    <button onClick={() => setTemp(t => Math.max(60, t - 1))} style={{ width: 48, height: 44, border: 'none', background: 'transparent', color: 'var(--surface-foreground)', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                    <span style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, color: 'var(--surface-foreground)' }}>{temp}°F</span>
                    <button onClick={() => setTemp(t => Math.min(90, t + 1))} style={{ width: 48, height: 44, border: 'none', background: 'transparent', color: 'var(--surface-foreground)', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Water Heater */}
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--chart-5)' }}>
              <div style={{ background: 'var(--panel-highlight)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Droplets size={16} strokeWidth={1.5} style={{ color: 'var(--foreground)' }} />
                <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600 }}>Water Heater</span>
              </div>
              <div style={{ background: 'var(--panel-deep)', padding: 16 }}>
                <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600, display: 'block', marginBottom: 8 }}>Heating Mode</span>
                <div style={{ display: 'flex', background: 'var(--accent)', borderRadius: 6, padding: 3 }}>
                  {['Eco', 'Normal', 'Bypass'].map(m => segBtn(m, m.toLowerCase(), waterMode === m.toLowerCase(), () => setWaterMode(m.toLowerCase())))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Optional Settings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <StepHeading n={3} label="Optional Settings" />
          <div style={{ background: 'var(--surface)', borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)' }}>
            <div style={{ padding: 16, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <Bell size={14} strokeWidth={1.5} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600 }}>Enable Notifications</span>
                </div>
                <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: '12.8px', opacity: 0.8, margin: 0 }}>
                  Get notified when this mode is activated.
                </p>
              </div>
              <Toggle on={notifs} onChange={setNotifs} />
            </div>
          </div>
        </div>

        {/* Step 4: Review Mode */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <StepHeading n={4} label="Review Mode" />
          <div style={{ background: 'var(--surface)', borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)', padding: 16, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <iconDef.Icon size={20} strokeWidth={2} style={{ color: 'var(--surface-foreground)', flexShrink: 0, marginTop: 2 }} />
            <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16, margin: 0, lineHeight: '24px' }}>
              <span style={{ fontWeight: 600 }}>{modeName || 'New Mode'}</span>
              {' '}sets the thermostat to{' '}
              <span style={{ fontWeight: 600 }}>{temp}°F ({opMode.charAt(0).toUpperCase() + opMode.slice(1)})</span>
              , switches the water heater to{' '}
              <span style={{ fontWeight: 600 }}>{waterMode.charAt(0).toUpperCase() + waterMode.slice(1)}</span>
              , and applies energy-saving optimizations.
            </p>
          </div>
        </div>

        <button onClick={onSave} style={{
          background: 'var(--primary)', borderRadius: 'var(--radius)', border: 'none',
          padding: '10px 12px', color: 'var(--foreground)',
          fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600,
          width: '100%', cursor: 'pointer',
        }}>Save mode</button>
      </div>
    </div>
  );
}

// ─── Modes Tab ────────────────────────────────────────────────────────────────
function ModesTab({ activeMode, setActiveMode, onCreateMode }: {
  activeMode: string; setActiveMode: (id: string) => void; onCreateMode: () => void;
}) {
  return (
    <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <p style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>Active Mode</p>
        <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', opacity: 0.7, margin: 0 }}>
          Select a mode to control how all your devices behave together.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {MODES.map((m) => {
          const isActive = activeMode === m.id;
          return (
            <button key={m.id} onClick={() => setActiveMode(m.id)} style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '1px 17px', height: 100,
              borderRadius: 'var(--radius-card)',
              background: isActive ? 'var(--panel)' : 'var(--surface)',
              border: isActive ? '1px solid var(--border)' : '1px solid rgba(0,0,0,0.08)',
              width: '100%', textAlign: 'left', cursor: 'pointer', transition: 'all 0.15s',
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 24, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: isActive ? 'var(--panel-deep)' : 'var(--accent)',
              }}>
                <m.icon size={22} strokeWidth={1.65}
                  style={{ color: isActive ? 'var(--foreground)' : 'var(--accent-foreground)' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: isActive ? 'var(--foreground)' : 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>{m.label}</p>
                <p style={{ color: isActive ? 'var(--accent)' : 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px', opacity: 0.7, margin: '2px 0 0' }}>{m.description}</p>
              </div>
            </button>
          );
        })}
      </div>
      <button onClick={onCreateMode} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
        padding: '10px 12px', borderRadius: 'var(--radius)',
        background: 'var(--primary)', color: 'var(--foreground)',
        fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600,
        width: '100%', cursor: 'pointer', border: 'none',
      }}>
        <Plus size={16} strokeWidth={2} />
        Create new mode
      </button>
    </div>
  );
}

// ─── Routines Tab ─────────────────────────────────────────────────────────────
function RoutinesTab({ routines, onToggle, onCreateRoutine }: {
  routines: Routine[]; onToggle: (id: string, v: boolean) => void; onCreateRoutine: () => void;
}) {
  return (
    <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      {routines.map((r) => (
        <div key={r.id} style={{
          background: 'var(--surface)', borderRadius: 'var(--radius-card)',
          border: '1px solid rgba(0,0,0,0.08)', padding: 17,
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-ui)', fontSize: 16, fontWeight: 600 }}>{r.name}</span>
            <Toggle on={r.enabled} onChange={(v) => onToggle(r.id, v)} />
          </div>
          <div style={{
            background: 'var(--accent)', borderRadius: 6, padding: 12,
            display: 'flex', alignItems: 'center', gap: 12,
            opacity: r.enabled ? 1 : 0.6,
          }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
              <r.triggerIcon size={16} strokeWidth={1.33} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <div>
                <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600, margin: 0 }}>{r.triggerLabel}</p>
                <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600, margin: 0 }}>{r.triggerSub}</p>
              </div>
            </div>
            <ArrowRight size={16} strokeWidth={1.33} style={{ color: 'var(--muted-foreground)', flexShrink: 0 }} />
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
              <r.actionIcon size={16} strokeWidth={1.33} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <span style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600 }}>{r.actionLabel}</span>
            </div>
          </div>
          {r.lastRun && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle size={14} strokeWidth={1.17} style={{ color: 'var(--success-dark)', flexShrink: 0 }} />
              <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-ui)', fontSize: 12 }}>Last run: {r.lastRun}</span>
            </div>
          )}
          {r.conflict && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <AlertTriangle size={14} strokeWidth={1.17} style={{ color: 'var(--warning)', flexShrink: 0 }} />
              <span style={{ color: 'var(--warning)', fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 500 }}>{r.conflict}</span>
            </div>
          )}
        </div>
      ))}
      <button onClick={onCreateRoutine} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
        padding: '10px 12px', borderRadius: 'var(--radius)',
        background: 'var(--primary)', color: 'var(--foreground)',
        fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600,
        width: '100%', cursor: 'pointer', border: 'none',
      }}>
        <Plus size={16} strokeWidth={2} />
        Create new routine
      </button>
    </div>
  );
}

// ─── Location pill ─────────────────────────────────────────────────────────────
function LocationPill() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 20px 0' }}>
      <button style={{
        display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px',
        borderRadius: 'var(--radius-pill)', background: 'var(--panel-highlight)',
        border: 'none', cursor: 'pointer',
      }}>
        <MapPin size={16} strokeWidth={1.33} style={{ color: 'var(--foreground)' }} />
        <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600 }}>
          Ap 4B — 123 Maple Street...
        </span>
        <ChevronDown size={16} strokeWidth={1.33} style={{ color: 'var(--foreground)' }} />
      </button>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ModesPage() {
  const [activeTab,  setActiveTab]  = useState<'modes' | 'routines'>('modes');
  const [view,       setView]       = useState<'list' | 'create-mode' | 'create-routine'>('list');
  const [activeMode, setActiveMode] = useState('home');
  const [routines,   setRoutines]   = useState<Routine[]>(INITIAL_ROUTINES);

  const handleToggle = (id: string, v: boolean) =>
    setRoutines(rs => rs.map(r => r.id === id ? { ...r, enabled: v } : r));

  if (view === 'create-mode')    return <CreateModeView    onBack={() => setView('list')} onSave={() => setView('list')} />;
  if (view === 'create-routine') return <CreateRoutineView onBack={() => setView('list')} onSave={() => setView('list')} />;

  return (
    <div style={{ background: 'var(--background)', minHeight: '100%', fontFamily: 'var(--font-body)' }}>
      {/* ── Sticky header ── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        {/* Title bar — panel bg with border-bottom separating it from tabs */}
        <div style={{
          background: 'var(--panel)',
          borderBottom: '1px solid var(--chart-5)',
          padding: '16px 24px',
          textAlign: 'center',
        }}>
          <p style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>Modes</p>
        </div>

        {/* Tab strip — sits on page background so it reads as a separate layer */}
        <div style={{
          background: 'var(--background)',
          display: 'flex',
          borderBottom: '1px solid var(--chart-5)',
          padding: '8px 16px 0',
        }}>
          {(['modes', 'routines'] as const).map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                flex: 1, padding: '14px 0', textAlign: 'center', cursor: 'pointer',
                background: 'transparent', border: 'none', position: 'relative',
                fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600,
                color: isActive ? 'var(--foreground)' : 'var(--accent)',
                opacity: isActive ? 1 : 0.8,
              }}>
                {tab === 'modes' ? 'Modes' : 'Routines'}
                {isActive && (
                  <span style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 2, background: 'var(--foreground)' }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <LocationPill />

      {activeTab === 'modes'
        ? <ModesTab activeMode={activeMode} setActiveMode={setActiveMode} onCreateMode={() => setView('create-mode')} />
        : <RoutinesTab routines={routines} onToggle={handleToggle} onCreateRoutine={() => setView('create-routine')} />
      }
    </div>
  );
}