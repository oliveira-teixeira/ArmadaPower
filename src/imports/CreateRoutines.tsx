import svgPaths from "./svg-xrp92yyao9";

function Header() {
  return (
    <div className="bg-[#192947] content-stretch flex h-[64px] items-center justify-between px-[24px] py-[16px] relative shrink-0 w-[375px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#7695cf] border-b border-solid inset-0 pointer-events-none" />
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
        <p className="leading-[20px]">Create Routine</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#002460] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Background">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] text-center w-[5.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Choose Trigger</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <Heading />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
          <g id="Group">
            <path d={svgPaths.p114bcf80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M8.25 3.75V8.25L11.25 9.75" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="SVG">
      <Group />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#002460] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[36px]" data-name="Background">
      <Svg />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[36px] relative shrink-0 w-[52px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[16px] relative size-full">
        <Background3 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Time</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#002460] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">10:00 PM, Weekdays</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-full">
        <Container2 />
        <Margin1 />
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #0A66FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#f7f9fc] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Margin />
          <Container1 />
          <Margin2 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 16.4998">
          <g id="Group">
            <path d={svgPaths.p3c006e00} id="Vector" stroke="var(--stroke-0, #0A1A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1db90700} id="Vector_2" stroke="var(--stroke-0, #0A1A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[36px]" data-name="Background">
      <Svg2 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[52px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[16px] relative size-full">
        <Background4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">Location</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-[#f7f9fc] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Margin3 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <BackgroundHorizontalBorder />
        <BackgroundHorizontalBorder1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Step1Trigger() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Step 1: Trigger">
      <Container />
      <BackgroundBorder />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#002460] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Background">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[8.11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">2</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] w-[163.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Choose Action</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background5 />
      <Heading1 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p275e52d8} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#002460] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[36px]" data-name="Background">
      <Svg3 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[52px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[16px] relative size-full">
        <Background6 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Activate a Mode</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#002460] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Sleep Mode</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative w-full">
        <Container8 />
        <Margin5 />
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #0A66FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder2() {
  return (
    <div className="bg-[#f7f9fc] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Margin4 />
          <Container7 />
          <Margin6 />
        </div>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.pfbe6398} id="Vector" stroke="var(--stroke-0, #0A1A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[36px]" data-name="Background">
      <Svg5 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start pr-[16px] relative shrink-0 w-[52px]" data-name="Margin">
      <Background8 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Direct Device Control</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Advanced</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Container12 />
      <Margin8 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f7f9fc] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[16px] relative w-full">
          <Margin7 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <BackgroundHorizontalBorder2 />
        <Background7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Step2Action() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Step 2: Action">
      <Container6 />
      <BackgroundBorder1 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#002460] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Background">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[8.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Permission</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background9 />
      <Heading2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">Ask before starting routine</p>
        </div>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#0a66ff] h-[24px] relative rounded-[12px] shrink-0 w-[44px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-white left-[22px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)] size-[20px] top-[2px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder3() {
  return (
    <div className="bg-[#f7f9fc] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Container15 />
          <Background10 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <BackgroundHorizontalBorder3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Step3Conditions() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Step 3: Conditions">
      <Container14 />
      <BackgroundBorder2 />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#002460] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Background">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[8.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">4</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Review Routine</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background11 />
      <Heading3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.32%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0048 22.0048">
          <g id="Group">
            <path d={svgPaths.p23412e00} id="Vector" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p336dd260} id="Vector_2" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function Container17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg6 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#0b2545] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="text-[16px]">
            <span className="leading-[24px] text-[#0a1a2e]">At</span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] text-[#002460]" style={{ fontVariationSettings: "'wdth' 100" }}>
              10:00 PM on weekdays
            </span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              ,
            </span>
            <span className="leading-[24px]">{` `}</span>
            <span className="leading-[24px] text-[#0a1a2e]">activate</span>
            <span className="leading-[24px]">{` `}</span>
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] text-[#002460]" style={{ fontVariationSettings: "'wdth' 100" }}>{`sleep mode `}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[21px] relative w-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <BackgroundBorder3 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p3b240200} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg7 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[30.86px] relative">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] relative shrink-0 text-[#0a1a2e] text-[12.8px] w-[238.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px] mb-0">May conflict with your Nightly Savings</p>
          <p className="leading-[20px]">automation schedule.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorderShadow() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[6px] shrink-0 w-full" data-name="Background+VerticalBorder+Shadow">
      <div aria-hidden="true" className="absolute border-[#f59e0b] border-l-4 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[20px] pr-[16px] py-[12px] relative w-full">
          <Container19 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Step4Review() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Step 4: Review">
      <Container16 />
      <Margin9 />
      <BackgroundVerticalBorderShadow />
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-name="Wrap">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Save routine
      </p>
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[48px] pt-[24px] px-[20px] relative w-full">
          <Step1Trigger />
          <Step2Action />
          <Step3Conditions />
          <Step4Review />
          <div className="bg-[#4b75c0] min-w-[80px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
            <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative w-full">
                <Wrap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="content-stretch flex flex-col isolate items-start min-h-[812px] relative shrink-0 w-full" data-name="Background">
      <Main />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#0a111d] content-stretch flex flex-col items-start min-h-[812px] relative shrink-0 w-[375px]" data-name="Background">
      <Background1 />
    </div>
  );
}

export default function CreateRoutines() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Create Routines">
      <Header />
      <Background />
    </div>
  );
}