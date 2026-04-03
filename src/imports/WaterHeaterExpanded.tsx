import svgPaths from "./svg-7llafh2ft6";

function Svg() {
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

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Water Heater</p>
      </div>
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Oakwood Residences • Unit 4B</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#2fc955] rounded-[4px] shrink-0 size-[8px]" data-name="Background" />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[15px] justify-center leading-[0] relative shrink-0 text-[#2fc955] text-[12.8px] w-[62.91px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Connected</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-[175px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative w-full">
        <Heading />
        <Container2 />
        <Margin />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#192947] relative shrink-0 w-full z-[4]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[20px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[14px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] opacity-80 relative shrink-0 text-[#cad6ec] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Overview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[14px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">History</p>
          </div>
          <div className="absolute bg-[#cad6ec] bottom-[-1px] h-[2px] left-0 right-[-0.83px]" data-name="Horizontal Divider" />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex h-[49px] items-start justify-center pb-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] px-[16px] relative shrink-0 w-[375px] z-[3]" data-name="Margin">
      <HorizontalBorder />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3ee70180} id="Vector" stroke="var(--stroke-0, #997400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#0a1a2e] text-[14px] w-[178px]">
        <p className="leading-[normal]">Hot Water Running Low</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[#0a1a2e] text-[13px] w-full whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">Based on current usage, hot water may run out soon.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal]">Estimated time to reheat: 25 minutes</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading2 />
        <Container8 />
      </div>
    </div>
  );
}

