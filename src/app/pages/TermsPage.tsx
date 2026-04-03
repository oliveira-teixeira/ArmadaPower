import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

const SECTIONS = [
  {
    heading: '1. Introduction',
    body: `Welcome to Armada Power. These Terms and Conditions ("Terms") govern your access to and use of the Armada Power mobile application, website, and related smart home energy management services (collectively, the "Services").\n\nBy creating an account, accessing, or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.`,
  },
  {
    heading: '2. Account Registration',
    body: `To use certain features of the Services, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.\n\nYou are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.`,
  },
  {
    heading: '3. Device Connectivity',
    body: `The Services are designed to connect with and control compatible smart home energy devices, such as water heaters and thermostats. Armada Power is not responsible for the performance, reliability, or safety of third-party devices connected to our Services.`,
  },
  {
    heading: '4. Energy Management',
    body: `While the Services aim to provide energy usage insights and optimize performance, we do not guarantee specific energy savings or cost reductions. Actual results may vary based on various factors including, but not limited to, household usage patterns, weather conditions, and utility rates.`,
  },
  {
    heading: '5. Service Availability',
    body: `We strive to provide continuous access to the Services, but we do not guarantee that the Services will be available at all times. The Services may be temporarily unavailable due to maintenance, updates, or technical issues beyond our control.`,
  },
];

export default function TermsPage() {
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

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
          onClick={() => navigate('/signup/details')}
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
          Legal &amp; Privacy
        </span>
        <div style={{ width: 24 }} />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-36" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Title */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 25,
            color: 'var(--foreground)',
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          Terms &amp; Conditions
        </p>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 0',
          }}
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--accent)', margin: 0, lineHeight: 1.5 }}>
            Please review our terms of service before continuing to setup your home energy devices.
          </p>
        </div>

        {/* T&C card */}
        <div
          style={{
            background: 'var(--panel-highlight)',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Scroll indicator bar */}
          

          <div style={{ padding: 21, paddingRight: 12, height: 'calc(100vh - 400px)', overflowY: 'auto' }}>
            {/* Last updated */}
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--accent)', margin: '0 0 12px' }}>
              Last Updated: October 15, 2023
            </p>

            {SECTIONS.map((section, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 16,
                    color: 'var(--foreground)',
                    margin: '0 0 8px',
                  }}
                >
                  {section.heading}
                </p>
                {section.body.split('\n\n').map((para, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: 'var(--foreground)',
                      margin: j > 0 ? '8px 0 0' : '0',
                      lineHeight: 1.6,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
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
          gap: 16,
          alignItems: 'center',
          padding: '21px 20px 48px',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          background: 'var(--background)',
        }}
      >
        {/* Checkbox */}
        <button
          onClick={() => setAccepted(!accepted)}
          style={{
            width: '100%',
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            textAlign: 'left',
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              border: '1px solid var(--accent)',
              background: accepted ? 'var(--primary)' : '#0a111d',
              flexShrink: 0,
              marginTop: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {accepted && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 16, color: 'var(--foreground)' }}>
              Accept terms and conditions
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--accent)' }}>
              I have read and agree to the Armada Power Terms &amp; Conditions.
            </span>
          </div>
        </button>

        {/* Continue button */}
        <button
          onClick={() => accepted && navigate('/onboarding/setup')}
          style={{
            width: '100%',
            maxWidth: 311,
            padding: '10px 12px',
            background: accepted ? 'var(--primary)' : 'var(--panel-highlight)',
            color: 'var(--foreground)',
            borderRadius: 'var(--radius-button)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 16,
            cursor: accepted ? 'pointer' : 'not-allowed',
            border: 'none',
            opacity: accepted ? 1 : 0.5,
            transition: 'all 0.2s',
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}