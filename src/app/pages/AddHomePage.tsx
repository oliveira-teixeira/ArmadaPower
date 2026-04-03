import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, QrCode, Keyboard, CheckCircle2 } from 'lucide-react';

// ── QR scan-line animation ────────────────────────────────────────────────────
const ANIM_ID = 'add-home-scan-anim';
function injectScanAnim() {
  if (document.getElementById(ANIM_ID)) return;
  const s = document.createElement('style');
  s.id = ANIM_ID;
  s.textContent = `
    @keyframes scanLine {
      0%   { top: 6%; opacity: 1; }
      48%  { top: 88%; opacity: 1; }
      50%  { top: 88%; opacity: 0; }
      52%  { top: 6%;  opacity: 0; }
      54%  { top: 6%;  opacity: 1; }
      100% { top: 6%;  opacity: 1; }
    }
    @keyframes scanPulse { 0%,100%{opacity:1} 50%{opacity:0.55} }
  `;
  document.head.appendChild(s);
}

// ── Corner marker for QR frame ────────────────────────────────────────────────
function Corner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const size = 22, stroke = 3, color = 'var(--primary)';
  const top    = pos.startsWith('t') ? 0 : undefined;
  const bottom = pos.startsWith('b') ? 0 : undefined;
  const left   = pos.endsWith('l')   ? 0 : undefined;
  const right  = pos.endsWith('r')   ? 0 : undefined;
  const bTop    = pos.startsWith('t') ? `${stroke}px solid ${color}` : 'none';
  const bBottom = pos.startsWith('b') ? `${stroke}px solid ${color}` : 'none';
  const bLeft   = pos.endsWith('l')   ? `${stroke}px solid ${color}` : 'none';
  const bRight  = pos.endsWith('r')   ? `${stroke}px solid ${color}` : 'none';
  return (
    <div style={{
      position: 'absolute', width: size, height: size,
      top, bottom, left, right,
      borderTop: bTop, borderBottom: bBottom,
      borderLeft: bLeft, borderRight: bRight,
      borderRadius: pos === 'tl' ? '4px 0 0 0' : pos === 'tr' ? '0 4px 0 0' : pos === 'bl' ? '0 0 0 4px' : '0 0 4px 0',
    }} />
  );
}

