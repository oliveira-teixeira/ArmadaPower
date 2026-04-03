import svgPaths from "./svg-bt10xoihaw";

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

function HorizontalBorder() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[18px] pt-[16px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] opacity-80 relative shrink-0 text-[#cad6ec] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Alerts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f7f9fc] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[18px] pt-[16px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function Svg2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon1() {
  return (
    <div className="relative shrink-0" data-name="iconify-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <Svg2 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#0a1a2e] relative rounded-[12px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] h-full items-center px-[13px] py-[9px] relative">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[13px] w-[68.91px]">
            <p className="leading-[normal]">All Devices</p>
          </div>
          <IconifyIcon1 />
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon2() {
  return (
    <div className="relative shrink-0" data-name="iconify-icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <Svg3 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#0a1a2e] relative rounded-[12px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.99px] h-full items-center px-[13px] py-[9px] relative">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[13px] w-[61.08px]">
            <p className="leading-[normal]">All Events</p>
          </div>
          <IconifyIcon2 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-[#0a111d] content-stretch flex gap-[12px] h-[67px] items-start pb-[17px] pt-[16px] px-[16px] relative shrink-0 w-[375px]" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16px] top-[24px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Today</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pec97bc0} id="Vector" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Background">
      <Svg4 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background />
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] min-h-[24px] min-w-px relative w-[2px]" data-name="Margin">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] pt-[8px] relative size-full">
          <div className="bg-[#cad6ec] flex-[1_0_0] min-h-[16px] min-w-px w-[2px]" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin2 />
      <Margin3 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Sleep Mode activated</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 12.8333">
          <g id="Group">
            <path d={svgPaths.p1164f480} id="Vector" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p163a9380} id="Vector_2" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p23bef880} id="Vector_3" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Group />
    </div>
  );
}

function IconifyIcon3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon3 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Triggered by Evening Routine</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] w-[131px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Apt 4B • 10:00 PM</p>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[93.5px] items-start left-0 px-[16px] right-0 top-[48px]" data-name="Container">
      <Margin1 />
      <HorizontalBorder2 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1c1ff8c0} id="Vector" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Background">
      <Svg6 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="flex-[1_0_0] min-h-[24px] min-w-px relative w-[2px]" data-name="Margin">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] pt-[8px] relative size-full">
          <div className="flex-[1_0_0] min-h-[16px] min-w-px w-[2px]" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin5 />
      <Margin6 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Temperature set to 72°</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_8.33%_8.33%_7.89%]" data-name="Group">
      <div className="absolute inset-[-5%_-4.97%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8949 12.8333">
          <g id="Group">
            <path d={svgPaths.p2d9c1800} id="Vector" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p1cb65f00} id="Vector_2" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function IconifyIcon4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg7 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon4 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Manually adjusted</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] w-[199.48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Living Room Thermostat • 6:30 PM</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[92.5px] items-start left-0 px-[16px] right-0 top-[141.5px]" data-name="Container">
      <Margin4 />
      <Container14 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[242px] relative shrink-0 w-[375px]" data-name="Container">
      <Container6 />
      <Container7 />
      <Container12 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16px] top-[24px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Yesterday</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
          <g id="Group">
            <path d={svgPaths.p22aa1d80} id="Vector" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p28f633c0} id="Vector_2" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group2 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Background">
      <Svg8 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background2 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="flex-[1_0_0] min-h-[24px] min-w-px relative w-[2px]" data-name="Margin">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] pt-[8px] relative size-full">
          <div className="bg-[#cad6ec] flex-[1_0_0] min-h-[16px] min-w-px w-[2px]" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin8 />
      <Margin9 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Morning Schedule active</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%_8.33%_8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5%_-5.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 12.8333">
          <g id="Group">
            <path d={svgPaths.pdf76800} id="Vector" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p1d9e0e80} id="Vector_2" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Group3 />
    </div>
  );
}

function IconifyIcon5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg9 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon5 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Scheduled change</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] w-[200.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Living Room Thermostat • 8:00 AM</p>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[93.5px] items-start left-0 px-[16px] right-0 top-[48px]" data-name="Container">
      <Margin7 />
      <HorizontalBorder3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.32%_8.32%_8.34%_8.34%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6674 14.6676">
          <g id="Group">
            <path d={svgPaths.p3eb07900} id="Vector" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p3e82d600} id="Vector_2" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group4 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Background">
      <Svg10 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background3 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="flex-[1_0_0] min-h-[24px] min-w-px relative w-[2px]" data-name="Margin">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] pt-[8px] relative size-full">
          <div className="flex-[1_0_0] min-h-[16px] min-w-px w-[2px]" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin11 />
      <Margin12 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Energy saving event ended</p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p1c751900} id="Vector" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg11 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon6 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Set by utility program</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] w-[192.41px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Water Heater • 7:15 AM</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex h-[92.5px] items-start left-0 px-[16px] right-0 top-[141.5px]" data-name="Container">
      <Margin10 />
      <Container27 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[242px] relative shrink-0 w-[375px]" data-name="Container">
      <Container19 />
      <Container20 />
      <Container25 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16px] top-[24px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Earlier</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Background">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-3.75%_-4.69%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 14.3332">
              <g id="Vector">
                <path d={svgPaths.p3509d900} stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p1fff3000} stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background4 />
    </div>
  );
}

