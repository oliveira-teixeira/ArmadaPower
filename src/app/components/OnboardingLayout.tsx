import { Outlet } from 'react-router';

export default function OnboardingLayout() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ background: '#060a11' }}>
      <div
        className="relative w-full max-w-[390px] h-screen max-h-[900px] flex flex-col overflow-hidden md:rounded-[44px] md:border md:border-slate-700 md:shadow-[0_0_80px_rgba(0,0,0,0.8)]"
        style={{ background: 'var(--background)' }}
      >
        <div className="flex-1 overflow-y-auto overflow-x-hidden" style={{ minHeight: 0 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
