import { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronDown, TrendingUp, ChevronLeft, ChevronRight, Minus } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, ReferenceLine, ResponsiveContainer, Cell, LabelList,
} from 'recharts';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
type Level = 'year' | 'month' | 'week' | 'day';

interface BarEntry {
  key: string;
  label: string;
  sublabel?: string;  // Week view: "Mar 1–7" secondary label
  value: number;
  utilityEvent?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Static data (matches Figma screenshots + generated for other combinations)
// ─────────────────────────────────────────────────────────────────────────────
const MONTHS_SHORT = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
const MONTHS_FULL  = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const YEAR_DATA: Record<number, BarEntry[]> = {
  2025: [
    { key:'jan', label:'jan', value:52 }, { key:'feb', label:'feb', value:47 },
    { key:'mar', label:'mar', value:61 }, { key:'apr', label:'apr', value:38 },
    { key:'may', label:'may', value:76 }, { key:'jun', label:'jun', value:85 },
    { key:'jul', label:'jul', value:68 }, { key:'aug', label:'aug', value:54 },
    { key:'sep', label:'sep', value:42 }, { key:'oct', label:'oct', value:36 },
    { key:'nov', label:'nov', value:80 }, { key:'dec', label:'dec', value:58 },
  ],
  2026: [
    { key:'jan', label:'jan', value:48 }, { key:'feb', label:'feb', value:53 },
    { key:'mar', label:'mar', value:55 }, { key:'apr', label:'apr', value:42 },
    { key:'may', label:'may', value:82 }, { key:'jun', label:'jun', value:90 },
    { key:'jul', label:'jul', value:70 }, { key:'aug', label:'aug', value:50 },
    { key:'sep', label:'sep', value:45 }, { key:'oct', label:'oct', value:40 },
    { key:'nov', label:'nov', value:88 }, { key:'dec', label:'dec', value:60 },
  ],
};

// Weekly data per month — keyed by "monthKey"
const MONTH_DATA: Record<string, BarEntry[]> = {
  'jan': [
    { key:'w0', label:'Week 1', sublabel:'Jan 1–7',   value:52 },
    { key:'w1', label:'Week 2', sublabel:'Jan 8–14',  value:48 },
    { key:'w2', label:'Week 3', sublabel:'Jan 15–21', value:61 },
    { key:'w3', label:'Week 4', sublabel:'Jan 22–28', value:45 },
  ],
  'feb': [
    { key:'w0', label:'Week 1', sublabel:'Feb 1–7',   value:58 },
    { key:'w1', label:'Week 2', sublabel:'Feb 8–14',  value:55 },
    { key:'w2', label:'Week 3', sublabel:'Feb 15–21', value:62 },
    { key:'w3', label:'Week 4', sublabel:'Feb 22–28', value:51 },
  ],
  'mar': [
    { key:'w0', label:'Week 1', sublabel:'Mar 1–7',   value:78 },
    { key:'w1', label:'Week 2', sublabel:'Mar 8–14',  value:65 },
    { key:'w2', label:'Week 3', sublabel:'Mar 15–21', value:82 },
    { key:'w3', label:'Week 4', sublabel:'Mar 22–25', value:70 },
  ],
  'apr': [
    { key:'w0', label:'Week 1', sublabel:'Apr 1–7',   value:38 },
    { key:'w1', label:'Week 2', sublabel:'Apr 8–14',  value:45 },
    { key:'w2', label:'Week 3', sublabel:'Apr 15–21', value:42 },
    { key:'w3', label:'Week 4', sublabel:'Apr 22–28', value:40 },
  ],
  'may': [
    { key:'w0', label:'Week 1', sublabel:'May 1–7',   value:72 },
    { key:'w1', label:'Week 2', sublabel:'May 8–14',  value:80 },
    { key:'w2', label:'Week 3', sublabel:'May 15–21', value:88 },
    { key:'w3', label:'Week 4', sublabel:'May 22–28', value:75 },
  ],
  'jun': [
    { key:'w0', label:'Week 1', sublabel:'Jun 1–7',   value:88 },
    { key:'w1', label:'Week 2', sublabel:'Jun 8–14',  value:92 },
    { key:'w2', label:'Week 3', sublabel:'Jun 15–21', value:85 },
    { key:'w3', label:'Week 4', sublabel:'Jun 22–28', value:90 },
  ],
  'jul': [
    { key:'w0', label:'Week 1', sublabel:'Jul 1–7',   value:68 },
    { key:'w1', label:'Week 2', sublabel:'Jul 8–14',  value:72 },
    { key:'w2', label:'Week 3', sublabel:'Jul 15–21', value:75 },
    { key:'w3', label:'Week 4', sublabel:'Jul 22–28', value:65 },
  ],
  'aug': [
    { key:'w0', label:'Week 1', sublabel:'Aug 1–7',   value:48 },
    { key:'w1', label:'Week 2', sublabel:'Aug 8–14',  value:52 },
    { key:'w2', label:'Week 3', sublabel:'Aug 15–21', value:55 },
    { key:'w3', label:'Week 4', sublabel:'Aug 22–28', value:50 },
  ],
  'sep': [
    { key:'w0', label:'Week 1', sublabel:'Sep 1–7',   value:42 },
    { key:'w1', label:'Week 2', sublabel:'Sep 8–14',  value:45 },
    { key:'w2', label:'Week 3', sublabel:'Sep 15–21', value:48 },
    { key:'w3', label:'Week 4', sublabel:'Sep 22–28', value:44 },
  ],
  'oct': [
    { key:'w0', label:'Week 1', sublabel:'Oct 1–7',   value:38 },
    { key:'w1', label:'Week 2', sublabel:'Oct 8–14',  value:42 },
    { key:'w2', label:'Week 3', sublabel:'Oct 15–21', value:40 },
    { key:'w3', label:'Week 4', sublabel:'Oct 22–28', value:38 },
  ],
  'nov': [
    { key:'w0', label:'Week 1', sublabel:'Nov 1–7',   value:82 },
    { key:'w1', label:'Week 2', sublabel:'Nov 8–14',  value:90 },
    { key:'w2', label:'Week 3', sublabel:'Nov 15–21', value:88 },
    { key:'w3', label:'Week 4', sublabel:'Nov 22–28', value:86 },
  ],
  'dec': [
    { key:'w0', label:'Week 1', sublabel:'Dec 1–7',   value:58 },
    { key:'w1', label:'Week 2', sublabel:'Dec 8–14',  value:62 },
    { key:'w2', label:'Week 3', sublabel:'Dec 15–21', value:65 },
    { key:'w3', label:'Week 4', sublabel:'Dec 22–28', value:60 },
  ],
};

// Daily data per month+week — keyed by "monthKey-weekIdx"
const WEEK_DATA: Record<string, BarEntry[]> = {
  'mar-0': [
    { key:'01', label:'01', value:58 }, { key:'02', label:'02', value:48 },
    { key:'03', label:'03', value:42 }, { key:'04', label:'04', value:38 },
    { key:'05', label:'05', value:85 }, { key:'06', label:'06', value:88 },
    { key:'07', label:'07', value:72 },
  ],
  'mar-1': [
    { key:'08', label:'08', value:62 }, { key:'09', label:'09', value:55 },
    { key:'10', label:'10', value:48 }, { key:'11', label:'11', value:70 },
    { key:'12', label:'12', value:78, utilityEvent:true },
    { key:'13', label:'13', value:65 }, { key:'14', label:'14', value:52 },
  ],
  'mar-2': [
    { key:'15', label:'15', value:68 }, { key:'16', label:'16', value:72 },
    { key:'17', label:'17', value:88 }, { key:'18', label:'18', value:82, utilityEvent:true },
    { key:'19', label:'19', value:90 }, { key:'20', label:'20', value:75 },
    { key:'21', label:'21', value:60 },
  ],
  'mar-3': [
    { key:'22', label:'22', value:58 }, { key:'23', label:'23', value:70 },
    { key:'24', label:'24', value:75 }, { key:'25', label:'25', value:62 },
  ],
};

// Hourly data per month+week+day — keyed by "monthKey-weekIdx-dayLabel"
const DAY_DATA: Record<string, BarEntry[]> = {
  'mar-0-01': [
    { key:'h0',  label:'12a', value:15 }, { key:'h1',  label:'1a',  value:12 },
    { key:'h2',  label:'2a',  value:10 }, { key:'h3',  label:'3a',  value:8  },
    { key:'h4',  label:'4a',  value:9  }, { key:'h5',  label:'5a',  value:18 },
    { key:'h6',  label:'6a',  value:52, utilityEvent:true },
    { key:'h7',  label:'7a',  value:68, utilityEvent:true },
    { key:'h8',  label:'8a',  value:72 }, { key:'h9',  label:'9a',  value:75 },
    { key:'h10', label:'10a', value:65 }, { key:'h11', label:'11a', value:60 },
    { key:'h12', label:'12p', value:55 }, { key:'h13', label:'1p',  value:48 },
    { key:'h14', label:'2p',  value:52 }, { key:'h15', label:'3p',  value:60 },
    { key:'h16', label:'4p',  value:70 }, { key:'h17', label:'5p',  value:78 },
    { key:'h18', label:'6p',  value:65 }, { key:'h19', label:'7p',  value:55 },
    { key:'h20', label:'8p',  value:45 }, { key:'h21', label:'9p',  value:38 },
    { key:'h22', label:'10p', value:28 }, { key:'h23', label:'11p', value:20 },
  ],
};

// Deterministic fallback generator
function seeded(seed: number, min: number, max: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return Math.round(min + (x - Math.floor(x)) * (max - min));
}

function getWeekData(monthKey: string, weekIdx: number): BarEntry[] {
  const cached = WEEK_DATA[`${monthKey}-${weekIdx}`];
  if (cached) return cached;
  const mIdx = MONTHS_SHORT.indexOf(monthKey);
  return Array.from({ length: 7 }, (_, i) => ({
    key: String(weekIdx * 7 + i + 1).padStart(2, '0'),
    label: String(weekIdx * 7 + i + 1).padStart(2, '0'),
    value: seeded(mIdx * 100 + weekIdx * 10 + i, 30, 90),
    utilityEvent: seeded(mIdx * 100 + weekIdx * 10 + i + 50, 0, 6) === 0,
  }));
}

function getDayData(monthKey: string, weekIdx: number, dayKey: string): BarEntry[] {
  const cacheKey = `${monthKey}-${weekIdx}-${dayKey}`;
  const cached = DAY_DATA[cacheKey];
  if (cached) return cached;
  const mIdx = MONTHS_SHORT.indexOf(monthKey);
  const dIdx = parseInt(dayKey);
  const hours = [
    '12a','1a','2a','3a','4a','5a','6a','7a','8a','9a','10a','11a',
    '12p','1p','2p','3p','4p','5p','6p','7p','8p','9p','10p','11p',
  ];
  return hours.map((label, i) => ({
    key: `h${i}`,
    label,
    value: seeded(mIdx * 1000 + dIdx * 100 + i, 8, 85),
    utilityEvent: i >= 6 && i <= 8 && seeded(mIdx * 500 + dIdx * 50 + i, 0, 3) === 0,
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper: get kWh label for given level
// ─────────────────────────────────────────────────────────────────────────────
function getKwhLabel(data: BarEntry[]): string {
  const total = data.reduce((s, d) => s + d.value, 0);
  return `${total} kWh`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Custom recharts axis tick — two-line for week view
// ─────────────────────────────────────────────────────────────────────────────
function WeekAxisTick({ x, y, payload, data }: {
  x?: number; y?: number; payload?: any; data: BarEntry[];
}) {
  const item = data[payload?.index ?? 0];
  return (
    <g transform={`translate(${x},${y})`}>
      <text textAnchor="middle" fill="var(--accent)" fontSize={10.24} fontWeight={600}
            fontFamily="var(--font-body)" dy={12}>{item?.label}</text>
      <text textAnchor="middle" fill="var(--primary)" fontSize={10.24} fontWeight={600}
            fontFamily="var(--font-body)" dy={24}>{item?.sublabel}</text>
    </g>
  );
}

function DefaultAxisTick({ x, y, payload }: { x?: number; y?: number; payload?: any }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text textAnchor="middle" fill="var(--accent)" fontSize={10.24} fontWeight={600}
            fontFamily="var(--font-body)" dy={12} opacity={0.8}>{payload?.value}</text>
    </g>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Combined bar label — single LabelList renders either value OR lightning bolt
// ─────────────────────────────────────────────────────────────────────────────
function makeBarLabel(data: BarEntry[], showValues: boolean) {
  return function BarLabel(props: any) {
    const { x, y, width, value, index } = props;
    const item = data[index];

    // Utility-event bars: render lightning bolt icon
    if (item?.utilityEvent) {
      const cx = (x ?? 0) + (width ?? 0) / 2;
      const cy = (y ?? 0) - 10;
      return (
        <path
          d={svgPaths.p1c751900}
          transform={`translate(${cx - 7}, ${cy - 7})`}
          stroke="var(--accent)"
          strokeWidth={1.17}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      );
    }

    // Value label (only when showValues requested)
    if (showValues) {
      return (
        <text
          x={(x ?? 0) + (width ?? 0) / 2}
          y={(y ?? 0) - 4}
          textAnchor="middle"
          fill="var(--foreground)"
          fontSize={12.8}
          fontWeight={600}
          fontFamily="var(--font-body)"
        >
          {value}
        </text>
      );
    }

    return null;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Chart component
// ─────────────────────────────────────────────────────────────────────────────
interface DrillChartProps {
  data: BarEntry[];
  level: Level;
  selectedKey: string | null;
  onBarClick: (entry: BarEntry, index: number) => void;
}

function DrillChart({ data, level, selectedKey, onBarClick }: DrillChartProps) {
  const isYear    = level === 'year';
  const isMonth   = level === 'month';
  const isDay     = level === 'day';

  const chartHeight   = isDay ? 160 : 192;
  const barMarginTop  = isMonth ? 28 : 16;
  const barMarginBot  = isMonth ? 32 : isDay ? 28 : 22;
  const maxBarSize    = isDay ? 12 : isYear ? 22 : 40;
  const barGap        = isDay ? '8%' : isYear ? '18%' : '25%';

  // Show numeric value labels on month + week views; show utility markers on all non-year views
  const showValues  = isMonth || (!isYear && !isDay);
  const showLabels  = !isYear; // year view: no labels at all

  const BarLabel = useMemo(
    () => makeBarLabel(data, showValues),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, showValues],
  );

  const customAxisTick = isMonth
    ? (props: any) => <WeekAxisTick {...props} data={data} />
    : (props: any) => <DefaultAxisTick {...props} />;

  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <BarChart
        data={data}
        margin={{ top: barMarginTop, right: 0, left: 0, bottom: barMarginBot }}
        barCategoryGap={barGap}
        onClick={(e) => {
          if (e?.activePayload?.[0]) {
            const idx = e.activeTooltipIndex ?? 0;
            onBarClick(data[idx], idx);
          }
        }}
      >
        <YAxis hide domain={[0, 100]} />
        {[25, 50, 75, 100].map(v => (
          <ReferenceLine
            key={v}
            y={v}
            stroke="var(--chart-5)"
            strokeWidth={0.5}
            strokeOpacity={0.7}
          />
        ))}
        <XAxis
          dataKey="key"
          axisLine={false}
          tickLine={false}
          tick={customAxisTick as any}
          interval={isDay ? 3 : 0}
          height={barMarginBot}
        />
        <Bar
          dataKey="value"
          radius={[4, 4, 0, 0]}
          maxBarSize={maxBarSize}
          cursor={level !== 'day' ? 'pointer' : 'default'}
          isAnimationActive={true}
          animationDuration={300}
        >
          {data.map((entry, i) => (
            <Cell
              key={`cell-${entry.key}-${i}`}
              fill={selectedKey === entry.key ? 'var(--primary)' : 'var(--chart-1)'}
            />
          ))}

          {/* Pass BarLabel as a component reference to avoid recharts key conflicts */}
          {showLabels && <LabelList content={BarLabel} />}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EnergyUsagePage
// ─────────────────────────────────────────────────────────────────────────────
export default function EnergyUsagePage() {
  const navigate = useNavigate();

  // Drill-down state
  const [year,     setYear]     = useState(2026);
  const [level,    setLevel]    = useState<Level>('year');
  const [monthIdx, setMonthIdx] = useState<number | null>(null);   // 0-11
  const [weekIdx,  setWeekIdx]  = useState<number | null>(null);   // 0-3
  const [dayKey,   setDayKey]   = useState<string | null>(null);   // e.g. '01'
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  // Derived data
  const monthKey = monthIdx !== null ? MONTHS_SHORT[monthIdx] : null;

  const currentData = useMemo<BarEntry[]>(() => {
    if (level === 'year') return YEAR_DATA[year] ?? YEAR_DATA[2026];
    if (level === 'month' && monthKey) return MONTH_DATA[monthKey] ?? [];
    if (level === 'week'  && monthKey && weekIdx !== null) return getWeekData(monthKey, weekIdx);
    if (level === 'day'   && monthKey && weekIdx !== null && dayKey) return getDayData(monthKey, weekIdx, dayKey);
    return [];
  }, [level, year, monthKey, weekIdx, dayKey]);

  // Period label (for navigator row)
  const periodLabel = useMemo(() => {
    if (level === 'year')  return String(year);
    if (level === 'month') return monthIdx !== null ? MONTHS_FULL[monthIdx] : '';
    if (level === 'week')  return weekIdx !== null ? `Week ${weekIdx + 1}` : '';
    if (level === 'day') {
      if (monthIdx !== null && weekIdx !== null && dayKey) {
        const d = parseInt(dayKey);
        return `${MONTHS_FULL[monthIdx]} ${d}`;
      }
      return '';
    }
    return '';
  }, [level, year, monthIdx, weekIdx, dayKey]);

  // Chart title (shown below period nav)
  const chartTitle = useMemo(() => {
    if (level === 'year')  return String(year);
    if (level === 'month') return monthIdx !== null ? `${MONTHS_FULL[monthIdx]} ${year}` : '';
    if (level === 'week')  return monthIdx !== null ? `${MONTHS_FULL[monthIdx]} ${year}` : '';
    if (level === 'day') {
      if (monthIdx !== null && dayKey) return `${MONTHS_FULL[monthIdx]} ${parseInt(dayKey)} ${year}`;
      return '';
    }
    return '';
  }, [level, year, monthIdx, weekIdx, dayKey]);

  // Hint banner text
  const hintText = useMemo(() => {
    if (level === 'year')  return 'Tap a month to see weekly breakdown ↓';
    if (level === 'month') return 'Tap a week to see daily breakdown ↓';
    if (level === 'week')  return 'Tap a day to see hourly breakdown ↓';
    return 'Hourly data — deepest level';
  }, [level]);

  // Navigation arrows
  const canGoPrev = useMemo(() => {
    if (level === 'year')  return year > 2020;
    if (level === 'month') return monthIdx !== null && (monthIdx > 0 || year > 2020);
    if (level === 'week')  return weekIdx !== null && weekIdx > 0;
    if (level === 'day')   return false; // disable day shift for simplicity
    return false;
  }, [level, year, monthIdx, weekIdx]);

  const canGoNext = useMemo(() => {
    if (level === 'year')  return year < 2030;
    if (level === 'month') return monthIdx !== null && monthIdx < 11;
    if (level === 'week') {
      if (monthIdx === null || weekIdx === null) return false;
      const maxWeeks = (MONTH_DATA[MONTHS_SHORT[monthIdx]] ?? []).length - 1;
      return weekIdx < maxWeeks;
    }
    return false;
  }, [level, year, monthIdx, weekIdx]);

  const navigatePeriod = useCallback((dir: -1 | 1) => {
    setSelectedKey(null);
    if (level === 'year') {
      setYear(y => y + dir);
    } else if (level === 'month' && monthIdx !== null) {
      const next = monthIdx + dir;
      if (next < 0) { setYear(y => y - 1); setMonthIdx(11); }
      else if (next > 11) { setYear(y => y + 1); setMonthIdx(0); }
      else setMonthIdx(next);
    } else if (level === 'week' && weekIdx !== null) {
      setWeekIdx(w => Math.max(0, (w ?? 0) + dir));
    }
  }, [level, monthIdx, weekIdx]);

  // Drill down on bar click
  const handleBarClick = useCallback((entry: BarEntry, _idx: number) => {
    if (level === 'year') {
      const mIdx = MONTHS_SHORT.indexOf(entry.key);
      if (mIdx >= 0) { setMonthIdx(mIdx); setLevel('month'); setSelectedKey(null); }
    } else if (level === 'month') {
      const wIdx = parseInt(entry.key.replace('w', ''));
      setWeekIdx(wIdx); setLevel('week'); setSelectedKey(null);
    } else if (level === 'week') {
      setDayKey(entry.key); setLevel('day'); setSelectedKey(null);
    }
    setSelectedKey(entry.key);
  }, [level]);

  // Jump to level via tabs / breadcrumb
  const jumpToLevel = useCallback((target: Level) => {
    if (target === 'year')  { setLevel('year');  setMonthIdx(null); setWeekIdx(null); setDayKey(null); }
    if (target === 'month') { setLevel('month'); setWeekIdx(null);  setDayKey(null); }
    if (target === 'week')  { setLevel('week');  setDayKey(null); }
    if (target === 'day')   { setLevel('day'); }
    setSelectedKey(null);
  }, []);

  // All four tabs always visible — only which is active changes
  const LEVEL_ORDER: Level[] = ['year', 'month', 'week', 'day'];
  const currentLevelIdx = LEVEL_ORDER.indexOf(level);
  // A tab is "unlocked" (clickable) if we have the state for it
  const tabUnlocked = (tab: Level) => {
    if (tab === 'year')  return true;
    if (tab === 'month') return monthIdx !== null;
    if (tab === 'week')  return weekIdx !== null;
    if (tab === 'day')   return dayKey !== null;
    return false;
  };

  // Breadcrumb items
  const breadcrumbs = useMemo(() => {
    const items: { label: string; level: Level }[] = [{ label: String(year), level: 'year' }];
    if (monthIdx !== null && level !== 'year') {
      items.push({ label: MONTHS_FULL[monthIdx], level: 'month' });
    }
    if (weekIdx !== null && (level === 'week' || level === 'day')) {
      items.push({ label: `Week ${weekIdx + 1}`, level: 'week' });
    }
    if (dayKey && level === 'day' && monthIdx !== null) {
      items.push({ label: `${String(monthIdx + 1).padStart(2,'0')}/${dayKey}/${year}`, level: 'day' });
    }
    return items;
  }, [year, monthIdx, weekIdx, dayKey, level]);

  const kwhTotal = useMemo(() => getKwhLabel(currentData), [currentData]);

  // ── Y-axis label positions (matched to recharts domain 0-100) ────────────
  // We render these manually outside recharts for exact Figma alignment
  const isDay = level === 'day';
  const chartH = isDay ? 160 : 192;
  const topM   = (level === 'month') ? 28 : 16;
  const botM   = (level === 'month') ? 32 : isDay ? 28 : 22;
  const barH   = chartH - topM - botM;  // pixel height of the bar area

  const yLabelPositions = [100, 75, 50, 25].map((v) => ({
    value: v,
    top: topM + barH * (1 - v / 100),
  }));

  return (
    <div style={{ background: 'var(--background)', minHeight: '100%', fontFamily: 'var(--font-body)' }}>

      {/* ── App Header ── */}
      <div
        className="sticky top-0 z-10 px-5 py-4 flex items-center gap-3"
        style={{ background: 'var(--panel)', borderBottom: '1px solid var(--chart-5)' }}
      >
        <button onClick={() => navigate(-1)} style={{ color: 'var(--foreground)' }}>
          <ArrowLeft size={22} strokeWidth={2} />
        </button>
        <div className="flex-1 text-center pr-6">
          <p className="font-semibold text-base" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}>
            Energy Usage
          </p>
          <button className="flex items-center gap-1 justify-center mx-auto mt-0.5">
            <span className="text-sm" style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}>Main Home</span>
            <ChevronDown size={14} style={{ color: 'var(--accent)' }} />
          </button>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4 pb-6">

        {/* ── Usage Summary ── */}
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold" style={{ color: 'var(--foreground)', fontSize: '2.5rem', fontFamily: 'var(--font-body)' }}>
              {kwhTotal}
            </span>
            <span className="text-base opacity-70" style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}>
              {level === 'year' ? 'this year' : level === 'month' ? 'this month' : level === 'week' ? 'this week' : 'today'}
            </span>
          </div>
          <div
            className="inline-flex items-center gap-1.5 mt-2 rounded-full px-3 py-1"
            style={{ background: 'var(--panel)', border: '1px solid var(--primary)' }}
          >
            <TrendingUp size={13} style={{ color: 'var(--accent)' }} strokeWidth={2} />
            <span className="text-xs font-semibold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)' }}>
              12% higher than last {level === 'year' ? 'year' : level === 'month' ? 'month' : level === 'week' ? 'week' : 'day'}
            </span>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(119,149,207,0.25)' }} />

        {/* ── Chart Section ── */}
        <div>

          {/* Breadcrumb */}
          {breadcrumbs.length > 0 && (
            <div className="flex items-center gap-1 mb-3 flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.level} className="flex items-center gap-1">
                  {i > 0 && (
                    <span className="text-[12.8px]" style={{ color: 'var(--chart-5)', fontFamily: 'var(--font-body)' }}>›</span>
                  )}
                  <button
                    onClick={() => i < breadcrumbs.length - 1 && jumpToLevel(crumb.level)}
                    className="text-[12.8px]"
                    style={{
                      color: i < breadcrumbs.length - 1 ? 'var(--primary)' : 'var(--accent)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                    }}
                  >
                    {crumb.label}
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Tab selector: Year / Month / Week / Day — all 4 always shown */}
          <div className="flex items-center gap-2 mb-4">
            {LEVEL_ORDER.map((tab) => {
              const isActive = tab === level;
              const unlocked = tabUnlocked(tab);
              return (
                <button
                  key={tab}
                  onClick={() => unlocked && jumpToLevel(tab)}
                  disabled={!unlocked}
                  className="h-9 px-3 rounded-lg font-semibold text-[12.8px] relative"
                  style={{
                    background: isActive ? 'var(--panel-highlight)' : 'var(--surface)',
                    border: isActive ? '1px solid var(--chart-5)' : '1px solid var(--border)',
                    color: isActive ? 'var(--foreground)' : 'var(--accent-foreground)',
                    fontFamily: 'var(--font-body)',
                    textTransform: 'capitalize',
                    opacity: !unlocked && !isActive ? 0.4 : 1,
                    cursor: unlocked ? 'pointer' : 'default',
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              );
            })}
          </div>

          {/* Period navigator: ← [Label] → */}
          <div className="flex items-center justify-center gap-12 mb-1">
            <button
              onClick={() => navigatePeriod(-1)}
              disabled={!canGoPrev}
              className="size-6 flex items-center justify-center"
            >
              <ChevronLeft size={24} style={{ color: canGoPrev ? 'var(--primary)' : '#888888' }} strokeWidth={1.8} />
            </button>
            <span
              className="font-semibold"
              style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)', fontSize: '16px', minWidth: '80px', textAlign: 'center' }}
            >
              {periodLabel}
            </span>
            <button
              onClick={() => navigatePeriod(1)}
              disabled={!canGoNext}
              className="size-6 flex items-center justify-center"
            >
              <ChevronRight size={24} style={{ color: canGoNext ? 'var(--primary)' : '#888888' }} strokeWidth={1.8} />
            </button>
          </div>

          {/* Chart title */}
          <p
            className="text-center font-semibold text-[12.8px] mb-3"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
          >
            {chartTitle}
          </p>

          {/* Hint banner */}
          <div
            className="rounded-lg flex items-center justify-center py-[6px] px-4 mb-3"
            style={{
              background: 'var(--panel-highlight)',
              border: '1px solid var(--chart-5)',
            }}
          >
            <span
              className="text-center font-semibold"
              style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '10.24px' }}
            >
              {hintText}
            </span>
          </div>

          {/* Chart area: Y-axis labels + recharts chart */}
          <div className="flex">
            {/* Y-axis labels — manually positioned to match recharts grid lines */}
            <div className="relative flex-none" style={{ width: 28, height: chartH }}>
              {yLabelPositions.map(({ value, top }) => (
                <span
                  key={value}
                  className="absolute right-0 italic"
                  style={{
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    top: top - 6,
                    lineHeight: 1,
                    opacity: 0.8,
                  }}
                >
                  {value}
                </span>
              ))}
            </div>

            {/* Bar chart */}
            <div className="flex-1 min-w-0">
              <DrillChart
                data={currentData}
                level={level}
                selectedKey={selectedKey}
                onBarClick={handleBarClick}
              />
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-1 pl-7">
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-sm" style={{ background: 'var(--chart-1)' }} />
              <span className="text-[13px] font-medium" style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)' }}>
                Usage
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Minus size={14} style={{ color: 'var(--accent)' }} strokeWidth={1.5} />
              <span className="text-[13px] font-medium" style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)' }}>
                Utility Event
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}