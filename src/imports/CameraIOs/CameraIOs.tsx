import svgPaths from "./svg-27x8skl9fy";
import imgCnh from "./326694bda69a77c8dc191179450e5b7ab0fa1545.png";

function TopBlackArea() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Top black area">
      <div className="absolute bg-black h-[40px] left-0 top-[59px] w-[375px]" data-name="BASE" />
      <div className="absolute bg-black h-[59px] left-0 top-0 w-[375px]" data-name="STATUS BAR HIDDEN" />
    </div>
  );
}

function Cnh() {
  return (
    <div className="absolute h-[557px] left-0 shadow-[0px_0px_0px_0px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[375px]" data-name="CNH">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[117.79%] left-[-113.97%] max-w-none top-[-17.81%] w-[320.51%]" src={imgCnh} />
        </div>
      </div>
    </div>
  );
}

function Tips() {
  return <div className="absolute h-[30px] left-[16px] top-[95px] w-[343px]" data-name="tips" />;
}

function Frame1() {
  return (
    <div className="absolute h-[557px] left-0 top-[99px] w-[375px]">
      <Cnh />
      <Tips />
      <div className="absolute bg-white h-[2px] left-[309px] rounded-[2px] top-[168px] w-[40px]" />
      <div className="absolute flex h-[40px] items-center justify-center left-[347px] top-[169px] w-[2px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-white h-[2px] w-[40px]" />
        </div>
      </div>
      <div className="absolute bg-white h-[2px] left-[309px] rounded-[2px] top-[384px] w-[40px]" />
      <div className="absolute flex h-[40px] items-center justify-center left-[347px] top-[345px] w-[2px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-white h-[2px] w-[40px]" />
        </div>
      </div>
      <div className="absolute bg-white h-[2px] left-[26px] rounded-[2px] top-[168px] w-[40px]" />
      <div className="absolute flex h-[40px] items-center justify-center left-[26px] top-[169px] w-[2px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-white h-[2px] w-[40px]" />
        </div>
      </div>
      <div className="absolute bg-white h-[2px] left-[26px] rounded-[2px] top-[384px] w-[40px]" />
      <div className="absolute flex h-[40px] items-center justify-center left-[26px] top-[345px] w-[2px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-white h-[2px] w-[40px]" />
        </div>
      </div>
    </div>
  );
}

