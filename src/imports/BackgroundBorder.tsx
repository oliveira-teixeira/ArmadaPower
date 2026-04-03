import svgPaths from "./svg-iz8yjm4utf";

function Svg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_10098)" id="SVG">
          <path d={svgPaths.p2939f4c0} id="Vector" stroke="var(--stroke-0, #0B2545)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_10098">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Container />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Energy Usage</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[25px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[36px]">245 kWh</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b7785] text-[12.8px] w-[98.02px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Total last week</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[99px]" data-name="Container">
      <Heading1 />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative w-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] relative shrink-0 text-[#6b7785] text-[12.8px] w-[9.94px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">M</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <div className="bg-[#4b75c0] h-[40px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-[24px]" data-name="Background" />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] relative shrink-0 text-[#6b7785] text-[12.8px] w-[7.11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">T</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <div className="bg-[#4b75c0] h-[55px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-[24px]" data-name="Background" />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] relative shrink-0 text-[#0a66ff] text-[12.8px] w-[11.23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">W</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <div className="bg-[#0c69ff] h-[80px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-[24px]" data-name="Background" />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] relative shrink-0 text-[#6b7785] text-[12.8px] w-[7.11px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">T</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <div className="bg-[#4b75c0] h-[45px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-[24px]" data-name="Background" />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] relative shrink-0 text-[#6b7785] text-[12.8px] w-[6.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">F</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <div className="bg-[#4b75c0] h-[60px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-[24px]" data-name="Background" />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] relative shrink-0 text-[#6b7785] text-[12.8px] w-[7.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">S</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <div className="bg-[#4b75c0] h-[30px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-[24px]" data-name="Background" />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] relative shrink-0 text-[#6b7785] text-[12.8px] w-[7.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">S</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <div className="bg-[#4b75c0] h-[20px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-[24px]" data-name="Background" />
      <Container18 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[107px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between pt-[16px] relative size-full">
        <Container5 />
        <Container7 />
        <Container9 />
        <Container11 />
        <Container13 />
        <Container15 />
        <Container17 />
      </div>
    </div>
  );
}

export default function BackgroundBorder() {
  return (
    <div className="bg-[#f7f9fc] content-stretch flex flex-col items-start p-[21px] relative rounded-[8px] size-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Heading3Margin />
      <Margin />
      <Container4 />
    </div>
  );
}