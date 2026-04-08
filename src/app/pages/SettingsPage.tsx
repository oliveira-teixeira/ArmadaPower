import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronRight, User, Lock, Bell, Home, Cpu, Plus } from 'lucide-react';

const profileItems = [
  { icon: User,  label: 'Edit Profile',             route: '/settings/edit-profile' },
  { icon: Lock,  label: 'Change Password',           route: '/settings/change-password' },
  { icon: Bell,  label: 'Notification Preferences',  route: '/settings/notifications' },
];

const accountItems = [
  { icon: Home,   label: 'Home information',  route: '/settings/manage-homes' },
  { icon: Cpu,    label: 'Connected Devices', route: '/devices' },
];

const householdMembers = [
  { name: 'Lucas Simas (You)', role: 'Primary Account' },
  { name: 'John Simas',        role: 'Secondary Account' },
  { name: 'Lucas Jr.',         role: 'Secondary Account' },
];

function SettingsList({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: 'var(--surface)', borderRadius: 'var(--radius-card)',
      border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden',
    }}>
      {children}
    </div>
  );
}

function SettingsRow({
  icon: Icon, label, isLast = false, onClick,
}: {
  icon?: React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>;
  label: string; isLast?: boolean; onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '16px 20px', width: '100%', textAlign: 'left',
        background: 'transparent', border: 'none', cursor: onClick ? 'pointer' : 'default',
        borderBottom: isLast ? 'none' : '1px solid rgba(0,0,0,0.08)',
        fontFamily: 'var(--font-body)',
      }}
    >
      {Icon && <Icon size={20} strokeWidth={1.6} style={{ color: 'var(--surface-foreground)', flexShrink: 0 }} />}
      <span style={{ flex: 1, color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16 }}>
        {label}
      </span>
      <ChevronRight size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
    </button>
  );
}

export default function SettingsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'var(--background)', minHeight: '100%', fontFamily: 'var(--font-body)' }}>

      {/* ── Header ── */}
      <div style={{
        background: 'var(--panel)', borderBottom: '1px solid var(--chart-5)',
        padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 8,
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <button onClick={() => navigate('/')} style={{ color: 'var(--foreground)', background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
          <ArrowLeft size={22} strokeWidth={2} />
        </button>
        <p style={{
          flex: 1, textAlign: 'center', color: 'var(--foreground)',
          fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0,
        }}>Settings</p>
        <div style={{ width: 22 }} />
      </div>

      {/* ── Profile Header ── */}
      <div style={{
        background: 'var(--panel)', borderBottom: '1px solid var(--chart-5)',
        padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: 28, flexShrink: 0,
          background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ color: 'var(--accent-foreground)', fontFamily: 'var(--font-ui)', fontSize: 20, fontWeight: 600 }}>
            LS
          </span>
        </div>
        <div>
          <p style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 600, margin: 0 }}>
            Lucas Simas
          </p>
          <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', margin: '2px 0 6px', opacity: 0.85 }}>
            Lucas@email.com
          </p>
          <span style={{
            display: 'inline-block', background: 'var(--panel-deep)',
            borderRadius: 6, padding: '2px 8px',
          }}>
            <span style={{ color: 'var(--foreground)', fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600 }}>
              Primary Account
            </span>
          </span>
        </div>
      </div>

      <div style={{ padding: '16px 16px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* Profile section */}
        <div>
          <p style={{
            color: 'var(--muted-foreground)', fontFamily: 'var(--font-ui)', fontSize: '12.8px',
            fontWeight: 600, margin: '0 0 8px 4px', textTransform: 'uppercase' as const, letterSpacing: '0.5px',
          }}>Profile</p>
          <SettingsList>
            {profileItems.map((item, i) => (
              <SettingsRow
                key={item.label} icon={item.icon} label={item.label}
                isLast={i === profileItems.length - 1}
                onClick={item.route ? () => navigate(item.route!) : undefined}
              />
            ))}
          </SettingsList>
        </div>

        {/* Household Members */}
        <div>
          <p style={{
            color: 'var(--muted-foreground)', fontFamily: 'var(--font-ui)', fontSize: '12.8px',
            fontWeight: 600, margin: '0 0 8px 4px', textTransform: 'uppercase' as const, letterSpacing: '0.5px',
          }}>Household Members</p>
          <SettingsList>
            {householdMembers.map((member, i) => (
              <button key={member.name}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px 20px', width: '100%', textAlign: 'left',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  borderBottom: '1px solid rgba(0,0,0,0.08)', fontFamily: 'var(--font-body)',
                }}>
                <div>
                  <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>
                    {member.name}
                  </p>
                  <p style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-ui)', fontSize: '12.8px', margin: '2px 0 0' }}>
                    {member.role}
                  </p>
                </div>
                <ChevronRight size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              </button>
            ))}
            <button
              onClick={() => navigate('/settings/add-member')}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '16px 20px', width: '100%', textAlign: 'left',
                background: 'transparent', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-body)',
              }}>
              <Plus size={18} strokeWidth={2} style={{ color: 'var(--surface-foreground)', flexShrink: 0 }} />
              <span style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16 }}>
                Invite Household Member
              </span>
            </button>
          </SettingsList>
        </div>

        {/* Account Settings */}
        <div>
          <p style={{
            color: 'var(--muted-foreground)', fontFamily: 'var(--font-ui)', fontSize: '12.8px',
            fontWeight: 600, margin: '0 0 8px 4px', textTransform: 'uppercase' as const, letterSpacing: '0.5px',
          }}>Account Settings</p>
          <SettingsList>
            {accountItems.map((item, i) => (
              <SettingsRow
                key={item.label} icon={item.icon} label={item.label}
                isLast={i === accountItems.length - 1}
                onClick={item.route ? () => navigate(item.route!) : undefined}
              />
            ))}
          </SettingsList>
        </div>

        {/* Sign Out */}
        <button style={{
          width: '100%', padding: '14px 0', borderRadius: 'var(--radius-card)',
          background: 'var(--danger)', color: 'var(--foreground)',
          fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600,
          border: 'none', cursor: 'pointer',
        }}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
