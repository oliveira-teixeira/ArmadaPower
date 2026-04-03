import { useState, type CSSProperties } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Eye, EyeOff, CheckCircle2, XCircle } from 'lucide-react';

interface Req { label: string; test: (pw: string) => boolean; }
const REQUIREMENTS: Req[] = [
  { label: 'At least 8 characters',                  test: pw => pw.length >= 8 },
  { label: 'At least one uppercase letter',           test: pw => /[A-Z]/.test(pw) },
  { label: 'At least one number',                     test: pw => /[0-9]/.test(pw) },
  { label: 'At least one special character (!@#$%&*)', test: pw => /[!@#$%&*]/.test(pw) },
];

export default function ChangePasswordPage() {
  const navigate = useNavigate();
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew,     setShowNew]     = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [current,     setCurrent]     = useState('password1');
  const [newPw,       setNewPw]       = useState('');
  const [confirm,     setConfirm]     = useState('');
  const [saved,       setSaved]       = useState(false);

  const inputWrap: CSSProperties = {
    position: 'relative', display: 'flex', alignItems: 'center',
  };
  const inputStyle: CSSProperties = {
    background: 'var(--panel-deep)', border: '1px solid var(--border)',
    borderRadius: 'var(--radius)', padding: '8px 44px 8px 12px', height: 40,
    color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16,
    boxShadow: 'var(--elevation-sm)', width: '100%', boxSizing: 'border-box',
    outline: 'none',
  };
  const eyeBtn: CSSProperties = {
    position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
    background: 'none', border: 'none', cursor: 'pointer', display: 'flex',
    alignItems: 'center', color: 'var(--accent)',
  };
  const labelStyle: CSSProperties = {
    color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px',
    fontWeight: 600, marginBottom: 8, display: 'block',
  };

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
          Change Password
        </p>
        <div style={{ width: 22 }} />
      </div>

      <div style={{ padding: '24px 20px 80px', display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Description */}
        <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', margin: 0, lineHeight: '20px' }}>
          Update your password to keep your account secure.
        </p>

        {/* Current Password */}
        <div>
          <label style={labelStyle}>Current Password</label>
          <div style={inputWrap}>
            <input
              type={showCurrent ? 'text' : 'password'}
              value={current}
              onChange={e => setCurrent(e.target.value)}
              style={inputStyle}
            />
            <button style={eyeBtn} onClick={() => setShowCurrent(v => !v)}>
              {showCurrent
                ? <EyeOff size={20} strokeWidth={1.5} />
                : <Eye size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label style={labelStyle}>New Password</label>
          <div style={inputWrap}>
            <input
              type={showNew ? 'text' : 'password'}
              value={newPw}
              onChange={e => setNewPw(e.target.value)}
              placeholder="Enter new password"
              style={{ ...inputStyle, color: newPw ? 'var(--foreground)' : undefined }}
            />
            <button style={eyeBtn} onClick={() => setShowNew(v => !v)}>
              {showNew
                ? <EyeOff size={20} strokeWidth={1.5} />
                : <Eye size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Password requirements */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500 }}>
            Password requirements:
          </span>
          {REQUIREMENTS.map(req => {
            const met = req.test(newPw);
            return (
              <div key={req.label} style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: 0.85 }}>
                {met
                  ? <CheckCircle2 size={16} strokeWidth={1.5} style={{ color: 'var(--success)', flexShrink: 0 }} />
                  : <XCircle     size={16} strokeWidth={1.5} style={{ color: 'var(--danger)',  flexShrink: 0 }} />}
                <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 14 }}>
                  {req.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Confirm New Password */}
        <div>
          <label style={labelStyle}>Confirm New Password</label>
          <div style={inputWrap}>
            <input
              type={showConfirm ? 'text' : 'password'}
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              placeholder="Enter new password"
              style={inputStyle}
            />
            <button style={eyeBtn} onClick={() => setShowConfirm(v => !v)}>
              {showConfirm
                ? <EyeOff size={20} strokeWidth={1.5} />
                : <Eye size={20} strokeWidth={1.5} />}
            </button>
          </div>
          {confirm && newPw && confirm !== newPw && (
            <p style={{ color: 'var(--danger)', fontFamily: 'var(--font-body)', fontSize: '12.8px', margin: '6px 0 0' }}>
              Passwords do not match.
            </p>
          )}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 4 }}>
          <button
            onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
            style={{
              width: '100%', padding: '10px 0', borderRadius: 'var(--radius-button)',
              background: saved ? 'var(--success-dark)' : 'var(--primary)',
              color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16,
              fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'background 0.2s',
            }}>
            {saved ? 'Password Updated ✓' : 'Update Password'}
          </button>
          <button style={{
            width: '100%', padding: '10px 0', borderRadius: 'var(--radius-button)',
            background: 'transparent', color: 'var(--primary)',
            fontFamily: 'var(--font-body)', fontSize: '12.8px', fontWeight: 600,
            border: 'none', cursor: 'pointer',
          }}>
            Forgot your Password?
          </button>
        </div>
      </div>
    </div>
  );
}
