import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { X, Check } from 'lucide-react';
// Figma asset placeholder - original: figma:asset/326694bda69a77c8dc191179450e5b7ab0fa1545.png
const imgQrScene = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect fill="%23111" width="400" height="400"/></svg>';

/** Corner bracket for the QR frame */
function ScanCorner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const size = 36;
  const stroke = 3;
  const color = '#FFFFFF';
  const isTop = pos.startsWith('t');
  const isLeft = pos.endsWith('l');
  return (
    <div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        top: isTop ? 0 : undefined,
        bottom: isTop ? undefined : 0,
        left: isLeft ? 0 : undefined,
        right: isLeft ? undefined : 0,
        borderTop: isTop ? `${stroke}px solid ${color}` : 'none',
        borderBottom: isTop ? 'none' : `${stroke}px solid ${color}`,
        borderLeft: isLeft ? `${stroke}px solid ${color}` : 'none',
        borderRight: isLeft ? 'none' : `${stroke}px solid ${color}`,
        borderRadius:
          pos === 'tl' ? '4px 0 0 0'
          : pos === 'tr' ? '0 4px 0 0'
          : pos === 'bl' ? '0 0 0 4px'
          : '0 0 4px 0',
      }}
    />
  );
}

// Inject scan-line animation once
function injectScanAnim() {
  const ID = 'qr-scan-anim';
  if (document.getElementById(ID)) return;
  const s = document.createElement('style');
  s.id = ID;
  s.textContent = `
    @keyframes qrScanLine {
      0%   { top: 4%; opacity: 1; }
      48%  { top: 90%; opacity: 1; }
      50%  { top: 90%; opacity: 0; }
      52%  { top: 4%;  opacity: 0; }
      54%  { top: 4%;  opacity: 1; }
      100% { top: 4%;  opacity: 1; }
    }
    @keyframes qrScanPulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
  `;
  document.head.appendChild(s);
}

export default function QRScanPage() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<'scanning' | 'detected'>('scanning');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showEnterCode, setShowEnterCode] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    injectScanAnim();
    // Auto-detect after 3 seconds to simulate a successful scan
    timerRef.current = setTimeout(() => setPhase('detected'), 3000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  useEffect(() => {
    if (phase === 'detected') {
      timerRef.current = setTimeout(() => navigate('/onboarding/connected'), 1200);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [phase, navigate]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        background: '#000',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Camera background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
        }}
      >
        <img
          src={imgQrScene}
          alt=""
          style={{
            position: 'absolute',
            width: '320%',
            height: '118%',
            left: '-114%',
            top: '-18%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Dark overlay top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 120,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
          zIndex: 2,
        }}
      />

      {/* Dark overlay bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
          zIndex: 2,
        }}
      />

      {/* Header controls */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '56px 20px 16px',
        }}
      >
        <button
          onClick={() => navigate('/onboarding/setup')}
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.45)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={22} color="white" />
        </button>

        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 16,
            color: 'white',
          }}
        >
          Scan QR Code
        </span>

        <div style={{ width: 40 }} />
      </div>

      {/* Instruction text */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 32px 24px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: 'rgba(255,255,255,0.8)',
            margin: 0,
          }}
        >
          Point your camera at the QR code on your Armada Power device
        </p>
      </div>

      {/* Scanner viewfinder */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 120,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: 240,
            height: 240,
          }}
        >
          {/* Semi-transparent dark frame */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 8,
              background: phase === 'detected'
                ? 'rgba(47,201,85,0.15)'
                : 'rgba(0,0,0,0.12)',
              border: phase === 'detected'
                ? '2px solid var(--success)'
                : '1px solid rgba(255,255,255,0.15)',
              transition: 'all 0.3s ease',
            }}
          />

          {/* Corner brackets */}
          <ScanCorner pos="tl" />
          <ScanCorner pos="tr" />
          <ScanCorner pos="bl" />
          <ScanCorner pos="br" />

          {/* Scan line (only when scanning) */}
          {phase === 'scanning' && (
            <div
              style={{
                position: 'absolute',
                left: 8,
                right: 8,
                height: 2,
                background: 'linear-gradient(to right, transparent, var(--primary), transparent)',
                borderRadius: 1,
                animation: 'qrScanLine 2s ease-in-out infinite',
                boxShadow: '0 0 6px var(--primary)',
              }}
            />
          )}

          {/* Detected state */}
          {phase === 'detected' && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(47,201,85,0.2)', border: '2px solid var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check size={24} style={{ color: 'var(--success)' }} strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--success)' }}>
                QR Code Detected!
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom area */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          padding: '16px 24px 48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
            margin: 0,
          }}
        >
          {phase === 'scanning' ? 'Scanning…' : 'Setting up your home…'}
        </p>

        <button
          onClick={() => setShowEnterCode(true)}
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 46,
            padding: '10px 24px',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 14,
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Enter code manually
        </button>
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
                  boxSizing: 'border-box',
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