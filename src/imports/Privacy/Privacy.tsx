function Header() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#192947] content-stretch flex h-[64px] items-center justify-between left-1/2 px-[24px] py-[16px] top-0 w-[375px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#7695cf] border-b border-solid inset-0 pointer-events-none" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Lucide Icons">
        <button className="absolute block cursor-pointer inset-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d="M8 15L1 8M1 8L8 1M1 8H15" id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </button>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#f7f9fc] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Privacy and Legal</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-[#cad6ec] w-full">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Legal Agreements</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center opacity-70 relative shrink-0 text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Review the terms and policies governing your use of Armada Power services and devices.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#192947] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">Terms and Conditions</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Rules and guidelines for using our services</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[247px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative w-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Container5 />
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
          <Container1 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <HorizontalBorder />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 overflow-clip p-[24px] right-0 top-[64px]" data-name="Container">
      <Frame />
      <BackgroundBorder />
    </div>
  );
}

export default function Privacy() {
  return (
    <div className="bg-[#0a111d] relative size-full" data-name="Privacy">
      <Header />
      <Container />
    </div>
  );
}