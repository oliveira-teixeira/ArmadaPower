import svgPaths from "./svg-ippykkkjyk";

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
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[16px] w-[107.63px]">
        <p className="leading-[normal]">Energy Usage</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #6B7785)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[12px] w-[65.11px]">
        <p className="leading-[normal]">Main Home</p>
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
    <div className="bg-[#183d64] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
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

function Paragraph() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid leading-[0] not-italic relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center left-0 text-[#f7f9fc] text-[32px] top-[15.5px] w-[128.14px]">
          <p className="leading-[32px]">{`24 kWh `}</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center left-[132.14px] text-[#cad6ec] text-[16px] top-[21px] w-[42.89px]">
          <p className="leading-[16px]">today</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[29.17%_8.33%]" data-name="Group">
      <div className="absolute inset-[-10%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 8">
          <g id="Group">
            <path d="M10 0.666667H14V4.66667" id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p137d8f80} id="Vector_2" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group />
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

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[13px] w-[167.06px]">
          <p className="leading-[normal]">12% higher than yesterday</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#183d64] content-stretch flex gap-[6px] items-center px-[13px] py-[7px] relative rounded-[12px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IconifyIcon1 />
      <Container5 />
    </div>
  );
}

function BackgroundBorderAlignFlexStart() {
  return (
    <div className="relative shrink-0 w-full" data-name="Background+Border:align-flex-start">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <BackgroundBorder />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[15px] w-full">
        <p className="leading-[21px]">Your usage is higher than usual this evening.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative w-full">
        <Container6 />
      </div>
    </div>
  );
}

function SummaryHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Summary Header">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[25px] pt-[24px] px-[16px] relative w-full">
        <Paragraph />
        <BackgroundBorderAlignFlexStart />
        <Margin1 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex inset-[13.78%_91.7%_81.12%_-0.15%] items-center">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cad6ec] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2026
      </p>
    </div>
  );
}

function TapAWeek() {
  return (
    <div className="absolute bg-[#284271] content-stretch flex inset-[47.45%_1.4%_45.92%_0.28%] items-center justify-center pb-[6px] pl-[89px] pr-[88px] pt-[7px] rounded-[8px]" data-name="Tap a week">
      <div aria-hidden="true" className="absolute border border-[#7695cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tap a month to see weekly breakdown ↓
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <div className="h-[50px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 50">
          <path d={svgPaths.p20ee7580} fill="var(--fill-0, #3A6ABF)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        jan
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <div className="h-[45px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 45">
          <path d={svgPaths.p9fbec00} fill="var(--fill-0, #3A6ABF)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        feb
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <button className="block cursor-pointer h-[35px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 35">
          <path d={svgPaths.p29a3e600} fill="var(--fill-0, #3A6ABF)" id="Vector" />
        </svg>
      </button>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        mar
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <div className="h-[40px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 40">
          <path d={svgPaths.p2a06ee00} fill="var(--fill-0, #3A6ABF)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        apr
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <div className="h-[90px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 90">
          <path d={svgPaths.p156edd80} fill="var(--fill-0, #3A6ABF)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        may
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <div className="h-[93px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 93">
          <path d={svgPaths.p30ae34c0} fill="var(--fill-0, #3A6ABF)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        jun
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <div className="h-[80px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 80">
          <path d={svgPaths.p26349631} fill="var(--fill-0, #3A6ABF)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        jul
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <div className="h-[50px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 50">
          <path d={svgPaths.p20ee7580} fill="var(--fill-0, #3A6ABF)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        aug
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <div className="h-[45px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 45">
          <path d={svgPaths.p9fbec00} fill="var(--fill-0, #3A6ABF)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        sep
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <div className="h-[35px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 35">
          <path d={svgPaths.p29a3e600} fill="var(--fill-0, #3A6ABF)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        oct
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <div className="h-[40px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 40">
          <path d={svgPaths.p2a06ee00} fill="var(--fill-0, #3A6ABF)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        nov
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <div className="h-[90px] relative shrink-0 w-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 90">
          <path d={svgPaths.p156edd80} fill="var(--fill-0, #3A6ABF)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#cad6ec] text-[10.24px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        dec
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] inset-[62.5%_5.61%_9.18%_9.26%] items-end">
      <Frame5 />
      <Frame4 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f7f9fc] content-stretch flex flex-col h-[36px] items-center p-[9px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[12.8px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Year</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex inset-[20.92%_87.13%_69.9%_0.05%] items-center">
      <BackgroundBorder1 />
    </div>
  );
}

function ArrowForward24DpFill0Wght400Grad0Opsz1() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_24dp_FILL0_wght400_GRAD0_opsz24 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_24dp_FILL0_wght400_GRAD0_opsz24 2">
          <path d={svgPaths.p54e7200} fill="var(--fill-0, #4B75C0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="col-1 font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] ml-0 mt-0 relative row-1 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2026
      </p>
    </div>
  );
}

