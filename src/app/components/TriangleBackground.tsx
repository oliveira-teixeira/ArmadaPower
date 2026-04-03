import svgPaths from '../../imports/SignupMobile/svg-6f9pdy78w4';

interface TriangleBackgroundProps {
  opacity?: number;
  /** If true, render a second flipped instance at the bottom */
  doubled?: boolean;
}

const PATTERN_KEYS: (keyof typeof svgPaths)[] = [
  'p29587980','p3d233d30','p2c731920','pfe71c40','p27df1900','p3d229100',
  'p2d4494f0','p8877500','p3bdafe00','p33f2f900','p750e340','p1a41e590',
  'p13b62a00','p1ad88280','p3a609700','p8a3900','p21c4e00','p1e073000',
  'p290fee00','p12153580','p2c959300','p1cf58180','pf235800','pa0c5800',
  'p2d1ba200','pad75d00','p3539d640','p1c3b4b70','p1a5e5a80','p2ddbe800',
  'p19adf800','p5308e00','p3dfb5a00','p5b9fcf0','pe8fd900','p2b1aa100',
  'p3d2e8480','p10720b00','p23f7f500',
];

/** Triangle/diamond decorative background pattern (374 × 284.972 viewBox). */
export function TriangleBackground({ opacity = 0.15, doubled = true }: TriangleBackgroundProps) {
  const PatternSvg = () => (
    <svg
      style={{ display: 'block', width: '100%', height: '100%' }}
      fill="none"
      viewBox="0 0 374 284.972"
      preserveAspectRatio="xMidYMid slice"
    >
      <g opacity={opacity}>
        {PATTERN_KEYS.map((k) => (
          <path key={k} d={svgPaths[k]} fill="#7695CF" />
        ))}
      </g>
    </svg>
  );

  return (
    <>
      {/* Top pattern */}
      <div
        style={{
          position: 'absolute',
          top: '-9.86%',
          left: '0.27%',
          right: 0,
          bottom: '76.41%',
          pointerEvents: 'none',
        }}
      >
        <PatternSvg />
      </div>

      {/* Bottom pattern (flipped 180°) */}
      {doubled && (
        <div
          style={{
            position: 'absolute',
            top: '83.33%',
            left: '0.27%',
            right: 0,
            bottom: '-16.78%',
            pointerEvents: 'none',
            transform: 'rotate(180deg)',
          }}
        >
          <PatternSvg />
        </div>
      )}
    </>
  );
}
