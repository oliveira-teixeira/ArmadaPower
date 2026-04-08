import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';

// ── Dropdown option types ─────────────────────────────────────────────────────
type DropdownKey = 'location' | 'geofence' | 'timezone' | 'tempunit' | null;

// ── Dropdown menu (styled like MenubarContent) ────────────────────────────────
function DropdownMenu({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 2px)',
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'var(--background)',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--accent)',
        boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
        overflow: 'hidden',
      }}
    >
      {options.map((opt, i) => {
        const isSelected = opt === selected;
        return (
          <button
            key={opt}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(opt);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              width: '100%',
              height: 40,
              padding: isSelected ? '6px 8px' : '6px 8px 6px 32px',
              background: 'var(--background)',
              border: 'none',
              borderBottom: i < options.length - 1 ? '1px solid var(--accent)' : 'none',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            {/* Checkmark for selected item */}
            {isSelected && (
              <div
                style={{
                  width: 16,
                  height: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Check size={12} style={{ color: 'var(--foreground)' }} strokeWidth={2} />
              </div>
            )}
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: isSelected ? 600 : 400,
                color: 'var(--foreground)',
                lineHeight: '20px',
              }}
            >
              {opt}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ── Static row (no dropdown) ──────────────────────────────────────────────────
function StaticRow({
  label,
  value,
  isLast,
}: {
  label: string;
  value: string;
  isLast?: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
        background: 'var(--surface)',
        borderBottom: isLast ? 'none' : '1px solid var(--accent)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 16,
          fontWeight: 600,
          color: 'var(--surface-foreground)',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 16,
          fontWeight: 400,
          color: 'var(--surface-foreground)',
          opacity: 0.8,
          maxWidth: 160,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          textAlign: 'right',
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ── Dropdown row (with chevron + open/close) ──────────────────────────────────
function DropdownRow({
  label,
  value,
  options,
  isOpen,
  isLast,
  onToggle,
  onSelect,
}: {
  label: string;
  value: string;
  options: string[];
  isOpen: boolean;
  isLast?: boolean;
  onToggle: () => void;
  onSelect: (v: string) => void;
}) {
  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          width: '100%',
          background: 'var(--surface)',
          border: 'none',
          borderBottom: isLast && !isOpen ? 'none' : '1px solid var(--accent)',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            fontWeight: 600,
            color: 'var(--surface-foreground)',
          }}
        >
          {label}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              fontWeight: 600,
              color: 'var(--surface-foreground)',
              opacity: 0.8,
            }}
          >
            {value}
          </span>
          <ChevronRight
            size={16}
            style={{
              color: 'var(--accent)',
              transform: isOpen ? 'rotate(90deg)' : 'none',
              transition: 'transform 0.2s',
            }}
          />
        </div>
      </button>

      {isOpen && (
        <DropdownMenu options={options} selected={value} onSelect={onSelect} />
      )}
    </div>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ title }: { title: string }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--accent)',
        margin: '0 0 4px',
        lineHeight: '24px',
      }}
    >
      {title}
    </p>
  );
}

// ── Card wrapper ──────────────────────────────────────────────────────────────
function SettingsCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        borderRadius: 'var(--radius)',
        border: '1px solid rgba(0,0,0,0.08)',
        overflow: 'visible',
        position: 'relative',
      }}
    >
      <div
        style={{
          borderRadius: 'var(--radius)',
          overflow: 'clip',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ── Caption ───────────────────────────────────────────────────────────────────
function Caption({ text }: { text: string }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 12.8,
        fontWeight: 400,
        color: 'var(--accent)',
        margin: '4px 12px 0',
        lineHeight: '20px',
      }}
    >
      {text}
    </p>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HomeInfoPage() {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);

  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [locationServices, setLocationServices] = useState('Enabled');
  const [geofenceRadius, setGeofenceRadius] = useState('0.25 miles');
  const [timeZone, setTimeZone] = useState('Pacific Time (PT)');
  const [tempUnit, setTempUnit] = useState('Fahrenheit (°F)');

  // Close any open dropdown when clicking outside
  useEffect(() => {
    const handler = () => setOpenDropdown(null);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const toggle = (key: DropdownKey) =>
    setOpenDropdown((prev) => (prev === key ? null : key));

  return (
    <div
      ref={pageRef}
      style={{ background: 'var(--background)', minHeight: '100%', fontFamily: 'var(--font-body)' }}
    >
      {/* ── Header ── */}
      <div
        style={{
          background: 'var(--panel)',
          borderBottom: '1px solid var(--chart-5)',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ArrowLeft size={20} color="var(--foreground)" strokeWidth={2} />
        </button>
        <span
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            fontWeight: 600,
            color: 'var(--foreground)',
          }}
        >
          Home information
        </span>
        <div style={{ width: 24 }} />
      </div>

      {/* ── Scrollable body ── */}
      <div
        style={{
          padding: '24px 20px 80px',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        {/* ── Home Details ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SectionHeading title="Home Details" />
          <SettingsCard>
            <StaticRow label="Home Name" value="Apt 4B" />
            <StaticRow label="Home Address" value="123 Maple Street, S…" />
            <StaticRow label="Residence Type" value="Multi-Family Building" isLast />
          </SettingsCard>
          <Caption text="Home details are used to determine eligibility for utility programs and precise weather-based automation." />
        </div>

        {/* ── Location Settings ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SectionHeading title="Location Settings" />
          <SettingsCard>
            <DropdownRow
              label="Location Services"
              value={locationServices}
              options={['Enabled', 'Disabled']}
              isOpen={openDropdown === 'location'}
              onToggle={() => toggle('location')}
              onSelect={(v) => { setLocationServices(v); setOpenDropdown(null); }}
            />
            <DropdownRow
              label="Geofence Radius"
              value={geofenceRadius}
              options={['0.1 miles', '0.25 miles', '0.5 miles', '1 mile', '2 miles', '5 miles']}
              isOpen={openDropdown === 'geofence'}
              isLast
              onToggle={() => toggle('geofence')}
              onSelect={(v) => { setGeofenceRadius(v); setOpenDropdown(null); }}
            />
          </SettingsCard>
          <Caption text="Location services enable automatic Away mode adjustments when you leave your home boundary." />
        </div>

        {/* ── Time & Regional Settings ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SectionHeading title="Time & Regional Settings" />
          <SettingsCard>
            <DropdownRow
              label="Time Zone"
              value={timeZone}
              options={[
                'Pacific Time (PT)',
                'Mountain Time (MT)',
                'Central Time (CT)',
                'Eastern Time (ET)',
                'Alaska Time (AKT)',
                'Hawaii Time (HT)',
              ]}
              isOpen={openDropdown === 'timezone'}
              onToggle={() => toggle('timezone')}
              onSelect={(v) => { setTimeZone(v); setOpenDropdown(null); }}
            />
            <DropdownRow
              label="Temperature Units"
              value={tempUnit}
              options={['Fahrenheit (°F)', 'Celsius (°C)']}
              isOpen={openDropdown === 'tempunit'}
              isLast
              onToggle={() => toggle('tempunit')}
              onSelect={(v) => { setTempUnit(v); setOpenDropdown(null); }}
            />
          </SettingsCard>
        </div>
      </div>
    </div>
  );
}