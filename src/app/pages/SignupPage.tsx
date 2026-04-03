import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArmadaLogo } from '../components/ArmadaLogo';
import { TriangleBackground } from '../components/TriangleBackground';

/* Google icon inline SVG */
function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M19.6 10.23c0-.68-.06-1.36-.17-2H10v3.78h5.4a4.6 4.6 0 01-2 3.02v2.51h3.24C18.36 15.92 19.6 13.26 19.6 10.23z" fill="#4285F4"/>
      <path d="M10 20c2.7 0 4.97-.9 6.63-2.44l-3.24-2.51c-.9.6-2.04.95-3.39.95-2.6 0-4.81-1.76-5.6-4.12H1.06v2.6A10 10 0 0010 20z" fill="#34A853"/>
      <path d="M4.4 11.88A5.97 5.97 0 014.1 10c0-.65.11-1.29.3-1.88V5.52H1.06A10 10 0 000 10c0 1.61.38 3.13 1.06 4.48l3.34-2.6z" fill="#FBBC05"/>
      <path d="M10 3.96c1.47 0 2.79.51 3.83 1.5l2.87-2.87C14.96.99 12.7 0 10 0A10 10 0 001.06 5.52l3.34 2.6C5.2 5.71 7.4 3.96 10 3.96z" fill="#EA4335"/>
    </svg>
  );
}

/* Facebook icon inline SVG */
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#1877F2"/>
      <path d="M13.82 12.88l.44-2.88h-2.76V8.13c0-.79.39-1.56 1.63-1.56h1.26V4.08S13.2 3.88 12.09 3.88c-2.27 0-3.76 1.38-3.76 3.87V10H5.84v2.88h2.49V20h3.06v-7.12h2.43z" fill="white"/>
    </svg>
  );
}

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  return (
    <div
      className="relative flex flex-col min-h-screen"
      style={{ background: 'var(--background)', fontFamily: 'var(--font-body)' }}
    >
      {/* Subtle background pattern */}
      <TriangleBackground opacity={0.07} doubled />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 px-8 pt-[130px] pb-10 gap-5">

        {/* Logo + heading */}
        <div className="flex flex-col gap-6 items-center">
          <ArmadaLogo size="sm" />

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 31,
              color: 'var(--foreground)',
              lineHeight: 1.3,
              textAlign: 'center',
              margin: 0,
            }}
          >
            Create your account
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: 13,
              color: 'var(--foreground)',
              lineHeight: 1.6,
              textAlign: 'center',
              margin: 0,
            }}
          >
            Control your devices, reduce waste, and stay comfortable.{'\n'}All from one simple, powerful app.
          </p>
        </div>

        {/* Social sign-up */}
        <div className="flex flex-col gap-2">
          {/* Google */}
          <button
            style={{
              width: '100%',
              padding: '8px 24px',
              background: '#0a1a2e',
              border: '1px solid var(--accent)',
              borderRadius: 46,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              cursor: 'pointer',
              paddingLeft: 48,
            }}
          >
            <span style={{ flexShrink: 0 }}><GoogleIcon /></span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 16,
                color: 'var(--foreground)',
              }}
            >
              Sign up with Google
            </span>
          </button>

          {/* Facebook */}
          <button
            style={{
              width: '100%',
              padding: '8px 24px',
              background: '#0966ff',
              border: 'none',
              borderRadius: 46,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              cursor: 'pointer',
              paddingLeft: 48,
            }}
          >
            <span style={{ flexShrink: 0 }}><FacebookIcon /></span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 16,
                color: 'var(--foreground)',
              }}
            >
              Sign up with Facebook
            </span>
          </button>

          {/* OR divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '8px 0',
            }}
          >
            <div style={{ flex: 1, height: 1, background: 'rgba(118,149,207,0.21)' }} />
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontWeight: 500,
                fontSize: 16,
                color: 'var(--foreground)',
              }}
            >
              or
            </span>
            <div style={{ flex: 1, height: 1, background: 'rgba(118,149,207,0.21)' }} />
          </div>
        </div>

        {/* Email field + CTA */}
        <div className="flex flex-col gap-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            style={{
              width: '100%',
              padding: '16px 32px',
              background: '#0a1a2e',
              border: '1px solid var(--panel-highlight)',
              borderRadius: 26,
              color: 'var(--accent)',
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              outline: 'none',
              boxSizing: 'border-box',
              opacity: email ? 1 : 0.8,
              textAlign: 'center',
            }}
          />

          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate('/signup/details')}
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
              Continue
            </button>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'var(--accent)',
                textAlign: 'center',
                margin: 0,
              }}
            >
              By continuing, you agree to Armada Power's{' '}
              <span style={{ fontWeight: 600 }}>Terms of Service</span> and{' '}
              <span style={{ fontWeight: 600 }}>Privacy Policy</span>
            </p>

            <button
              onClick={() => navigate('/login')}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: 13,
                color: 'var(--foreground)',
                textAlign: 'center',
              }}
            >
              Already have an account?{' '}
              <span style={{ color: 'var(--accent)' }}>Log in</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
