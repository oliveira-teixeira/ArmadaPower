import svgPaths from "./svg-hfl0p687yw";

function Svg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <button className="absolute block cursor-pointer inset-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d="M8 15L1 8L8 1M15 8H1" id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function Container() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] w-[59.55px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Activity</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Apt 4B</p>
      </div>
      <IconifyIcon />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <Container2 />
        <Margin />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#183d64] relative shrink-0 w-full z-[4]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[13px] pl-[16px] pr-[16.02px] pt-[12px] relative w-full">
          <Container />
          <Container1 />
          <div className="rounded-[6px] shrink-0 size-[40px]" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#002460] relative rounded-[32px] shrink-0 size-[16px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[6px] py-[2px] relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-center text-white w-[4.75px]">
          <p className="leading-[11px]">1</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f7f9fc] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center pb-[18px] pt-[16px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Alerts</p>
          </div>
          <Background />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="HorizontalBorder">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[16px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] opacity-80 relative shrink-0 text-[#cad6ec] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">History</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#183d64] content-stretch flex h-[55px] items-start justify-center pb-px relative shrink-0 w-full z-[3]" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <HorizontalBorder />
      <HorizontalBorder1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[24px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">Active Alerts</p>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_10523)" id="SVG">
          <path d={svgPaths.pfc1fb80} id="Vector" stroke="var(--stroke-0, #940505)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_10523">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[#fee1e1] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Overlay">
      <Svg2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[15px] w-full">
        <p className="leading-[normal]">Water heater is offline</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[14px] w-full">
        <p className="leading-[19.6px] mb-0">We lost connection to your device and</p>
        <p className="leading-[19.6px]">cannot control it.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.295px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
        <Overlay />
        <Container7 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">Basement • Water Heater</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">12 min ago</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex h-[28px] items-start justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#fb8383] border-solid border-t inset-0 pointer-events-none" />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative w-full">
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8.01px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0e142c] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">Troubleshoot</p>
        </div>
      </div>
      <div className="bg-[#4b75c0] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[152px]" data-name="button">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">View Device</p>
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative w-full">
        <Container12 />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[#fff5f5] content-stretch flex flex-col items-start p-[17px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Overlay+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#fb8383] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.02)]" />
      <Container6 />
      <Margin1 />
      <Margin2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_10526)" id="SVG">
          <path d={svgPaths.p2b848980} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_10526">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[#fff8e0] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Overlay">
      <Svg3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[15px] w-full">
        <p className="leading-[normal]">Utility event starting soon</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[14px] w-full">
        <p className="leading-[19.6px] mb-0">Your utility provider will limit energy</p>
        <p className="leading-[19.6px]">usage from 2:00 PM to 6:00 PM.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.295px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
        <Overlay1 />
        <Container14 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[12px] w-[65.11px]">
          <p className="leading-[normal]">Main Home</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[12px] w-[63.92px]">
          <p className="leading-[normal]">45 min ago</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex h-[28px] items-start justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ffe07e] border-solid border-t inset-0 pointer-events-none" />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative w-full">
        <HorizontalBorder3 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0e142c] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">Opt-out</p>
        </div>
      </div>
      <div className="bg-[#4b75c0] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[152px]" data-name="button">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">Review</p>
        </div>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative w-full">
        <Container19 />
      </div>
    </div>
  );
}

function OverlayBorderShadow1() {
  return (
    <div className="bg-[#fffdf5] content-stretch flex flex-col items-start pb-[17px] pt-[29px] px-[17px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Overlay+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#604800] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.02)]" />
      <Container13 />
      <Margin3 />
      <Margin4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[24px] px-[16px] relative w-full">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">Recent Alerts</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.32%_8.32%_8.34%_8.34%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3343 18.3345">
          <g id="Group">
            <path d={svgPaths.p251f8d00} id="Vector" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p57cf880} id="Vector_2" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Overlay">
      <Svg4 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[15px] w-full">
        <p className="leading-[normal]">Sensor is back online</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[14px] w-full">
        <p className="leading-[19.6px] mb-0">The living room temperature sensor is</p>
        <p className="leading-[19.6px]">back online.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.295px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">
        <Overlay2 />
        <Container22 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[12px] w-[123.52px]">
          <p className="leading-[normal]">Living Room • Sensor</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[12px] w-[57.2px]">
          <p className="leading-[normal]">Yesterday</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="content-stretch flex h-[28px] items-start justify-between pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-solid border-t inset-0 pointer-events-none" />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative w-full">
        <HorizontalBorder4 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#f7f9fc] content-stretch flex flex-col items-start pb-[17.01px] pt-[17px] px-[17px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.02)]" />
      <Container21 />
      <Margin5 />
    </div>
  );
}

function AlertsTabContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center pb-[11.99px] relative shrink-0 w-full" data-name="ALERTS TAB CONTENT">
      <Container5 />
      <OverlayBorderShadow />
      <OverlayBorderShadow1 />
      <Container20 />
      <BackgroundBorderShadow />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[24px] relative shrink-0 w-full z-[2]" data-name="Container">
      <AlertsTabContent />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.26%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.0005">
          <g id="Group">
            <path d={svgPaths.p175d0180} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pe495300} id="Vector_2" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Home</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-full opacity-60 relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group">
            <path d={svgPaths.p27f4d000} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pd679bc0} id="Vector_2" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p34382a00} id="Vector_3" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pe7ead60} id="Vector_4" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Devices</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-full opacity-60 relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p246cef00} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Modes</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-full opacity-60 relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.41%_12.68%]" data-name="Group">
      <div className="absolute inset-[-5.01%_-5.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9133 21.9641">
          <g id="Group">
            <path d={svgPaths.p154b8000} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1666fc30} id="Vector_2" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group3 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-full opacity-60 relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-[#f7f9fc] content-stretch flex gap-[16px] h-[84px] items-center justify-center pb-[24px] pt-[17px] px-[24px] relative shrink-0 w-[375px] z-[1]" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-solid border-t inset-0 pointer-events-none" />
      <Container27 />
      <Container30 />
      <Container33 />
      <Container36 />
    </div>
  );
}

export default function Activity() {
  return (
    <div className="bg-[#0a111d] content-stretch flex flex-col isolate items-start relative size-full" data-name="Activity">
      <Header />
      <BackgroundHorizontalBorder />
      <Container4 />
      <Nav />
    </div>
  );
}