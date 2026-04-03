import svgPaths from "./svg-g8zooim02k";

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
        <p className="leading-[32px]">Thermostat (living room)</p>
      </div>
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Oakwood Residences • Unit 4B</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#2fc955] rounded-[4px] shrink-0 size-[8px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#2fc955] text-[12px] w-[62.91px]">
        <p className="leading-[normal]">Connected</p>
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
    <div className="relative shrink-0 w-[246px]" data-name="Container">
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

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16px] top-[24px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[13px] tracking-[0.5px] uppercase w-[47.28px]">
        <p className="leading-[normal]">Today</p>
      </div>
    </div>
  );
}

function Svg1() {
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
      <Svg1 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background />
    </div>
  );
}

function Margin4() {
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

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin3 />
      <Margin4 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[15px] whitespace-nowrap">
        <p className="leading-[19.5px]">Sleep Mode activated</p>
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

function Svg2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Group />
    </div>
  );
}

function IconifyIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[13px] w-[182.77px]">
        <p className="leading-[normal]">Triggered by Evening Routine</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[12px] w-[131px]">
        <p className="leading-[normal]">10:00 PM</p>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[93.5px] items-start left-0 px-[16px] right-0 top-[48px]" data-name="Container">
      <Margin2 />
      <HorizontalBorder1 />
    </div>
  );
}

function Svg3() {
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
      <Svg3 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Margin7() {
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

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin6 />
      <Margin7 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[15px] whitespace-nowrap">
        <p className="leading-[19.5px]">Temperature set to 72°</p>
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

function Svg4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function IconifyIcon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[13px] w-[113.34px]">
        <p className="leading-[normal]">Manually adjusted</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[12px] w-[199.48px]">
        <p className="leading-[normal]">6:30 PM</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex h-[92.5px] items-start left-0 px-[16px] right-0 top-[141.5px]" data-name="Container">
      <Margin5 />
      <Container16 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[242px] relative shrink-0 w-[375px]" data-name="Container">
      <Container8 />
      <Container9 />
      <Container14 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[343px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[13px] tracking-[0.5px] uppercase w-[81.56px]">
        <p className="leading-[normal]">Yesterday</p>
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

function Svg5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group2 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Background">
      <Svg5 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background2 />
    </div>
  );
}

function Margin10() {
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

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin9 />
      <Margin10 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[15px] whitespace-nowrap">
        <p className="leading-[19.5px]">Morning Schedule active</p>
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

function Svg6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Group3 />
    </div>
  );
}

function IconifyIcon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg6 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[13px] w-[115.86px]">
        <p className="leading-[normal]">Scheduled change</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[12px] w-[200.25px]">
        <p className="leading-[normal]">8:00 AM</p>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[93.5px] items-start px-[16px] relative shrink-0 w-[375px]" data-name="Container">
      <Margin8 />
      <HorizontalBorder2 />
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

function Svg7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group4 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Background">
      <Svg7 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background3 />
    </div>
  );
}

function Margin13() {
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

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin12 />
      <Margin13 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[15px] whitespace-nowrap">
        <p className="leading-[19.5px]">Energy saving event ended</p>
      </div>
    </div>
  );
}

function Svg8() {
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

function IconifyIcon3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg8 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Set by utility program</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[12px] w-[200.25px]">
        <p className="leading-[normal]">8:00 AM</p>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[93.5px] items-start px-[16px] relative shrink-0 w-[375px]" data-name="Container">
      <Margin11 />
      <HorizontalBorder3 />
    </div>
  );
}

function Group5() {
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

function Svg9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group5 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Background">
      <Svg9 />
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background4 />
    </div>
  );
}

function Margin16() {
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

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin15 />
      <Margin16 />
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[15px] whitespace-nowrap">
        <p className="leading-[19.5px]">Energy saving event started</p>
      </div>
    </div>
  );
}