// ── Code segment inputs (e.g. "AX7K-3P9Q") ───────────────────────────────────
function CodeSegmentInput({ value, onChange }: {
  value: string;
  onChange: (v: string) => void;
}) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const SEGMENTS = 8;

  const chars = value.padEnd(SEGMENTS, '').split('').slice(0, SEGMENTS);

  const handleKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      const next = [...chars];
      if (next[i] !== ' ' && next[i] !== '') {
        next[i] = '';
        onChange(next.join('').trimEnd());
      } else if (i > 0) {
        next[i - 1] = '';
        onChange(next.join('').trimEnd());
        refs.current[i - 1]?.focus();
      }
      e.preventDefault();
    }
  };

  const handleChange = (i: number, raw: string) => {
    const char = raw.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(-1);
    if (!char) return;
    const next = [...chars];
    next[i] = char;
    onChange(next.join('').trimEnd());
    if (i < SEGMENTS - 1) refs.current[i + 1]?.focus();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
      {chars.map((ch, i) => (
        <>
          <input
            key={i}
            ref={el => { refs.current[i] = el; }}
            maxLength={1}
            value={ch.trim()}
            onChange={e => handleChange(i, e.target.value)}
            onKeyDown={e => handleKey(i, e)}
            onFocus={e => e.target.select()}
            style={{
              width: 36, height: 44, textAlign: 'center',
              background: 'var(--panel-deep)', border: ch.trim()
                ? '1.5px solid var(--primary)'
                : '1.5px solid var(--chart-5)',
              borderRadius: 'var(--radius)', outline: 'none',
              color: 'var(--foreground)', fontFamily: 'var(--font-ui)',
              fontSize: 18, fontWeight: 700, caretColor: 'transparent',
              transition: 'border-color 0.15s',
            }}
          />
          {i === 3 && (
            <span key={`sep-${i}`} style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)', fontSize: 20, fontWeight: 300, lineHeight: 1, userSelect: 'none' }}>
              –
            </span>
          )}
        </>
      ))}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function AddHomePage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'scan' | 'code'>('scan');
  const [code, setCode] = useState('');
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    injectScanAnim();
    return () => {
      const el = document.getElementById(ANIM_ID);
      if (el) el.remove();
    };
  }, []);

  const codeComplete = code.replace(/\s/g, '').length === 8;

  const tabBtn = (label: string, icon: React.ReactNode, active: boolean, onClick: () => void) => (
    <button onClick={onClick} style={{
      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      padding: '12px 0', borderRadius: 'var(--radius-card)',
      background: active ? 'var(--panel-highlight)' : 'transparent',
      border: `1.5px solid ${active ? 'var(--primary)' : 'transparent'}`,
      color: active ? 'var(--foreground)' : 'var(--accent)',
      fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600,
      cursor: 'pointer', transition: 'all 0.15s',
    }}>
      {icon}
      {label}
    </button>
  );

  return (
    <div style={{ background: 'var(--background)', minHeight: '100%', fontFamily: 'var(--font-body)' }}>

      {/* Header */}
      <div style={{
        background: 'var(--panel)', borderBottom: '1px solid var(--chart-5)',
        padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 8,
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <button onClick={() => navigate(-1)} style={{ color: 'var(--foreground)', background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
          <ArrowLeft size={22} strokeWidth={2} />
        </button>
        <p style={{ flex: 1, textAlign: 'center', color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>
          Add New Home
        </p>
        <div style={{ width: 22 }} />
      </div>

      <div style={{ padding: '28px 20px 80px', display: 'flex', flexDirection: 'column', gap: 24 }}>

        {/* Intro */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <p style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 600, margin: 0 }}>
            Connect to a Home
          </p>
          <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', opacity: 0.85, margin: 0, lineHeight: '20px' }}>
            Scan the QR code displayed in the Armada Power app of the home's primary account holder, or ask them for the invite code.
          </p>
        </div>

        {/* Tab switcher */}
        <div style={{
          display: 'flex', gap: 8, background: 'var(--panel-deep)',
          borderRadius: 'var(--radius-card)', padding: 6,
        }}>
          {tabBtn('Scan QR Code', <QrCode size={16} strokeWidth={1.75} />, tab === 'scan', () => setTab('scan'))}
          {tabBtn('Enter Code',   <Keyboard size={16} strokeWidth={1.75} />, tab === 'code', () => setTab('code'))}
        </div>

        {/* ── Scan QR tab ── */}
        {tab === 'scan' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            {/* Viewfinder */}
            <div style={{
              width: '100%', maxWidth: 280, aspectRatio: '1',
              background: '#0a0f17', borderRadius: 'var(--radius-card)',
              border: '1px solid var(--chart-5)', position: 'relative',
              overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {/* Dark vignette overlay sides */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)' }} />

              {/* Scan area box */}
              <div style={{
                position: 'absolute',
                top: '15%', left: '15%', right: '15%', bottom: '15%',
              }}>
                <Corner pos="tl" />
                <Corner pos="tr" />
                <Corner pos="bl" />
                <Corner pos="br" />

                {/* Scan line */}
                <div style={{
                  position: 'absolute', left: '4%', right: '4%', height: 2,
                  background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                  borderRadius: 1,
                  animation: 'scanLine 2.8s ease-in-out infinite',
                  boxShadow: '0 0 8px 2px rgba(75,117,192,0.5)',
                }} />
              </div>

              {/* Status label */}
              <p style={{
                position: 'absolute', bottom: 14, left: 0, right: 0,
                textAlign: 'center', color: 'var(--accent)', fontFamily: 'var(--font-ui)',
                fontSize: '12.8px', fontWeight: 600, margin: 0,
                animation: 'scanPulse 1.8s ease-in-out infinite',
              }}>
                Searching for QR code…
              </p>
            </div>

            <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', textAlign: 'center', margin: 0, opacity: 0.75 }}>
              Point your camera at the QR code shown on the primary account holder's device.
            </p>
          </div>
        )}

        {/* ── Enter Code tab ── */}
        {tab === 'code' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', margin: 0, textAlign: 'center', lineHeight: '20px' }}>
                Enter the 8-character invite code shared by the primary account holder.
              </p>

              <CodeSegmentInput value={code} onChange={setCode} />

              {codeComplete && !connected && (
                <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', margin: 0, opacity: 0.7 }}>
                  Code ready — tap Connect Home to proceed.
                </p>
              )}
            </div>

            {/* Connect button */}
            {connected ? (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
                padding: '24px 0',
              }}>
                <CheckCircle2 size={48} strokeWidth={1.5} style={{ color: 'var(--success)' }} />
                <p style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>
                  Home Connected!
                </p>
                <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', margin: 0 }}>
                  You now have access to this home's devices.
                </p>
                <button
                  onClick={() => navigate('/settings/manage-homes')}
                  style={{
                    marginTop: 8, padding: '10px 32px', borderRadius: 'var(--radius-button)',
                    background: 'var(--primary)', color: 'var(--foreground)',
                    fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600,
                    border: 'none', cursor: 'pointer',
                  }}>
                  Go to Manage Homes
                </button>
              </div>
            ) : (
              <button
                disabled={!codeComplete}
                onClick={() => { if (codeComplete) setConnected(true); }}
                style={{
                  width: '100%', padding: '12px 0', borderRadius: 'var(--radius-button)',
                  background: codeComplete ? 'var(--primary)' : 'var(--panel-deep)',
                  color: codeComplete ? 'var(--foreground)' : 'var(--accent)',
                  fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600,
                  border: `1px solid ${codeComplete ? 'var(--primary)' : 'var(--chart-5)'}`,
                  cursor: codeComplete ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s',
                }}>
                Connect Home
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
