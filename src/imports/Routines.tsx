import svgPaths from "./svg-i00prci4ny";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Lucide Icons">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d="M8 15L1 8M1 8L8 1M1 8H15" id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#f7f9fc] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Modes</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#192947] content-stretch flex flex-col items-center px-[24px] py-[16px] relative shrink-0 w-[375px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#7695cf] border-b border-solid inset-0 pointer-events-none" />
      <Frame />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[14px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] opacity-80 relative shrink-0 text-[#cad6ec] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Modes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[14px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Routines</p>
          </div>
          <div className="absolute bg-[#f7f9fc] bottom-[-1px] h-[2px] left-0 right-[-0.83px]" data-name="Horizontal Divider" />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex h-[49px] items-start justify-center pb-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <Container />
      <Container1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] px-[16px] relative shrink-0 w-[375px]" data-name="Margin">
      <HorizontalBorder />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6665">
          <g id="Group">
            <path d={svgPaths.p37788100} id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1d886720} id="Vector_2" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Ap 4B - 123 Maple street, S...</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#183d64] content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0" data-name="Background">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[16px] relative shrink-0 w-full">
      <Background2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[16px] w-[134.14px]">
        <p className="leading-[normal]">Morning Warmup</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#0a66ff] h-[24px] relative rounded-[12px] shrink-0 w-[44px]" data-name="Background">
      <div className="absolute bg-white left-[22px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)] size-[20px] top-[2px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading />
        <Background3 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
          <g id="Group">
            <path d={svgPaths.p858e500} id="Vector" stroke="var(--stroke-0, #0A66FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p193b5b80} id="Vector_2" stroke="var(--stroke-0, #0A66FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[20.58px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[32px] justify-center leading-[0] relative shrink-0 text-[#192947] text-[12.8px] w-[73.92px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">6:00 AM</p>
        <p className="leading-[20px]">(Weekdays)</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1902a780} id="Vector" stroke="var(--stroke-0, #6B7785)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
          <g id="Group">
            <path d={svgPaths.p22aa1d80} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p28f633c0} id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#192947] text-[12.8px] w-[90.75px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Morning Mode</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#cad6ec] relative rounded-[6px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Container6 />
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p335b6880} id="Vector" stroke="var(--stroke-0, #065A25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3a143880} id="Vector_2" stroke="var(--stroke-0, #065A25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Group3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[12px] w-[142.2px]">
        <p className="leading-[normal]">Last run: Today, 6:00 AM</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative w-full">
        <Container5 />
        <Background4 />
        <Container13 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[16px] w-[95.72px]">
        <p className="leading-[normal]">Leave Home</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#0a66ff] h-[24px] relative rounded-[12px] shrink-0 w-[44px]" data-name="Background">
      <div className="absolute bg-white left-[22px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)] size-[20px] top-[2px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading1 />
        <Background5 />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[12.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.56%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 13.3333">
          <g id="Group">
            <path d={svgPaths.p3d39200} id="Vector" stroke="var(--stroke-0, #0A66FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p28cc9800} id="Vector_2" stroke="var(--stroke-0, #0A66FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[36.02px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[32px] justify-center leading-[0] relative shrink-0 text-[#192947] text-[12.8px] w-[58.48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Everyone</p>
        <p className="leading-[20px]">leaves</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1902a780} id="Vector" stroke="var(--stroke-0, #6B7785)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.33%_8.33%_16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.56%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 13.3333">
          <g id="Group">
            <path d={svgPaths.p568cbc0} id="Vector" stroke="var(--stroke-0, #4B75C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.pc5f3680} id="Vector_2" stroke="var(--stroke-0, #4B75C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group5 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#192947] text-[12.8px] w-[72.63px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Away Mode</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#cad6ec] relative rounded-[6px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Container17 />
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p2ca5c480} id="Vector" stroke="var(--stroke-0, #D29F00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#d29f00] text-[12px] w-[208.59px]">
        <p className="leading-[normal]">May conflict with Peak Energy Event</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative w-full">
        <Container16 />
        <Background6 />
        <Container24 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[16px] w-[121.09px]">
        <p className="leading-[normal]">Nightly Savings</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] h-[24px] relative rounded-[12px] shrink-0 w-[44px]" data-name="Overlay">
      <div className="absolute bg-white left-[2px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)] size-[20px] top-[2px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading2 />
        <Overlay />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
          <g id="Group">
            <path d={svgPaths.p858e500} id="Vector" stroke="var(--stroke-0, #0A66FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p193b5b80} id="Vector_2" stroke="var(--stroke-0, #0A66FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group6 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[36.55px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[13px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">10:30 PM</p>
        <p className="leading-[normal]">(Daily)</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1902a780} id="Vector" stroke="var(--stroke-0, #6B7785)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pec97bc0} id="Vector" stroke="var(--stroke-0, #0A66FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Sleep Mode</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#cad6ec] opacity-60 relative rounded-[6px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <Container28 />
          <Container31 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f7f9fc] min-h-[161px] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start min-h-[inherit] p-[17px] relative w-full">
        <Container27 />
        <Background7 />
      </div>
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-name="Wrap">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create new routine
      </p>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[100px] pt-[16px] px-[20px] relative shrink-0 w-[375px]" data-name="Main">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <div className="bg-[#4b75c0] min-w-[80px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons / plus">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <div className="absolute inset-[-5.36%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
                    <path d={svgPaths.p1023d7e0} id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <Wrap />
          </div>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[812px] pt-[36px] relative shrink-0" data-name="Background">
      <Frame1 />
      <Main />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#0a111d] content-stretch flex flex-col items-start min-h-[812px] relative shrink-0" data-name="Background">
      <Margin />
      <Background1 />
    </div>
  );
}

export default function Routines() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Routines">
      <Header />
      <Background />
    </div>
  );
}