function Svg10() {
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

function IconifyIcon4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg10 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon4 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Set by utility program</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[12px] w-[192.41px]">
        <p className="leading-[normal]">5:15 AM</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container35 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[92.5px] items-start px-[16px] relative shrink-0 w-[375px]" data-name="Container">
      <Margin14 />
      <Container34 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center py-[24px] relative shrink-0" data-name="Container">
      <Container21 />
      <Container22 />
      <Container27 />
      <Container32 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16px] top-[24px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[13px] tracking-[0.5px] uppercase w-[56.63px]">
        <p className="leading-[normal]">Earlier</p>
      </div>
    </div>
  );
}

function Background5() {
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

function Margin18() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background5 />
    </div>
  );
}

function Margin19() {
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

function Container41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin18 />
      <Margin19 />
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[15px] whitespace-nowrap">
        <p className="leading-[19.5px]">Away Mode activated</p>
      </div>
    </div>
  );
}

function Group6() {
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

function Svg11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Group6 />
    </div>
  );
}

function IconifyIcon5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg11 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon5 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[13px] w-[132.08px]">
        <p className="leading-[normal]">Triggered by location</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[12px] w-[168.97px]">
        <p className="leading-[normal]">Oct 12, 9:00 AM</p>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex h-[93.5px] items-start left-0 px-[16px] right-0 top-[48px]" data-name="Container">
      <Margin17 />
      <HorizontalBorder4 />
    </div>
  );
}

function Svg12() {
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

function Background6() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Background">
      <Svg12 />
    </div>
  );
}

function Margin21() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pt-[16px] relative shrink-0 w-[32px]" data-name="Margin">
      <Background6 />
    </div>
  );
}

function Margin22() {
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

function Container46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Margin21 />
      <Margin22 />
    </div>
  );
}

function Margin20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[16px] relative self-stretch shrink-0" data-name="Margin">
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[16px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[15px] whitespace-nowrap">
        <p className="leading-[19.5px]">Water heater turned on</p>
      </div>
    </div>
  );
}

function Group7() {
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

function Svg13() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Group7 />
    </div>
  );
}

function IconifyIcon6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg13 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-0 right-0 top-[41.5px]" data-name="Container">
      <IconifyIcon6 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[13px] w-[113.34px]">
        <p className="leading-[normal]">Manually adjusted</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61.5px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[12px] w-[235.63px]">
        <p className="leading-[normal]">Oct 11, 8:45 PM</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container48 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex h-[92.5px] items-start left-0 px-[16px] right-0 top-[141.5px]" data-name="Container">
      <Margin20 />
      <Container47 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[242px] relative shrink-0 w-[375px]" data-name="Container">
      <Container39 />
      <Container40 />
      <Container45 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full z-[2]" data-name="Container">
      <Container7 />
      <Container20 />
      <Container38 />
    </div>
  );
}

function Group8() {
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

function Svg14() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group8 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[31.08px]">
        <p className="leading-[normal]">Home</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Group9() {
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

function Svg15() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group9 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[42.03px]">
        <p className="leading-[normal]">Devices</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container55 />
        <Container56 />
      </div>
    </div>
  );
}

function Svg16() {
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

function Container58() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg16 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] w-[35.88px]">
        <p className="leading-[normal]">Modes</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container58 />
        <Container59 />
      </div>
    </div>
  );
}

function Group10() {
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

function Svg17() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SVG">
      <Group10 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg17 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#4b75c0] text-[11px] whitespace-nowrap">
        <p className="leading-[normal]">Settings</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-full relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

export default function ThermostatHistory() {
  return (
    <div className="bg-[#0a111d] content-stretch flex flex-col isolate items-start relative size-full" data-name="Thermostat History">
      <Header />
      <Margin1 />
      <Container6 />
      <div className="bg-[#f7f9fc] content-stretch flex gap-[21.8px] h-[84px] items-start pb-[24px] pl-[26.88px] pr-[26.87px] pt-[13px] relative shrink-0 w-[375px] z-[1]" data-name="Nav">
        <div aria-hidden="true" className="absolute border-[#cad6ec] border-solid border-t inset-0 pointer-events-none" />
        <Container51 />
        <Container54 />
        <Container57 />
        <Container60 />
      </div>
    </div>
  );
}