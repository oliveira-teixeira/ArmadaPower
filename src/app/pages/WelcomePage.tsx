import { useNavigate } from 'react-router';
import { ArmadaLogo } from '../components/ArmadaLogo';
import { TriangleBackground } from '../components/TriangleBackground';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col h-full min-h-screen"
      style={{ background: 'var(--background)', fontFamily: 'var(--font-body)' }}
    >
      {/* Background triangle patterns */}
      <TriangleBackground opacity={0.18} doubled />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 px-8 pt-[193px] pb-10 gap-12">
        {/* Logo */}
        <div className="flex justify-center">
          <ArmadaLogo size="lg" />
        </div>

        {/* Tagline + CTA */}
        <div className="flex flex-col gap-6">
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '31px',
              color: 'var(--foreground)',
              lineHeight: 1.3,
              textAlign: 'center',
              margin: 0,
            }}
          >
            Smarter home energy, simplified.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '13px',
              color: 'var(--foreground)',
              lineHeight: 1.6,
              textAlign: 'center',
              margin: 0,
            }}
          >
            Armada Power connects your home to smarter energy programs. Automate comfort, lower
            costs, and support a stronger grid.
            {'\n\n'}Effortless control, built around you.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col gap-2 mt-2">
            {/* Login */}
            <button
              onClick={() => navigate('/login')}
              style={{
                width: '100%',
                padding: '10px 12px',
                background: 'var(--primary)',
                color: 'var(--foreground)',
                borderRadius: 'var(--radius-button)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '16px',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Login
            </button>

            {/* Create Account */}
            <button
              onClick={() => navigate('/signup')}
              style={{
                width: '100%',
                padding: '10px 12px',
                background: 'transparent',
                color: 'var(--foreground)',
                borderRadius: 'var(--radius-button)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                border: '1px solid var(--accent)',
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
