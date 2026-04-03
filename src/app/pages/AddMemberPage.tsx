import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, MapPin, ChevronDown, Link2 } from 'lucide-react';

// ── Decorative QR code SVG ───────────────────────────────────────────────────
function QRCodeDisplay() {
  // Generates a deterministic-looking QR pattern using a 9×9 module grid
  const S = 16; // module size in px
  const pad = 12; // padding
  const size = 9 * S + pad * 2;

  // Fixed data pattern (corners + data modules)
  const modules: [number, number][] = [
    // top-left finder (7×7 outer + 3×3 inner)
    ...[0,1,2,3,4,5,6].flatMap(r => [0,1,2,3,4,5,6].map(c => [r, c] as [number, number])),
    // top-right finder
    ...[0,1,2,3,4,5,6].flatMap(r => [2,3,4,5,6,7,8].map(c => [r, c] as [number, number])),
    // bottom-left finder
    ...[2,3,4,5,6,7,8].flatMap(r => [0,1,2,3,4,5,6].map(c => [r, c] as [number, number])),
    // data modules (center / timing)
    [1,4],[2,5],[4,4],[5,1],[5,5],[6,7],[7,3],[7,6],[8,5],[8,7],
    [4,7],[3,6],[6,4],[7,8],[8,6],
  ];

  // Hollow out finder centers so they look like finder patterns
  const hollows = new Set([
    '1,1','1,2','1,3','1,4','1,5','2,1','2,5','3,1','3,2','3,3','3,4','3,5',
    '1,3','1,4','1,5','2,3','2,5','3,3','3,4','3,5',
    // top-right
    '1,3','2,3','2,7','3,3','3,4','3,5','3,7',
    '1,5','1,6','1,7',
    // bottom-left
    '5,1','6,1','6,5','7,1','7,2','7,3','7,4','7,5',
    '3,1','4,1','4,5',
  ]);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* White background */}
      <rect width={size} height={size} fill="white" rx={4} />

      {/* Finder pattern: top-left */}
      <rect x={pad} y={pad} width={7*S} height={7*S} rx={4}
        fill="none" stroke="var(--surface-foreground)" strokeWidth={S * 0.7} />
      <rect x={pad + 2*S} y={pad + 2*S} width={3*S} height={3*S} rx={2}
        fill="var(--surface-foreground)" />

      {/* Finder pattern: top-right */}
      <rect x={pad + 2*S} y={pad} width={7*S} height={7*S} rx={4}
        fill="none" stroke="var(--surface-foreground)" strokeWidth={S * 0.7} />
      <rect x={pad + 4*S} y={pad + 2*S} width={3*S} height={3*S} rx={2}
        fill="var(--surface-foreground)" />

      {/* Finder pattern: bottom-left */}
      <rect x={pad} y={pad + 2*S} width={7*S} height={7*S} rx={4}
        fill="none" stroke="var(--surface-foreground)" strokeWidth={S * 0.7} />
      <rect x={pad + 2*S} y={pad + 4*S} width={3*S} height={3*S} rx={2}
        fill="var(--surface-foreground)" />

      {/* Data dots */}
      {[
        [4,4],[4,5],[4,7],[4,8],
        [5,7],[5,8],
        [7,4],[7,7],[7,8],
        [8,4],[8,5],[8,7],
      ].map(([r, c]) => (
        <rect
          key={`${r}-${c}`}
          x={pad + c * S + 2} y={pad + r * S + 2}
          width={S - 4} height={S - 4} rx={2}
          fill="var(--surface-foreground)"
        />
      ))}
    </svg>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function AddMemberPage() {
  const navigate   = useNavigate();
  const [seconds, setSeconds] = useState(14 * 60 + 59); // 14:59

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const mins  = Math.floor(seconds / 60);
  const secs  = seconds % 60;
  const timer = `${mins}:${String(secs).padStart(2, '0')}`;

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
          Add Member
        </p>
        <div style={{ width: 22 }} />
      </div>

      <div style={{ padding: '32px 20px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>

        {/* Location selector pill */}
        <button style={{
          display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px',
          borderRadius: 'var(--radius-pill)', background: 'var(--surface)',
          border: '1px solid rgba(0,0,0,0.08)', cursor: 'pointer', marginBottom: 20,
        }}>
          <MapPin size={14} strokeWidth={1.33} style={{ color: 'var(--surface-foreground)' }} />
          <span style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600 }}>
            Ap 4B - 123 Maple street, S...
          </span>
          <ChevronDown size={14} strokeWidth={1.33} style={{ color: 'var(--surface-foreground)' }} />
        </button>

        {/* Title */}
        <p style={{
          color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 25,
          fontWeight: 600, margin: '0 0 16px', textAlign: 'center', lineHeight: '36px',
        }}>Invite Household Member</p>

        {/* Description */}
        <p style={{
          color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: 16,
          textAlign: 'center', lineHeight: '24px', margin: '0 0 40px', maxWidth: 280,
        }}>
          When prompted in the Armada Power app, have the new member scan this QR code using their device camera.
        </p>

        {/* QR card */}
        <div style={{
          background: 'var(--surface)', borderRadius: 'var(--radius-card)',
          border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
          padding: 25, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
          marginBottom: 40,
        }}>
          {/* QR code */}
          <div style={{ width: 160, height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <QRCodeDisplay />
          </div>
          {/* Countdown */}
          <p style={{
            color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: 16,
            fontWeight: 600, margin: 0,
          }}>
            Code expires in {timer}
          </p>
        </div>

        {/* Share button */}
        <button style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          width: '100%', padding: '10px 0', borderRadius: 'var(--radius-button)',
          background: 'var(--primary)', color: 'var(--foreground)',
          fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600,
          border: 'none', cursor: 'pointer',
        }}>
          <Link2 size={16} strokeWidth={1.66} />
          Share Invite Code
        </button>
      </div>
    </div>
  );
}
