import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronRight, FileText, Shield } from 'lucide-react';

const legalItems = [
  { icon: FileText, label: 'Terms and Conditions', sub: 'Rules and guidelines for using our services' },
  { icon: Shield,   label: 'Privacy Policy',        sub: 'How we collect, use, and protect your data' },
  { icon: FileText, label: 'Cookie Policy',          sub: 'How we use cookies on your device' },
];

export default function PrivacyPage() {
  const navigate = useNavigate();

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
          Privacy and Legal
        </p>
        <div style={{ width: 22 }} />
      </div>

      <div style={{ padding: '24px 20px 80px', display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Section intro */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>
            Legal Agreements
          </p>
          <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', opacity: 0.7, margin: 0, lineHeight: '20px' }}>
            Review the terms and policies governing your use of Armada Power services and devices.
          </p>
        </div>

        {/* Legal items card */}
        <div style={{
          background: 'var(--surface)', borderRadius: 'var(--radius-card)',
          border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden',
        }}>
          {legalItems.map((item, i) => (
            <button key={item.label}
              style={{
                display: 'flex', alignItems: 'center', padding: '16px 16px',
                width: '100%', textAlign: 'left', background: 'transparent', border: 'none',
                cursor: 'pointer', borderBottom: i < legalItems.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600, margin: 0 }}>
                  {item.label}
                </p>
                <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px', opacity: 0.8, margin: '2px 0 0' }}>
                  {item.sub}
                </p>
              </div>
              <ChevronRight size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginLeft: 8 }} />
            </button>
          ))}
        </div>

        {/* Data & Permissions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>
            Data & Permissions
          </p>
          <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', opacity: 0.7, margin: 0, lineHeight: '20px' }}>
            Manage how your data is used and what permissions the app has on your device.
          </p>
        </div>

        <div style={{
          background: 'var(--surface)', borderRadius: 'var(--radius-card)',
          border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden',
        }}>
          {['Delete My Data', 'Download My Data', 'Manage App Permissions'].map((label, i, arr) => (
            <button key={label}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px', width: '100%', textAlign: 'left',
                background: 'transparent', border: 'none', cursor: 'pointer',
                borderBottom: i < arr.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              }}>
              <span style={{
                color: label === 'Delete My Data' ? 'var(--danger)' : 'var(--surface-foreground)',
                fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600,
              }}>{label}</span>
              <ChevronRight size={18} style={{ color: 'var(--accent)' }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
