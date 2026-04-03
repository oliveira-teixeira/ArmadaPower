import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Thermometer, Droplets, Check } from 'lucide-react';

interface DeviceCardProps {
  icon: React.ReactNode;
  name: string;
  status: 'online' | 'offline';
}

function DeviceCard({ icon, name, status }: DeviceCardProps) {
  return (
    <div
      style={{
        width: '100%',
        background: 'var(--surface)',
        border: '1px solid var(--accent)',
        borderRadius: 'var(--radius)',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '22px 21px',
      }}
    >
      {/* Icon box */}
      <div
        style={{
          width: 52,
          height: 52,
          background: 'var(--accent)',
          borderRadius: 6,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1 flex-1" style={{ minWidth: 0 }}>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 16,
            color: 'var(--surface-foreground)',
            lineHeight: 1.25,
          }}
        >
          {name}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Check size={16} color={status === 'online' ? 'var(--success-dark)' : 'var(--danger)'} />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 13,
              color: status === 'online' ? 'var(--success-dark)' : 'var(--danger)',
            }}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HomeConnectedPage() {
  const navigate = useNavigate();
  const [propertyName, setPropertyName] = useState('Oakwood Residences Pasadena');
  const [unitNumber, setUnitNumber] = useState('Apt 4B');

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: 40,
    background: '#0a1a2e',
    border: '1px solid var(--accent)',
    borderRadius: 'var(--radius)',
    padding: '4px 12px',
    color: 'var(--accent)',
    fontFamily: 'var(--font-body)',
    fontSize: 13,
    outline: 'none',
    boxShadow: 'var(--elevation-sm)',
    boxSizing: 'border-box',
    opacity: 0.9,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-ui)',
    fontWeight: 500,
    fontSize: 14,
    color: 'var(--foreground)',
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#0a111d',
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* Header */}
      <div
        style={{
          flexShrink: 0,
          height: 64,
          background: 'var(--panel)',
          borderBottom: '1px solid var(--panel-highlight)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 16,
            color: 'var(--foreground)',
          }}
        >
          Home Setup
        </span>
      </div>

      {/* Scrollable main content */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '32px 24px 120px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        {/* Title */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 25,
            color: 'var(--foreground)',
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          Home Connected
        </p>

        {/* Success message */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            color: 'var(--accent)',
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Your devices are now linked with your Armada Power App and ready to manage.
        </p>

        {/* Property details section */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 20,
            color: 'var(--foreground)',
            margin: 0,
          }}
        >
          Property details
        </p>

        {/* Property Name */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={labelStyle}>Property Name</label>
          <input
            type="text"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Unit Number */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={labelStyle}>Unit Number</label>
          <input
            type="text"
            value={unitNumber}
            onChange={(e) => setUnitNumber(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Devices Available section */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 20,
            color: 'var(--foreground)',
            margin: 0,
          }}
        >
          Devices Available
        </p>

        <DeviceCard
          icon={<Thermometer size={24} color="var(--surface-foreground)" />}
          name="Armada Power Thermostat (model name and number)"
          status="online"
        />

        <DeviceCard
          icon={<Droplets size={24} color="var(--surface-foreground)" />}
          name="Armada Power Water Heater (model name and number)"
          status="online"
        />
      </div>

      {/* Fixed footer */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '21px 20px 48px',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          background: '#0a111d',
        }}
      >
        <button
          onClick={() => navigate('/')}
          style={{
            width: '100%',
            maxWidth: 311,
            padding: '10px 12px',
            background: 'var(--primary)',
            color: 'var(--foreground)',
            borderRadius: 'var(--radius-button)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            border: 'none',
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