function MdiMountain() {
  return (
    <div className="absolute left-[32.8px] size-[22.4px] top-[24.8px]" data-name="mdi:mountain">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4 22.4">
        <g id="mdi:mountain">
          <path d={svgPaths.p3f9a4800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ThumbNail() {
  return (
    <div className="absolute contents left-[16px] top-[8px]" data-name="Thumb nail">
      <MdiMountain />
      <div className="absolute bg-[rgba(217,217,217,0.15)] left-[16px] rounded-[8px] size-[56px] top-[8px]" />
    </div>
  );
}

function Shutter() {
  return (
    <div className="absolute left-[155.5px] size-[72px] top-0" data-name="Shutter">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="Shutter">
          <circle cx="35.9987" cy="35.9996" fill="var(--fill-0, white)" id="Ellipse 43" r="27.6667" />
          <path d={svgPaths.p1be55c40} fill="var(--fill-0, white)" id="Ellipse 44" />
        </g>
      </svg>
    </div>
  );
}

function CameraFlip() {
  return (
    <div className="absolute left-[311px] size-[48px] top-[12px]" data-name="Camera flip">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Camera flip">
          <circle cx="24" cy="24" fill="var(--fill-0, black)" fillOpacity="0.35" id="Ellipse 45" r="24" />
          <g id="flip">
            <path d={svgPaths.p1f91bf00} fill="var(--fill-0, white)" id="Ellipse 46" />
            <path d={svgPaths.p21d3b700} fill="var(--fill-0, white)" id="Polygon 1" />
          </g>
          <g id="flip_2">
            <path d={svgPaths.p7640600} fill="var(--fill-0, white)" id="Ellipse 46_2" />
            <path d={svgPaths.p1da67600} fill="var(--fill-0, white)" id="Polygon 1_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-black h-[72px] left-0 top-[656px] w-[375px]">
      <ThumbNail />
      <Shutter />
      <CameraFlip />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute h-[34px] left-0 top-0 w-[375px]" data-name="HomeIndicator">
      <div className="-translate-x-1/2 absolute bg-white bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function TabBar() {
  return (
    <div className="absolute bg-black h-[34px] left-0 top-[728px] w-[375px]" data-name="TabBar">
      <HomeIndicator />
    </div>
  );
}

function Stroke() {
  return (
    <div className="absolute left-[30px] size-[19.004px] top-[4px]" data-name="Stroke">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0044 19.0044">
        <g id="Stroke">
          <rect fill="var(--fill-0, black)" height="24.63" id="Rectangle 34" transform="rotate(-45 0 1.58838)" width="2.24631" y="1.58838" />
          <line id="Line 24" stroke="var(--stroke-0, white)" x1="0.998063" x2="17.9981" y1="0.890099" y2="17.8901" />
        </g>
      </svg>
    </div>
  );
}

function RAw() {
  return (
    <div className="absolute contents left-0 top-0" data-name="RAw">
      <div className="absolute bg-[#d9d9d9] h-[24px] left-[17px] rounded-[50px] top-px w-[44.526px]" />
      <div className="absolute bg-[#040301] h-[22px] left-[19px] rounded-[50px] top-[2px] w-[41.171px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact:Light',sans-serif] font-[350.52398681640625] h-[27px] justify-center leading-[0] left-[39.5px] text-[14px] text-center text-white top-[13.5px] w-[79px]">
        <p className="leading-[0.35]">RAW</p>
      </div>
      <Stroke />
    </div>
  );
}

function Live() {
  return (
    <div className="absolute left-[79px] size-[24px] top-[1.5px]" data-name="Live">
      <div className="absolute inset-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <g id="Live">
            <circle cx="13.5" cy="13.5" fill="var(--fill-0, black)" id="Ellipse 37" r="12" stroke="var(--stroke-0, white)" strokeDasharray="1 5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p1e856080} fill="var(--fill-0, white)" id="Ellipse 35" />
            <circle cx="13.5002" cy="13.5" fill="var(--fill-0, white)" id="Ellipse 36" r="3.9" />
            <g id="stroke">
              <line id="Line 25" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2" x1="4.30722" x2="23.8929" y1="3.23574" y2="22.8215" />
              <line id="Line 24" stroke="var(--stroke-0, white)" strokeLinecap="round" transform="matrix(0.707109 0.707105 -0.707109 0.707105 3.57651 3.23574)" x1="0.5" x2="28.3807" y1="-0.5" y2="-0.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function RawLive() {
  return (
    <div className="absolute h-[27px] left-[263px] top-[56px] w-[103px]" data-name="RAW + LIVE">
      <RAw />
      <Live />
    </div>
  );
}

function SwipeUp() {
  return (
    <div className="absolute left-[179px] size-[24px] top-[57px]" data-name="Swipe up">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Swipe up">
          <circle cx="12" cy="12" fill="var(--fill-0, #21201E)" id="Ellipse 34" r="12" />
          <g id="material-symbols:arrow-back-ios-new">
            <path d={svgPaths.p26ba800} fill="var(--fill-0, #F8F8F8)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Flash1() {
  return (
    <div className="absolute left-[16px] size-[24px] top-[59px]" data-name="Flash">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Flash">
          <circle cx="12" cy="12" fill="var(--fill-0, #9C9C9C)" id="Ellipse 32" r="12" />
          <circle cx="12.0005" cy="12.0006" fill="var(--fill-0, #050402)" id="Ellipse 33" r="10.4615" />
          <path d={svgPaths.p225d8800} fill="var(--fill-0, #F8F8F8)" id="Vector" />
          <g id="mdi:thunder" />
        </g>
      </svg>
    </div>
  );
}

function Cross() {
  return (
    <div className="absolute inset-[7.94%_90.1%_89.29%_4.5%]" data-name="cross">
      <div className="absolute inset-[-2.06%_-2.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1673 21.9433">
          <g id="cross">
            <path d={svgPaths.p36d88e00} id="Vector 7" stroke="var(--stroke-0, #040404)" strokeWidth="1.25" />
            <path d={svgPaths.p36d88e00} id="Vector 5" stroke="var(--stroke-0, #FFFEFF)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Flash() {
  return (
    <div className="absolute contents left-[16px] top-[59px]" data-name="Flash">
      <Flash1 />
      <Cross />
    </div>
  );
}

function CameraIOs1() {
  return (
    <div className="absolute h-[762px] left-0 overflow-clip top-0 w-[375px]" data-name="camera iOS">
      <TopBlackArea />
      <Frame1 />
      <Frame />
      <TabBar />
      <RawLive />
      <SwipeUp />
      <Flash />
      <div className="absolute left-[265px] size-[4px] top-[16px]" data-name="Green dot">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #2FC955)" id="Green dot" r="2" />
        </svg>
      </div>
    </div>
  );
}

function ZoomLevel() {
  return (
    <div className="absolute contents left-[147px] top-[599px]" data-name="Zoom level">
      <div className="absolute bg-[rgba(217,217,217,0.15)] h-[30px] left-[147px] rounded-[75px] top-[599px] w-[81.304px]" data-name="TRANSPARENT BG" />
      <div className="absolute left-[152.87px] size-[16.957px] top-[605.52px]" data-name="0.5X ELLIPSE">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9565 16.9565">
          <circle cx="8.47826" cy="8.47826" fill="var(--fill-0, black)" fillOpacity="0.35" id="0.5X ELLIPSE" r="8.47826" />
        </svg>
      </div>
      <div className="absolute left-[205.48px] size-[16.957px] top-[605.52px]" data-name="3X ELLIPSE">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9565 16.9565">
          <circle cx="8.47826" cy="8.47826" fill="var(--fill-0, black)" fillOpacity="0.35" id="0.5X ELLIPSE" r="8.47826" />
        </svg>
      </div>
      <div className="absolute left-[175.04px] size-[25.217px] top-[601.39px]" data-name="1X ELLIPSE">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.2174 25.2174">
          <circle cx="12.6087" cy="12.6087" fill="var(--fill-0, black)" fillOpacity="0.35" id="1X ELLIPSE" r="12.6087" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] h-[3px] justify-center leading-[0] left-[160.22px] text-[8px] text-center text-white top-[613.33px] w-[8px]">
        <p className="leading-[0.35]">.5</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] h-[3.043px] justify-center leading-[0] left-[214.07px] text-[8px] text-center text-white top-[614px] w-[7.174px]">
        <p className="leading-[0.35]">3</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] h-[8px] justify-center leading-[0] left-[187.5px] text-[#ffd50b] text-[12px] text-center top-[613px] w-[15px]">
        <p className="leading-[0.35]">1x</p>
      </div>
    </div>
  );
}

function PhotoStyles() {
  return (
    <div className="absolute font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] h-[3px] leading-[0] left-[9px] text-[10px] text-center top-[633px] w-[357px]" data-name="PHOTO STYLES">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[3px] justify-center left-[25px] text-white top-[1.5px] w-[50px]">
        <p className="leading-[0.35]">CINEMATIC</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[3px] justify-center left-[108px] text-white top-[1.5px] w-[28px]">
        <p className="leading-[0.35]">VIDEO</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[3px] justify-center left-[182px] text-[#ffd50b] top-[1.5px] w-[32px]">
        <p className="leading-[0.25]">PHOTO</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[3px] justify-center left-[264.5px] text-white top-[1.5px] w-[45px]">
        <p className="leading-[0.35]">PORTRAIT</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[3px] justify-center left-[344px] text-white top-[1.5px] w-[26px]">
        <p className="leading-[0.35]">PANO</p>
      </div>
    </div>
  );
}

export default function CameraIOs() {
  return (
    <div className="relative size-full" data-name="camera iOS">
      <CameraIOs1 />
      <ZoomLevel />
      <PhotoStyles />
    </div>
  );
}