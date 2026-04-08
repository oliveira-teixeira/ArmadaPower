import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, QrCode, Hash, ChevronRight, HelpCircle, X } from 'lucide-react';

function OptionCard({
  icon: Icon,
  title,
  description,
  onClick,
}: {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        background: 'var(--surface)',
        border: '1px solid var(--accent)',
        borderRadius: 'var(--radius)',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '22px 21px',
        cursor: 'pointer',
        textAlign: 'left',
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
        <Icon size={24} color="var(--surface-foreground)" />
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
          {title}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'var(--surface-foreground)',
            lineHeight: 1.5,
          }}
        >
          {description}
        </span>
      </div>

      {/* Chevron */}
      <ChevronRight size={20} color="var(--surface-foreground)" style={{ flexShrink: 0 }} />
    </button>
  );
}

export default function HomeSetupPage() {
  const navigate = useNavigate();
  const [showEnterCode, setShowEnterCode] = useState(false);
  const [code, setCode] = useState('');

  return (
    <div
      className="relative flex flex-col min-h-screen"
      style={{ background: 'var(--background)', fontFamily: 'var(--font-body)' }}
    >
      {/* Header */}
      <div
        className="flex-none flex items-center justify-between px-6"
        style={{
          height: 64,
          background: 'var(--panel)',
          borderBottom: '1px solid var(--panel-highlight)',
          position: 'relative',
        }}
      >
        <button
          onClick={() => navigate('/signup/terms')}
          style={{ width: 24, height: 24, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <ArrowLeft size={20} color="var(--foreground)" />
        </button>
        <span
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 16,
            color: 'var(--foreground)',
          }}
        >
          Home Setup
        </span>
        <div style={{ width: 24 }} />
      </div>

      {/* Scrollable content */}
      <div
        className="flex-1 overflow-y-auto"
        style={{ padding: '0 0 40px' }}
      >
        {/* Main content area */}
        <div style={{ padding: '0 0 0', position: 'relative', minHeight: '100%' }}>

          {/* Heading + body */}
          <div style={{ padding: '0 24px', marginTop: 32 }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 25,
                color: 'var(--foreground)',
                margin: '0 0 16px',
                lineHeight: 1.4,
              }}
            >
              Let's set up your home
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                color: 'var(--accent)',
                margin: '0 0 24px',
                lineHeight: 1.5,
              }}
            >
              Scan the QR code provided with your Armada Power system, or enter the serial number
              from your device to begin setup.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                color: 'var(--accent)',
                margin: '0 0 32px',
                lineHeight: 1.5,
              }}
            >
              If you live in a managed building, your leasing manager may provide the QR code.
            </p>
          </div>

          {/* Option cards */}
          <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <OptionCard
              icon={QrCode}
              title="Scan QR Code"
              description={'Use your camera to scan\nthe label on your device.'}
              onClick={() => navigate('/onboarding/scan')}
            />
            <OptionCard
              icon={Hash}
              title="Enter Code Number"
              description={'Manually type the ID code\nfor your unit or product'}
              onClick={() => setShowEnterCode(true)}
            />
          </div>

          {/* Help box */}
          <div
            style={{
              margin: '32px 24px 0',
              background: 'var(--panel-highlight)',
              border: '1px solid var(--accent)',
              borderRadius: 'var(--radius)',
              padding: 19,
            }}
          >
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <HelpCircle size={18} color="var(--foreground)" />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 16,
                  color: 'var(--foreground)',
                }}
              >
                Having trouble with your code?
              </span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'var(--foreground)',
                margin: '0 0 16px',
                lineHeight: 1.5,
              }}
            >
              If your QR code isn't scanning or shows an error, you can request assistance, or show
              this issue to your leasing manager.
            </p>

            <button
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 16,
                color: 'var(--accent)',
                padding: 0,
              }}
            >
              Get help
            </button>
          </div>
        </div>
      </div>

      {/* ── Enter Code Modal ── */}
      {showEnterCode && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 24px',
            background: 'rgba(0,0,0,0.6)',
          }}
          onClick={() => setShowEnterCode(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 360,
              background: 'var(--panel)',
              border: '1px solid var(--accent)',
              borderRadius: 'var(--radius-card)',
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 18, color: 'var(--foreground)' }}>
                  Enter Code
                </span>
                <button
                  onClick={() => setShowEnterCode(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <X size={16} style={{ color: 'var(--foreground)' }} strokeWidth={1.8} />
                </button>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--accent)', margin: 0, lineHeight: 1.5 }}>
                Manually type the ID code for your unit or Armada Power Product
              </p>
            </div>

            {/* Code field */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, color: 'var(--foreground)' }}>
                Code Number
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="XXXXXX-XX"
                autoFocus
                style={{
                  height: 36,
                  background: 'var(--background)',
                  border: '1px solid var(--accent)',
                  borderRadius: 'var(--radius)',
                  padding: '0 12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: 'var(--foreground)',
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box' as const,
                }}
              />
            </div>

            {/* Footer buttons */}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowEnterCode(false)}
                style={{
                  height: 36,
                  padding: '0 16px',
                  background: 'transparent',
                  border: '1px solid var(--accent)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: 14,
                  color: 'var(--foreground)',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => { setShowEnterCode(false); navigate('/onboarding/connected'); }}
                style={{
                  height: 36,
                  padding: '0 16px',
                  background: 'var(--primary)',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: 14,
                  color: 'var(--foreground)',
                  cursor: 'pointer',
                }}
              >
                Confirm Code
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}