function AlertsOptionalStateExamples() {
  return (
    <div className="bg-[#ffeeb8] relative rounded-[8px] shrink-0 w-full" data-name="Alerts (Optional state examples)">
      <div aria-hidden="true" className="absolute border border-[#604800] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[12px] items-start p-[17px] relative w-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons">
        <div className="absolute inset-1/4" data-name="Vector">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <path d={svgPaths.p2e230080} id="Vector" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pabeae00} id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[14px] w-[185.47px]">
        <p className="leading-[normal]">Energy Saving Event Active</p>
      </div>
      <div className="overflow-clip shrink-0 size-[24px]" data-name="Lucide Icons" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[#f7f9fc] text-[13px] w-[248px] whitespace-pre-wrap">
        <p className="leading-[18.2px] mb-0">Heating temporarily limited by your utility provider.</p>
        <p className="leading-[18.2px] mb-0">&nbsp;</p>
        <p className="leading-[18.2px]">Ends in: 48 minutes</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[267px]" data-name="Container">
      <Heading3 />
      <Margin2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[303px]">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#183d64] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[#7695cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pl-[16px] pr-[8px] pt-[8px] relative w-full">
        <Frame1 />
        <Frame />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] relative shrink-0 text-[#d29f00] text-[39.063px] text-center w-[82.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[64px]">68%</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[15px] justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] text-center uppercase w-[72.05px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Remaining</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container14 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[70px] shrink-0 size-[140px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute bg-[#f7f9fc] inset-0 pointer-events-none rounded-[70px]" />
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[70px]" />
      <Container13 />
      <Margin4 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_37.4px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[80px] shrink-0 size-[160px]" data-name="Container">
      <BackgroundShadow />
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[184px] relative shrink-0 w-[160px] z-[2]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center leading-[0] relative size-full text-[#192947] text-center">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[20px] justify-center relative shrink-0 text-[16px] w-[43.56px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">128°F</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic opacity-70 relative shrink-0 text-[11px] whitespace-nowrap">
          <p className="leading-[normal]">Tank Temp</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center leading-[0] relative size-full text-center">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[20px] justify-center relative shrink-0 text-[#d29f00] text-[16px] w-[60.38px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">Heating</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic opacity-70 relative shrink-0 text-[#192947] text-[11px] whitespace-nowrap">
          <p className="leading-[normal]">Status</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center leading-[0] relative size-full text-[#192947] text-center">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[20px] justify-center relative shrink-0 text-[16px] w-[52.36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">25 min</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic opacity-70 relative shrink-0 text-[11px] whitespace-nowrap">
          <p className="leading-[normal]">Est. Full</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="h-[58px] relative shrink-0 w-full z-[1]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[21px] relative size-full">
        <Paragraph />
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function StatusHero() {
  return (
    <div className="bg-[#f7f9fc] content-stretch flex flex-col isolate items-center px-px py-[11px] relative rounded-[8px] shrink-0 w-full" data-name="Status Hero">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Margin3 />
      <HorizontalBorder1 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1849b500} id="Vector" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Container15 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[16px] w-[43.95px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Mode</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading1 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] self-stretch" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center py-[10px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] text-center w-[23.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Eco</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] self-stretch" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center py-[10px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] text-center w-[45.09px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Normal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#f7f9fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] self-stretch shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-name="Background+Shadow">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center py-[10px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[12.8px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Vacation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#cad6ec] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[4px] relative size-full">
          <Container16 />
          <Container17 />
          <BackgroundShadow1 />
        </div>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative w-full">
        <Background1 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0a1a2e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Bypass active</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0a1a2e] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Ends in 34 minutes</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[109px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p3a5d92f0} id="Vector" stroke="var(--stroke-0, #0A1A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ffe07e] relative rounded-[6px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <Container18 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function ModeSelector() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Mode Selector">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative w-full">
        <Heading3Margin />
        <Margin5 />
        <Background2 />
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1ba70f00} id="Vector" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Container22 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[16px] w-[59.55px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Activity</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#0a1a2e] relative rounded-[12px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[6px] relative">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[10.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">24h</p>
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#cad6ec] relative rounded-[12px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[6px] relative">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[10.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">7d</p>
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#cad6ec] relative rounded-[12px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[6px] relative">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[10.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">30d</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Background3 />
      <Background4 />
      <Background5 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative w-full">
        <Container23 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[120px] items-end justify-center pb-[21px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#a0b6de] flex-[1_0_0] h-[14.84px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Background" />
      <div className="bg-[#a0b6de] flex-[1_0_0] h-[39.59px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Background" />
      <div className="bg-[#a0b6de] flex-[1_0_0] h-[79.19px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Background" />
      <div className="bg-[#a0b6de] flex-[1_0_0] h-[39.59px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Background" />
      <div className="bg-[#a0b6de] flex-[1_0_0] h-[14.84px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Background" />
      <div className="bg-[#a0b6de] flex-[1_0_0] h-[14.84px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Background" />
      <div className="bg-[#0c69ff] flex-[1_0_0] h-[79.19px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Background" />
    </div>
  );
}

function Margin7() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[20px] relative size-full">
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0a1a2e] text-[16px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">3.8 kWh</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[10.24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Energy Used</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[89.66px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function TankActivityTimeline() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Tank Activity Timeline">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative w-full">
        <Heading3Margin1 />
        <Margin6 />
        <Margin7 />
        <Container24 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_8.33%_8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5%_-5.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 18.3333">
          <g id="Group">
            <path d={svgPaths.p3572a480} id="Vector" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p34200500} id="Vector_2" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading 3">
      <Container29 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Schedule</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-3.75%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14.3333">
              <path d={svgPaths.p2da18400} id="Vector" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <Container30 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#002460] text-[12.8px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">See full schedule</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading5 />
        <Button />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">5:30 AM</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-[79px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-70 relative shrink-0 text-[#192947] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Heat to 135°F</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-[70px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">10:00 AM</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-70 relative shrink-0 text-[#192947] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Eco Mode</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">6:00 PM</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-70 relative shrink-0 text-[#192947] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Home Mode</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder3 />
      <HorizontalBorder4 />
      <Container37 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative w-full">
        <Container31 />
      </div>
    </div>
  );
}

function Scheduling() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Scheduling">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative w-full">
        <Container28 />
        <Margin8 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18.3331">
          <g id="Group">
            <path d={svgPaths.p2be2b780} id="Vector" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p36633c00} id="Vector_2" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading 3">
      <Container41 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Geofencing Automation</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading6 />
        <button className="bg-[#002460] content-stretch cursor-pointer flex h-[24px] items-center pl-[22px] pr-[2px] py-[2px] relative rounded-[15px] shrink-0 w-[44px]" data-name="Toggle">
          <div className="bg-white rounded-[13px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] shrink-0 size-[20px]" data-name="Background+Shadow" />
        </button>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-70 relative shrink-0 text-[#192947] text-[12.8px] w-[281.75px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">When everyone leaves home → Switch to Eco mode</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative w-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Geofencing() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Geofencing">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative w-full">
        <Container40 />
        <Margin9 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18.3331">
          <g id="Group">
            <path d={svgPaths.p2be2b780} id="Vector" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p36633c00} id="Vector_2" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group2 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading 3">
      <Container43 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Bypass mode</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading7 />
        <div className="bg-[#cad6ec] content-stretch flex h-[24px] items-center p-[2px] relative rounded-[15px] shrink-0 w-[44px]" data-name="Toggle">
          <div className="bg-white rounded-[13px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] shrink-0 size-[20px]" data-name="Background+Shadow" />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-70 relative shrink-0 text-[#192947] text-[12.8px] w-[281.75px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">
          Temporarily bypasses energy optimization
          <br aria-hidden="true" />
          to heat water faster.
        </p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative w-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Geofencing1() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Geofencing">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative w-full">
        <Container42 />
        <Margin10 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <g id="Group">
            <path d={svgPaths.p10539cc0} id="Vector" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p3274e300} id="Vector_2" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group3 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Heading 3">
      <Container45 />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[16px] w-[86.91px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Device Info</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #4B75C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading8 />
        <Container46 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Model</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[12.8px] w-[105.78px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Armada WH-300</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <Container48 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container49 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Serial</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[12.8px] w-[91.89px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">AWH-4459-22</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <Container51 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container52 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Firmware</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[12.8px] w-[29.39px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">1.4.2</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <Container54 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container55 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Connection</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[12.8px] w-[27.27px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">WiFi</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <Container57 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container58 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Last Online</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[12.8px] w-[66.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">10 sec ago</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <Container60 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Container61 />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#cad6ec] relative rounded-[6px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Container47 />
        <Container50 />
        <Container53 />
        <Container56 />
        <Container59 />
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative w-full">
        <Background6 />
      </div>
    </div>
  );
}

function DeviceInfo() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Device Info">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[21px] relative w-full">
        <Container44 />
        <Margin11 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="h-[1942px] relative shrink-0 w-full z-[2]" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[100px] pt-[16px] px-[20px] relative size-full">
          <AlertsOptionalStateExamples />
          <Background />
          <StatusHero />
          <ModeSelector />
          <TankActivityTimeline />
          <Scheduling />
          <Geofencing />
          <Geofencing1 />
          <DeviceInfo />
        </div>
      </div>
    </div>
  );
}

function Group4() {
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

function Svg11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group4 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[31.08px]">
        <p className="leading-[normal]">Home</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Group5() {
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

function Svg12() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group5 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[42.03px]">
        <p className="leading-[normal]">Devices</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container66 />
        <Container67 />
      </div>
    </div>
  );
}

function Svg13() {
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

function Container69() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[35.88px]">
        <p className="leading-[normal]">Modes</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container69 />
        <Container70 />
      </div>
    </div>
  );
}

function Group6() {
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

function Svg14() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group6 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">Settings</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container72 />
        <Container73 />
      </div>
    </div>
  );
}

export default function WaterHeaterExpanded() {
  return (
    <div className="bg-[#0a111d] content-stretch flex flex-col isolate items-start relative size-full" data-name="Water Heater Expanded">
      <Header />
      <Margin1 />
      <Main />
      <div className="bg-[#f7f9fc] content-stretch flex gap-[21.8px] h-[84px] items-start pb-[24px] pl-[26.88px] pr-[26.87px] pt-[13px] relative shrink-0 w-[375px] z-[1]" data-name="Nav">
        <div aria-hidden="true" className="absolute border-[#cad6ec] border-solid border-t inset-0 pointer-events-none" />
        <Container62 />
        <Container65 />
        <Container68 />
        <Container71 />
      </div>
    </div>
  );
}