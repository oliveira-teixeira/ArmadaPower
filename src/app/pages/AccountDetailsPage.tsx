import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Eye, EyeOff, ChevronDown } from 'lucide-react';

export default function AccountDetailsPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');

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
    opacity: 0.95,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-ui)',
    fontWeight: 500,
    fontSize: 14,
    color: 'var(--foreground)',
  };

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
          flexShrink: 0,
          position: 'relative',
        }}
      >
        <button
          onClick={() => navigate('/signup')}
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
          Create Account
        </span>
        <div style={{ width: 24 }} />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-32" style={{ gap: 16, display: 'flex', flexDirection: 'column' }}>
        {/* Section label */}
        

        {/* Heading */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 25,
            color: 'var(--foreground)',
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          General information
        </p>

        {/* Full name */}
        <div className="flex flex-col gap-2">
          <label style={labelStyle}>Full name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Jane Doe"
            style={inputStyle}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label style={labelStyle}>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Johndoe@email.com"
            style={inputStyle}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label style={labelStyle}>Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              style={{ ...inputStyle, paddingRight: 44 }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              {showPassword
                ? <Eye size={20} color="var(--primary)" />
                : <EyeOff size={20} color="var(--primary)" />
              }
            </button>
          </div>
        </div>

        {/* Phone number */}
        <div className="flex flex-col gap-2">
          <label style={labelStyle}>Phone number</label>
          <div className="flex gap-2 items-end">
            {/* Country selector */}
            <div
              style={{
                ...inputStyle,
                width: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                paddingRight: 8,
                flexShrink: 0,
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: 13, color: 'var(--accent)', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>
                🇺🇸 US (+1)
              </span>
              <ChevronDown size={16} color="var(--foreground)" />
            </div>

            {/* Phone input */}
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              style={{ ...inputStyle, flex: 1 }}
            />
          </div>
        </div>
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
          background: 'var(--background)',
        }}
      >
        <button
          onClick={() => navigate('/signup/terms')}
          style={{
            width: '100%',
            padding: '10px 12px',
            background: 'var(--primary)',
            color: 'var(--foreground)',
            borderRadius: 'var(--radius-button)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            border: 'none',
            maxWidth: 311,
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
