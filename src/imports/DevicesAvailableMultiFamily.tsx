import svgPaths from "./svg-9toygjprh4";

function Heading() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[34px] justify-center leading-[0] left-0 text-[#f7f9fc] text-[25px] top-[17px] w-[327px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[36px]">Devices Available</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-0 text-[#cad6ec] text-[16px] top-[24px] w-[327px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">View all Armada Power devices connected to your home.</p>
      </div>
    </div>
  );
}

function LucideIcons() {
  return (
    <div className="absolute left-[14px] size-[24px] top-[14px]" data-name="Lucide Icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Lucide Icons">
          <path d={svgPaths.p239de380} id="Vector" stroke="var(--stroke-1, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#cad6ec] relative rounded-[6px] shrink-0 size-[52px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <LucideIcons />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[38px] justify-center leading-[0] left-0 text-[#192947] text-[16px] top-[19px] w-[209px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">{`Armada Power Thermostat `}</p>
        <p className="leading-[20px]">(model name and number)</p>
      </div>
    </div>
  );
}

function LucideIcons1() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Lucide Icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Lucide Icons">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #065A25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <LucideIcons1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[32px] text-[#065a25] text-[12.8px] top-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">online</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative w-full">
        <Heading1 />
        <Container2 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[21px] py-[22px] relative w-full">
          <Background />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function LucideIcons2() {
  return (
    <div className="absolute left-[14px] size-[24px] top-[14px]" data-name="Lucide Icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Lucide Icons">
          <path d={svgPaths.p17eb2100} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#cad6ec] relative rounded-[6px] shrink-0 size-[52px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <LucideIcons2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[57px] justify-center leading-[0] left-0 text-[#192947] text-[16px] top-[28.5px] w-[211px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Armada Power Water Heater (model name and number)</p>
      </div>
    </div>
  );
}

function LucideIcons3() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Lucide Icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Lucide Icons">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #065A25)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <LucideIcons3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[32px] text-[#065a25] text-[12.8px] top-[12px] w-[40px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">online</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative w-full">
        <Heading2 />
        <Container4 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[21px] py-[22px] relative w-full">
          <Background1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#cad6ec] relative rounded-[6px] shrink-0 size-[52px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute left-[14px] overflow-clip size-[24px] top-[14px]" data-name="Lucide Icons">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-5.56%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                <path d={svgPaths.p3162dc00} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[57px] justify-center leading-[0] left-0 text-[#192947] text-[16px] top-[28.5px] w-[211px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">{`Sensor `}</p>
        <p className="leading-[20px]">(model name and number)</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Lucide Icons">
        <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
          <div className="absolute inset-[-5.55%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0159 20.014">
              <path d={svgPaths.p7cfa780} id="Vector" stroke="var(--stroke-0, #D29F00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#d29f00] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">needs attention</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative w-full">
        <Heading3 />
        <Container6 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[21px] py-[22px] relative w-full">
          <Background2 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#cad6ec] relative rounded-[6px] shrink-0 size-[52px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute left-[14px] overflow-clip size-[24px] top-[14px]" data-name="Lucide Icons">
          <div className="absolute inset-[8.32%_12.49%]" data-name="Vector">
            <div className="absolute inset-[-5%_-5.55%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0068 22.0052">
                <path d={svgPaths.p2a15ef00} id="Vector" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[57px] justify-center leading-[0] left-0 text-[#192947] text-[16px] top-[28.5px] w-[211px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">{`Smart Valve `}</p>
        <p className="leading-[20px]">(model name and number)</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Lucide Icons">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <path d={svgPaths.p34d7a480} id="Vector" stroke="var(--stroke-0, #CB0707)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cb0707] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Offline</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative w-full">
        <Heading4 />
        <Container8 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[21px] py-[22px] relative w-full">
          <Background3 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[20px] h-[834px] items-center left-0 p-[24px] right-0 top-[calc(50%+9px)]" data-name="Main">
      <Heading />
      <Container />
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Header() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#192947] content-stretch flex h-[64px] items-center justify-between left-[calc(50%-0.5px)] px-[24px] py-[16px] top-0 w-[374px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#7695cf] border-b border-solid inset-0 pointer-events-none" />
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="Lucide Icons">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d="M8 15L1 8M1 8L8 1M1 8H15" id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </button>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#f7f9fc] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Devices Available</p>
      </div>
    </div>
  );
}

function Group() {
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

function Svg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[31.08px]">
        <p className="leading-[normal]">Home</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group">
            <path d={svgPaths.p27f4d000} id="Vector" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pd679bc0} id="Vector_2" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p34382a00} id="Vector_3" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pe7ead60} id="Vector_4" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#002460] text-[11px] w-[42.03px]">
        <p className="leading-[normal]">Devices</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Svg2() {
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

function Container16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[35.88px]">
        <p className="leading-[normal]">Modes</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Group2() {
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

function Svg3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">Settings</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

export default function DevicesAvailableMultiFamily() {
  return (
    <div className="bg-[#0a111d] relative size-full" data-name="Devices Available (Multi Family)">
      <Main />
      <Header />
      <div className="absolute bg-[#f7f9fc] bottom-0 content-stretch flex gap-[21.8px] h-[84px] items-start left-0 pb-[24px] pl-[26.88px] pr-[26.87px] pt-[13px] right-0" data-name="Nav">
        <div aria-hidden="true" className="absolute border-[#cad6ec] border-solid border-t inset-0 pointer-events-none" />
        <Container9 />
        <Container12 />
        <Container15 />
        <Container18 />
      </div>
    </div>
  );
}