function Margin15() {
  return (
    <div className="flex-[1_0_0] min-h-[24px] min-w-px relative w-[2px]" data-name="Margin">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] pt-[8px] relative size-full">
          <div className="bg-[#cad6ec] flex-[1_0_0] min-h-[16px] min-w-px w-[2px]" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin14 />
      <Margin15 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Away Mode activated</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 12.8332">
          <g id="Group">
            <path d={svgPaths.p29b0df00} id="Vector" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p2d36a380} id="Vector_2" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Group5 />
    </div>
  );
}

function IconifyIcon7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg12 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon7 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Triggered by location</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] w-[168.97px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Main Home • Oct 12, 9:00 AM</p>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <Container35 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[93.5px] items-start left-0 px-[16px] right-0 top-[48px]" data-name="Container">
      <Margin13 />
      <HorizontalBorder4 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1cd032c0} id="Vector" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Background">
      <Svg13 />
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background5 />
    </div>
  );
}

function Margin18() {
  return (
    <div className="flex-[1_0_0] min-h-[24px] min-w-px relative w-[2px]" data-name="Margin">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] pt-[8px] relative size-full">
          <div className="flex-[1_0_0] min-h-[16px] min-w-px w-[2px]" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin17 />
      <Margin18 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Water heater turned on</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[8.33%_8.33%_8.33%_7.89%]" data-name="Group">
      <div className="absolute inset-[-5%_-4.97%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8949 12.8333">
          <g id="Group">
            <path d={svgPaths.p2d9c1800} id="Vector" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p1cb65f00} id="Vector_2" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Group6 />
    </div>
  );
}

function IconifyIcon8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg14 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon8 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Manually adjusted</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] w-[235.63px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Water Heater • Oct 11, 8:45 PM</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container41 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex h-[92.5px] items-start left-0 px-[16px] right-0 top-[141.5px]" data-name="Container">
      <Margin16 />
      <Container40 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[242px] relative shrink-0 w-[375px]" data-name="Container">
      <Container32 />
      <Container33 />
      <Container38 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full z-[2]" data-name="Container">
      <BackgroundHorizontalBorder1 />
      <Container5 />
      <Container18 />
      <Container31 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.26%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.0005">
          <g id="Group">
            <path d={svgPaths.p175d0180} id="Vector" stroke="var(--stroke-0, #4B75C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pe495300} id="Vector_2" stroke="var(--stroke-0, #4B75C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group7 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[31.08px]">
        <p className="leading-[normal]">Home</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group">
            <path d={svgPaths.p27f4d000} id="Vector" stroke="var(--stroke-0, #4B75C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pd679bc0} id="Vector_2" stroke="var(--stroke-0, #4B75C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p34382a00} id="Vector_3" stroke="var(--stroke-0, #4B75C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pe7ead60} id="Vector_4" stroke="var(--stroke-0, #4B75C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group8 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg16 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[42.03px]">
        <p className="leading-[normal]">Devices</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p246cef00} id="Vector" stroke="var(--stroke-0, #4B75C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg17 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[35.88px]">
        <p className="leading-[normal]">Modes</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[8.41%_12.68%]" data-name="Group">
      <div className="absolute inset-[-5.01%_-5.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9133 21.9641">
          <g id="Group">
            <path d={svgPaths.p154b8000} id="Vector" stroke="var(--stroke-0, #4B75C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1666fc30} id="Vector_2" stroke="var(--stroke-0, #4B75C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group9 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg18 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">Settings</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

export default function ActivityHistory() {
  return (
    <div className="bg-[#0a111d] content-stretch flex flex-col isolate items-start relative size-full" data-name="Activity (History)">
      <Header />
      <BackgroundHorizontalBorder />
      <Container4 />
      <div className="bg-[#f7f9fc] content-stretch flex gap-[21.8px] h-[84px] items-start pb-[24px] pl-[26.88px] pr-[26.87px] pt-[13px] relative shrink-0 w-[375px] z-[1]" data-name="Nav">
        <div aria-hidden="true" className="absolute border-[#cad6ec] border-solid border-t inset-0 pointer-events-none" />
        <Container44 />
        <Container47 />
        <Container50 />
        <Container53 />
      </div>
    </div>
  );
}