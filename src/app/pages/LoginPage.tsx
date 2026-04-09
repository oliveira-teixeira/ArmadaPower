import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-ui)',
    fontWeight: 500,
    fontSize: 14,
    color: 'var(--foreground)',
  };

  return (
    <div
      className="relative flex flex-col h-full min-h-screen"
      style={{ background: 'var(--background)', fontFamily: 'var(--font-body)' }}
    >
      {/* Header */}
      <div
        className="flex-none flex items-center justify-between px-6 py-4"
        style={{
          height: 64,
          background: 'var(--panel)',
          borderBottom: '1px solid var(--panel-highlight)',
          position: 'relative',
        }}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center"
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
          Log In
        </span>
        <div style={{ width: 24 }} />
      </div>

      {/* Form */}
      <div className="flex flex-col flex-1 px-6 pt-8 pb-10 gap-5 overflow-y-auto">
        {/* Title */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 25,
            color: 'var(--foreground)',
            margin: '0 0 4px',
          }}
        >
          Welcome back
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--accent)', margin: 0 }}>
          Log in to your Armada Power account to manage your home energy devices.
        </p>

        {/* Email field */}
        <div className="flex flex-col gap-2">
          <label style={labelStyle}>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@email.com"
            style={{ ...inputStyle, opacity: email ? 1 : 0.8 }}
          />
        </div>

        {/* Password field */}
        <div className="flex flex-col gap-2">
          <label style={labelStyle}>Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{ ...inputStyle, paddingRight: 44, opacity: password ? 1 : 0.8 }}
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

        {/* Forgot password */}
        <button
          style={{
            alignSelf: 'flex-end',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 13,
            color: 'var(--accent)',
            padding: 0,
            marginTop: -8,
          }}
        >
          Forgot password?
        </button>
      </div>

      {/* Fixed footer */}
      <div
        style={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          alignItems: 'center',
          padding: '21px 20px 48px',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          background: 'var(--background)',
        }}
      >
        <button
          onClick={() => navigate('/dashboard')}
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
          }}
        >
          Log In
        </button>
        <button
          onClick={() => navigate('/signup')}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 13,
            color: 'var(--foreground)',
            padding: 0,
          }}
        >
          Don't have an account?{' '}
          <span style={{ color: 'var(--accent)' }}>Sign up</span>
        </button>
      </div>
    </div>
  );
}