function ArrowForward24DpFill0Wght400Grad0Opsz() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_forward_24dp_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_24dp_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p54e7200} fill="var(--fill-0, #888888)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[58px] inset-[32.14%_20.56%_61.73%_20.84%] items-center">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <ArrowForward24DpFill0Wght400Grad0Opsz1 />
        </div>
      </div>
      <Group5 />
      <ArrowForward24DpFill0Wght400Grad0Opsz />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[13px] w-[39.7px]">
        <p className="leading-[normal]">Usage</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#0a66ff] rounded-[4px] shrink-0 size-[8px]" data-name="Background" />
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex inset-[95.92%_0_0_3.65%] items-start" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[16px] w-full">
          <p className="leading-[normal]">Insights</p>
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p20a7a700} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[18px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px]" data-name="Background+Shadow">
      <Svg3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[20.81px] pt-[6px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[14px] whitespace-nowrap">
        <p className="leading-[21px] mb-0">Heating ran longer than usual today</p>
        <p className="leading-[21px]">due to lower outdoor temperatures.</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[6px] shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <BackgroundShadow />
        <Container12 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.58%_12.5%_8.21%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.26%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.7568">
          <g id="Group">
            <path d={svgPaths.p1c0d5600} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3d44dd80} id="Vector_2" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[18px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px]" data-name="Background+Shadow">
      <Svg4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4.34px] pt-[6px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[14px] w-[254.66px]">
        <p className="leading-[21px] mb-0">Water heater usage increased this</p>
        <p className="leading-[21px]">morning.</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[6px] shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <BackgroundShadow1 />
        <Container13 />
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.pa075180} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[18px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px]" data-name="Background+Shadow">
      <Svg5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[62.16px] pt-[6px] relative shrink-0 w-[247px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[14px] w-[247px]">
        <p className="leading-[21px]">Energy-saving event reduced consumption by 1.2 kWh this afternoon.</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[6px] shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <BackgroundShadow2 />
        <Container14 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Background />
        <Background1 />
        <Background2 />
      </div>
    </div>
  );
}

function Insights() {
  return (
    <div className="relative shrink-0 w-full" data-name="Insights">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[25px] pt-[24px] px-[16px] relative w-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="h-[99px] relative shrink-0 w-full" data-name="Actions">
      <div className="size-full" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.26%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.0005">
          <g id="Group">
            <path d={svgPaths.p175d0180} id="Vector" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pe495300} id="Vector_2" stroke="var(--stroke-0, #002460)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function Container16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#002460] text-[11px] w-[31.08px]">
        <p className="leading-[normal]">Home</p>
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

function Group3() {
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

function Svg7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[42.03px]">
        <p className="leading-[normal]">Devices</p>
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

function Svg8() {
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

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[35.88px]">
        <p className="leading-[normal]">Modes</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Group4() {
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

function Svg9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group4 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">Settings</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full z-[1]" data-name="Container">
      <SummaryHeader />
      <div className="h-[356px] relative shrink-0 w-[343px]" data-name="Graphs">
        <Frame1 />
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[40.31%_46.32%_54.59%_44.93%] leading-[20px] text-[#cad6ec] text-[12.8px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          2026
        </p>
        <TapAWeek />
        <p className="absolute font-['SF_Pro_Display:Regular_Italic',sans-serif] inset-[57.4%_94.52%_39.54%_0.42%] italic leading-[normal] text-[#cad6ec] text-[10px] text-right">100</p>
        <p className="absolute font-['SF_Pro_Display:Regular_Italic',sans-serif] inset-[66.33%_94.52%_30.61%_2.11%] italic leading-[normal] text-[#cad6ec] text-[10px] text-right">75</p>
        <p className="absolute font-['SF_Pro_Display:Regular_Italic',sans-serif] inset-[75.26%_94.52%_21.68%_1.83%] italic leading-[normal] text-[#cad6ec] text-[10px] text-right">50</p>
        <p className="absolute font-['SF_Pro_Display:Regular_Italic',sans-serif] inset-[84.18%_94.52%_9.69%_2.11%] italic leading-[normal] text-[#cad6ec] text-[10px] text-right">25</p>
        <div className="absolute inset-[59.18%_1.97%_40.82%_5.34%]" data-name="Vector">
          <div className="absolute inset-[-0.25px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317.949 0.5">
              <path d="M0 0.25H317.949" id="Vector" stroke="var(--stroke-0, #7695CF)" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[68.11%_1.97%_31.89%_5.34%]" data-name="Vector">
          <div className="absolute inset-[-0.25px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317.949 0.5">
              <path d="M0 0.25H317.949" id="Vector" stroke="var(--stroke-0, #7695CF)" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[77.04%_1.97%_22.96%_5.34%]" data-name="Vector">
          <div className="absolute inset-[-0.25px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317.949 0.5">
              <path d="M0 0.25H317.949" id="Vector" stroke="var(--stroke-0, #7695CF)" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[85.97%_1.97%_14.03%_5.34%]" data-name="Vector">
          <div className="absolute inset-[-0.25px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317.949 0.5">
              <path d="M0 0.25H317.949" id="Vector" stroke="var(--stroke-0, #7695CF)" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
        <Frame2 />
        <Frame3 />
        <Frame />
        <Container7 />
      </div>
      <Insights />
      <Actions />
      <div className="bg-[#f7f9fc] content-stretch flex gap-[21.8px] h-[84px] items-start pb-[24px] pl-[26.88px] pr-[26.87px] pt-[13px] relative shrink-0 w-[375px]" data-name="Nav">
        <div aria-hidden="true" className="absolute border-[#cad6ec] border-solid border-t inset-0 pointer-events-none" />
        <Container15 />
        <Container18 />
        <Container21 />
        <Container24 />
      </div>
    </div>
  );
}

export default function EnergyUsage() {
  return (
    <div className="bg-[#0a111d] content-stretch flex flex-col isolate items-start relative size-full" data-name="Energy Usage">
      <Header />
      <Container4 />
    </div>
  );
}