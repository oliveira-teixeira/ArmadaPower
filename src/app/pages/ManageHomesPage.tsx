import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronRight, Plus, MapPin } from 'lucide-react';

const HOMES = [
  { id: '1', address: 'Ap 4B - 123 Maple Street, S…', role: 'Primary Account' },
  { id: '2', address: '10773 Fayth Rd Cottondale, Alabama (AL)', role: 'Secondary Account' },
  { id: '3', address: '34 Elm Street, Woodsboro (CA)', role: 'Secondary Account' },
];

export default function ManageHomesPage() {
  const navigate = useNavigate();
  const [homes, setHomes] = useState(HOMES);

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
          Manage Homes
        </p>
        <div style={{ width: 22 }} />
      </div>

      <div style={{ padding: '32px 20px 80px', display: 'flex', flexDirection: 'column', gap: 12 }}>

        {/* Section heading */}
        <p style={{
          color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: 16,
          fontWeight: 600, margin: '0 0 0 4px',
        }}>Registered homes</p>

        {/* Homes list card */}
        <div style={{
          background: 'var(--surface)', borderRadius: 'var(--radius-card)',
          border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden',
        }}>
          {homes.map((home, i) => (
            <button key={home.id}
              onClick={() => navigate(`/dashboard/settings/manage-homes/${home.id}`)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px', width: '100%', textAlign: 'left',
                background: 'transparent', border: 'none', cursor: 'pointer',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
              }}>
              <div style={{ flex: 1, minWidth: 0, marginRight: 12 }}>
                <p style={{
                  color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)',
                  fontSize: 16, fontWeight: 600, margin: 0, lineHeight: '20px',
                }}>{home.address}</p>
                <p style={{
                  color: 'var(--surface-foreground)', fontFamily: 'var(--font-body)',
                  fontSize: '12.8px', opacity: 0.8, margin: '2px 0 0',
                }}>{home.role}</p>
              </div>
              <ChevronRight size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
            </button>
          ))}

          {/* Add new home */}
          <button
            onClick={() => navigate('/dashboard/settings/add-home')}
            style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '16px',
              width: '100%', textAlign: 'left', background: 'transparent',
              border: 'none', cursor: 'pointer',
            }}>
            <Plus size={20} strokeWidth={1.66} style={{ color: 'var(--panel-deep)', flexShrink: 0 }} />
            <span style={{
              color: 'var(--panel-deep)', fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600,
            }}>Add new home</span>
          </button>
        </div>

        {/* Tip banner */}
        <div style={{
          background: 'var(--panel-highlight)', borderRadius: 'var(--radius-card)',
          border: '1px solid var(--chart-5)', padding: '14px 16px',
          display: 'flex', alignItems: 'flex-start', gap: 10, marginTop: 8,
        }}>
          <MapPin size={16} strokeWidth={1.5} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }} />
          <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '12.8px', margin: 0, lineHeight: '20px' }}>
            Each home has its own device setup, modes, and energy settings. Switch homes from the location pill on the dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}