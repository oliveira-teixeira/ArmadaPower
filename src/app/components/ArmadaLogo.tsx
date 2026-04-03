import svgPaths from '../../imports/SignupMobile/svg-6f9pdy78w4';

interface ArmadaLogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

/**
 * Armada Power logo using the official Figma SVG paths.
 * sm = 199×75px (as in sign-up screens)
 * lg = 277×105px (as in welcome / home screen) — uses CSS scale
 */
export function ArmadaLogo({ size = 'sm', className }: ArmadaLogoProps) {
  const base = { w: 199, h: 75 };
  const scale = size === 'lg' ? 277 / 199 : 1;

  return (
    <div
      className={className}
      style={{
        width: base.w * scale,
        height: base.h * scale,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* inner container always 199×75; scaled via transform-origin */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: base.w,
          height: base.h,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {/* ── POWER text (red) ── */}
        <div style={{ position: 'absolute', top: '76.67%', left: '49.27%', right: '5.13%', bottom: '0.03%' }}>
          <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 90.7487 17.4746" preserveAspectRatio="none">
            <path d={svgPaths.p2be14080} fill="#DC1E34" />
          </svg>
        </div>

        {/* ── Red accent deltas (top-right) ── */}
        <div style={{ position: 'absolute', top: '14.32%', left: '76.4%', right: '18.57%', bottom: '72.37%' }}>
          <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 9.99831 9.97912" preserveAspectRatio="none">
            <path d={svgPaths.pe05db00} fill="#DC1E34" />
          </svg>
        </div>
        <div style={{ position: 'absolute', top: '0.72%', left: '77.79%', right: '17.17%', bottom: '85.98%' }}>
          <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 10.0208 9.97912" preserveAspectRatio="none">
            <path d={svgPaths.p276fb8e0} fill="#DC1E34" />
          </svg>
        </div>
        <div style={{ position: 'absolute', top: '7.52%', left: '72.59%', right: '22.38%', bottom: '79.18%' }}>
          <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 10.0208 9.97912" preserveAspectRatio="none">
            <path d={svgPaths.p2f488e80} fill="#DC1E34" />
          </svg>
        </div>

        {/* ── armada letter shapes (white) ── */}
        {/* 'A' - leftmost */}
        <div style={{ position: 'absolute', top: '34.58%', left: '0.01%', right: '83.01%', bottom: '33.68%' }}>
          <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 33.8013 23.8067" preserveAspectRatio="none">
            <path d={svgPaths.p24849800} fill="white" />
          </svg>
        </div>
        {/* 'R' */}
        <div style={{ position: 'absolute', top: '34.58%', left: '15.71%', right: '69.49%', bottom: '33.74%' }}>
          <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 29.4571 23.7619" preserveAspectRatio="none">
            <path d={svgPaths.pfb25500} fill="white" />
          </svg>
        </div>
        {/* 'M' */}
        <div style={{ position: 'absolute', top: '34.58%', left: '28.97%', right: '49.16%', bottom: '33.74%' }}>
          <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 43.515 23.7619" preserveAspectRatio="none">
            <path d={svgPaths.p16676330} fill="white" />
          </svg>
        </div>
        {/* 'A' (2nd) */}
        <div style={{ position: 'absolute', top: '34.58%', left: '50.16%', right: '32.84%', bottom: '33.68%' }}>
          <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 33.8154 23.8067" preserveAspectRatio="none">
            <path d={svgPaths.p30a84dc0} fill="white" />
          </svg>
        </div>
        {/* 'D' */}
        <div style={{ position: 'absolute', top: '34.58%', left: '83%', right: '0', bottom: '33.71%' }}>
          <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 33.833 23.7843" preserveAspectRatio="none">
            <path d={svgPaths.p3d314580} fill="white" />
          </svg>
        </div>

        {/* ── Chevron / stylised 'A' above 'D' (white) ── */}
        <div style={{ position: 'absolute', top: '0', left: '66.68%', right: '11.99%', bottom: '33.74%' }}>
          <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" viewBox="0 0 42.45 49.6942" preserveAspectRatio="none">
            <path d={svgPaths.pea2f900} fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}
