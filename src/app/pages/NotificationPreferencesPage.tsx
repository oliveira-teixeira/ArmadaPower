import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronRight } from 'lucide-react';

function Toggle({ on, onChange, disabled }: { on: boolean; onChange?: (v: boolean) => void; disabled?: boolean }) {
  return (
    <button
      role="switch" aria-checked={on}
      onClick={() => !disabled && onChange && onChange(!on)}
      style={{
        width: 50, height: 30, borderRadius: 15, flexShrink: 0,
        background: on ? 'var(--panel-deep)' : 'var(--accent)',
        position: 'relative', border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 0.2s', opacity: disabled ? 0.6 : 1,
      }}>
      <span style={{
        position: 'absolute', top: 2, left: on ? 22 : 2, width: 26, height: 26,
        borderRadius: 13, background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        transition: 'left 0.18s', display: 'block',
      }} />
    </button>
  );
}

function SectionLabel({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ paddingLeft: 4 }}>
      <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: '0 0 4px' }}>
        {title}
      </p>
      <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', opacity: 0.7, margin: 0, lineHeight: '20px' }}>
        {subtitle}
      </p>
    </div>
  );
}

function ToggleRow({
  title, sub, on, onChange, disabled, isLast, dimmed,
}: {
  title: string; sub: string; on: boolean;
  onChange?: (v: boolean) => void; disabled?: boolean;
  isLast?: boolean; dimmed?: boolean;
}) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px', opacity: dimmed ? 0.5 : 1,
      borderBottom: isLast ? 'none' : '1px solid rgba(0,0,0,0.08)',
    }}>
      <div style={{ flex: 1, marginRight: 16 }}>
        <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>
          {title}
        </p>
        <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: '12.8px', opacity: 0.8, margin: '3px 0 0', lineHeight: '20px' }}>
          {sub}
        </p>
      </div>
      <Toggle on={on} onChange={onChange} disabled={disabled} />
    </div>
  );
}

export default function NotificationPreferencesPage() {
  const navigate = useNavigate();
  const [pushOn,         setPushOn]         = useState(true);
  const [emailOn,        setEmailOn]        = useState(false);
  const [criticalOn,     setCriticalOn]     = useState(true);
  const [importantOn,    setImportantOn]    = useState(true);
  const [infoOn,         setInfoOn]         = useState(false);
  const [quietOn,        setQuietOn]        = useState(false);
  const [saved,          setSaved]          = useState(false);

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
          Notification preferences
        </p>
        <div style={{ width: 22 }} />
      </div>

      <div style={{ padding: '24px 20px 80px', display: 'flex', flexDirection: 'column', gap: 28 }}>

        {/* ── Delivery Methods ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SectionLabel
            title="Delivery Methods"
            subtitle="Choose how you want to receive alerts and updates from Armada Power."
          />
          <div style={{
            background: 'var(--surface)', borderRadius: 'var(--radius-card)',
            border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden',
          }}>
            <ToggleRow
              title="Push Notifications" sub="Receive real-time alerts on your device"
              on={pushOn} onChange={setPushOn}
            />
            <ToggleRow
              title="Email Notifications" sub="Receive updates and summaries via email"
              on={emailOn} onChange={setEmailOn} isLast
            />
          </div>
        </div>

        {/* ── Alert Types ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SectionLabel
            title="Alert Types"
            subtitle="Customize which types of events trigger a notification."
          />
          <div style={{
            background: 'var(--surface)', borderRadius: 'var(--radius-card)',
            border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden',
          }}>
            <ToggleRow
              title="Critical Alerts"
              sub="Device offline, sensor failures, and safety warnings."
              on={criticalOn} onChange={setCriticalOn}
            />
            <ToggleRow
              title="Important Events" sub="Peak energy events and high usage spikes"
              on={importantOn} onChange={setImportantOn}
            />
            <ToggleRow
              title="Informational Updates" sub="Schedule changes, eco mode, and savings summaries"
              on={infoOn} onChange={setInfoOn} isLast
            />
          </div>
        </div>

        {/* ── Quiet Hours ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SectionLabel
            title="Quiet Hours"
            subtitle="Mute notifications during specific times."
          />
          <div style={{
            background: 'var(--surface)', borderRadius: 'var(--radius-card)',
            border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden',
          }}>
            <ToggleRow
              title="Enable Quiet Hours" sub="Currently set from 10:00 PM to 7:00 AM"
              on={quietOn} onChange={setQuietOn}
            />
            {/* Schedule row — dimmed if quiet hours off */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px', opacity: quietOn ? 1 : 0.5,
            }}>
              <div style={{ flex: 1 }}>
                <p style={{ color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, margin: 0 }}>
                  Schedule
                </p>
                <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-body)', fontSize: '12.8px', margin: '3px 0 0' }}>
                  10:00 PM – 7:00 AM
                </p>
              </div>
              <ChevronRight size={18} style={{ color: 'var(--accent)' }} />
            </div>
          </div>
        </div>

        {/* Save */}
        <button
          onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
          style={{
            width: '100%', padding: '10px 0', borderRadius: 'var(--radius-button)',
            background: saved ? 'var(--success-dark)' : 'var(--primary)',
            color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: 16,
            fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'background 0.2s',
          }}>
          {saved ? 'Saved ✓' : 'Save Preferences'}
        </button>
      </div>
    </div>
  );
}