import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronDown } from 'lucide-react';

export default function EditProfilePage() {
  const navigate = useNavigate();
  const [fullName,  setFullName]  = useState('');
  const [address,   setAddress]   = useState('');
  const [phone,     setPhone]     = useState('(555) 123-4567');
  const [saved,     setSaved]     = useState(false);

  const inputStyle: React.CSSProperties = {
    background: 'var(--panel-deep)', border: '1px solid var(--border)',
    borderRadius: 'var(--radius)', padding: '8px 12px', height: 40,
    color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16,
    boxShadow: 'var(--elevation-sm)', width: '100%', boxSizing: 'border-box',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    color: 'var(--foreground)', fontFamily: 'var(--font-ui)', fontSize: 14,
    fontWeight: 500, marginBottom: 8, display: 'block',
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
          Edit Profile
        </p>
        <div style={{ width: 22 }} />
      </div>

      <div style={{ padding: '24px 20px 80px', display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Avatar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 80, height: 80, borderRadius: 40,
            background: 'var(--accent)', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: 'var(--accent-foreground)', fontFamily: 'var(--font-ui)', fontSize: 24, fontWeight: 600 }}>
              LS
            </span>
          </div>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600 }}>
              Change photo
            </span>
          </button>
        </div>

        {/* Personal Information */}
        <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>
          Personal Information
        </p>

        {/* Full name */}
        <div>
          <label style={labelStyle}>Full name</label>
          <input
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            placeholder="e.g. Jane Doe"
            style={inputStyle}
          />
        </div>

        {/* Home address */}
        <div>
          <label style={labelStyle}>Home address</label>
          <input
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder="Street address"
            style={inputStyle}
          />
        </div>

        {/* Phone number */}
        <div>
          <label style={labelStyle}>Phone number</label>
          <div style={{ display: 'flex', gap: 8 }}>
            {/* Country selector */}
            <button style={{
              display: 'flex', alignItems: 'center', gap: 4, height: 40,
              background: 'var(--panel-deep)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '4px 12px', cursor: 'pointer',
              flexShrink: 0, boxShadow: 'var(--elevation-sm)',
            }}>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px' }}>
                🇺🇸 US (+1)
              </span>
              <ChevronDown size={14} strokeWidth={2} style={{ color: 'var(--foreground)' }} />
            </button>
            {/* Number input */}
            <input
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              style={{ ...inputStyle }}
            />
          </div>
        </div>

        {/* Save button */}
        <div style={{ paddingTop: 4 }}>
          <button
            onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
            style={{
              width: '100%', padding: '10px 0', borderRadius: 'var(--radius-button)',
              background: saved ? 'var(--success-dark)' : 'var(--primary)',
              color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16,
              fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'background 0.2s',
            }}>
            {saved ? 'Saved ✓' : 'Save changes'}
          </button>
        </div>
      </div>
    </div>
  );
}
