import { useNavigate, useLocation } from 'react-router';
import { Home, LayoutGrid, SlidersHorizontal, Settings } from 'lucide-react';

const navItems = [
  { label: 'Home', icon: Home, path: '/dashboard' },
  { label: 'Devices', icon: LayoutGrid, path: '/dashboard/devices' },
  { label: 'Modes', icon: SlidersHorizontal, path: '/dashboard/modes' },
  { label: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/dashboard') return location.pathname === '/dashboard';
    return location.pathname.startsWith(path);
  };

  return (
    <div
      className="flex-none border-t h-[84px] flex items-start justify-around px-4 pt-3 pb-6"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--border)',
        fontFamily: 'var(--font-ui)',
      }}
    >
      {navItems.map(({ label, icon: Icon, path }) => {
        const active = isActive(path);
        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            className="flex flex-col items-center gap-1 w-16 cursor-pointer"
            style={{ fontFamily: 'var(--font-ui)' }}
          >
            <Icon
              size={24}
              strokeWidth={active ? 2 : 1.8}
              style={{ color: active ? 'var(--accent-foreground)' : 'var(--primary)' }}
            />
            <span
              className="text-[11px] font-medium"
              style={{
                color: active ? 'var(--accent-foreground)' : 'var(--primary)',
                fontFamily: 'var(--font-ui)',
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
