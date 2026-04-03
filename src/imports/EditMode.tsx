import svgPaths from "./svg-4x646n0xfw";

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
        <p className="leading-[20px]">Create Mode</p>
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
        <p className="leading-[20px]">Basic Info</p>
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

function Input() {
  return (
    <div className="bg-[#0a1a2e] content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">New Mode</p>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]" data-name="Field">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#f7f9fc] text-[12.8px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Mode name</p>
      </div>
      <Input />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Field />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#0a1a2e] content-stretch flex h-[40px] items-center px-[12px] py-[4px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-70 relative shrink-0 text-[#cad6ec] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Enter description here</p>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]" data-name="Field">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#f7f9fc] text-[12.8px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Description (Optional)</p>
      </div>
      <Input1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Field1 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b7785] text-[13px] w-full">
        <p className="leading-[normal]">Choose an Icon</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.26%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 17.5004">
          <g id="Group">
            <path d={svgPaths.p15d6a6c0} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1e4d0f00} id="Vector_2" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="aspect-square bg-[#f7f9fc] col-1 content-stretch flex items-center justify-center justify-self-stretch p-px relative rounded-[6px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p9e35d40} id="Vector" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Border() {
  return (
    <div className="aspect-square bg-[#f7f9fc] col-2 content-stretch flex items-center justify-center justify-self-stretch p-[2px] relative rounded-[6px] row-1 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-2 border-[#002460] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Svg1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <g id="Group">
            <path d={svgPaths.p32a8600} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p2ded4320} id="Vector_2" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group1 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="aspect-square bg-[#f7f9fc] col-3 content-stretch flex items-center justify-center justify-self-stretch p-px relative rounded-[6px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Svg2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p36af1600} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="aspect-square bg-[#f7f9fc] col-4 content-stretch flex items-center justify-center justify-self-stretch p-px relative rounded-[6px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Svg3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%_8.33%_16.67%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.56%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 16.6667">
          <g id="Group">
            <path d={svgPaths.p17909700} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p6a2b00} id="Vector_2" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group2 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="aspect-square bg-[#f7f9fc] col-5 content-stretch flex items-center justify-center justify-self-stretch p-px relative rounded-[6px] row-1 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Svg4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[_57.41px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <Border />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container4 />
    </div>
  );
}

function SectionStep1BasicInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Step 1: Basic Info">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Background3() {
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
        <p className="leading-[20px]">Device Configuration</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background3 />
      <Heading1 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p159f00} id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Thermostat</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container7 />
        <Heading2 />
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M15 12.5L10 7.5L5 12.5" id="Vector" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg6 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#183d64] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container6 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Operating Mode</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#f7f9fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-name="Background+Shadow">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[12.8px] text-center w-[28.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Cool</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] text-center w-[29.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Heat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Fan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Auto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[#cad6ec] h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[3px] relative size-full">
          <BackgroundShadow />
          <Container11 />
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Overlay />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Target Temperature</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A1A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[4px] shrink-0 size-[40px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Svg7 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#192947] text-[20px] w-[46.33px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[32px]">68°F</p>
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p36bdefc0} id="Vector" stroke="var(--stroke-0, #0A1A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[4px] shrink-0 size-[40px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Svg8 />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#cad6ec] relative rounded-[6px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[9px] pr-[9.02px] py-[9px] relative w-full">
          <BackgroundBorder5 />
          <Container15 />
          <BackgroundBorder6 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <BackgroundBorder4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f7f9fc] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start p-[16px] relative w-full">
        <Container10 />
        <Container14 />
      </div>
    </div>
  );
}

function ThermostatCard() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Thermostat Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <BackgroundHorizontalBorder />
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1894bb00} id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] w-[95.63px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Water Heater</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Container17 />
        <Heading3 />
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M15 12.5L10 7.5L5 12.5" id="Vector" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg10 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-[#183d64] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-[transparent] border-b border-solid content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container16 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Heating Mode</p>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#f7f9fc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" data-name="Background+Shadow">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] relative shrink-0 text-[#0b2545] text-[12.8px] text-center w-[23.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Eco</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] text-center w-[45.09px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Normal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Bypass</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[#cad6ec] h-[42px] relative rounded-[6px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[3px] relative size-full">
          <BackgroundShadow1 />
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-[301px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Label3 />
        <Overlay1 />
      </div>
    </div>
  );
}

function WaterHeaterCard() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Water Heater Card">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip pb-[17px] pt-px px-px relative rounded-[inherit] w-full">
        <BackgroundHorizontalBorder1 />
        <Container19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SectionStep2DeviceConfig() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Step 2: Device Config">
      <Container5 />
      <ThermostatCard />
      <WaterHeaterCard />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#002460] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Background">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[8.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Optional Settings</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <Heading4 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Enable Notifications</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] w-[222px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Get notified when this mode is activated.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#002460] h-[30px] relative rounded-[15px] shrink-0 w-[50px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[22px] pr-[2px] py-[2px] relative size-full">
        <div className="bg-white rounded-[13px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] shrink-0 size-[26px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Container23 />
          <Background5 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <HorizontalBorder />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SectionStep3OptionalSettings() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Step 3: Optional Settings">
      <Container22 />
      <BackgroundBorder7 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#002460] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Background">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[8.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">4</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Review Mode</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background6 />
      <Heading5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <g id="Group">
            <path d={svgPaths.p10539cc0} id="Vector" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p3274e300} id="Vector_2" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Group3 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg11 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8.22px] relative">
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[84px] justify-center leading-[0] relative shrink-0 text-[#192947] text-[0px] w-[256.78px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="mb-0 text-[16px]">
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              New Mode
            </span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` sets the thermostat to`}</span>
          </p>
          <p className="text-[16px]">
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              68°F (Cool)
            </span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`, switches the water heater to `}</span>
            <span className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Eco
            </span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              , and applies energy-saving optimizations.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#002460] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[12px] items-start p-[17px] relative w-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function SectionStep4Review() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Step 4: Review">
      <Container26 />
      <Border1 />
    </div>
  );
}

function SectionStep4ReviewMargin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section - Step 4: Review:margin">
      <SectionStep4Review />
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-name="Wrap">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Save mode
      </p>
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-[48px] pt-[36px] px-[20px] relative w-full">
          <SectionStep1BasicInfo />
          <SectionStep2DeviceConfig />
          <SectionStep3OptionalSettings />
          <SectionStep4ReviewMargin />
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
    <div className="bg-[#0a111d] content-stretch flex flex-col isolate items-start min-h-[812px] overflow-clip relative shrink-0 w-full" data-name="Background">
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

export default function EditMode() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Edit Mode">
      <Header />
      <Background />
    </div>
  );
}