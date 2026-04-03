import svgPaths from "./svg-wg9kbc4a1g";

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 top-[104px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[16px] w-[327px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] mb-0">Scan the QR code provided with your Armada Power system, or enter the serial number from your device to begin setup.</p>
        <p className="leading-[24px]">
          <br aria-hidden="true" />
          If you live in a managed building, your leasing manager may provide the QR code.
        </p>
      </div>
    </div>
  );
}

function LucideIcons() {
  return (
    <div className="absolute left-[14px] size-[24px] top-[14px]" data-name="Lucide Icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Lucide Icons">
          <path d={svgPaths.p230cb500} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#cad6ec] left-0 rounded-[6px] size-[52px] top-0" data-name="Background">
      <LucideIcons />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute h-[52px] left-[20px] top-[25.15px] w-[68px]" data-name="Margin">
      <Background />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[19px] left-0 right-[16px] top-0" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[#192947] text-[16px] top-[9.5px] w-[181px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Scan QR Code</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[40px] left-0 right-[16px] top-[22.3px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] left-0 text-[#192947] text-[12.8px] top-[20px] w-[181px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Use your camera to scan</p>
        <p className="leading-[20px]">the label on your device.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-y-1/2 absolute h-[62.295px] left-[88px] right-[40px] top-1/2" data-name="Container">
      <Heading />
      <Container3 />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-0 overflow-clip size-[20px] top-0" data-name="SVG">
      <div className="absolute aspect-[24/24] left-0 overflow-clip right-0 top-0" data-name="Lucide Icons">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-10%_-20%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path d="M1 11L6 6L1 1" id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-y-1/2 absolute left-[285px] size-[20px] top-1/2" data-name="Container">
      <Svg />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#f7f9fc] border border-[#cad6ec] border-solid h-[104.295px] left-0 right-0 rounded-[8px] top-0" data-name="Background+Border">
      <Margin1 />
      <Container2 />
      <Container4 />
    </div>
  );
}

function LucideIcons1() {
  return (
    <div className="absolute left-[14px] size-[24px] top-[14px]" data-name="Lucide Icons">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Lucide Icons">
          <path d={svgPaths.p3744ee80} id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#cad6ec] left-0 rounded-[6px] size-[52px] top-0" data-name="Background">
      <LucideIcons1 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute h-[52px] left-[20px] top-[25.15px] w-[68px]" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[19px] left-0 right-[16px] top-0" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[19px] justify-center leading-[0] left-0 text-[#192947] text-[16px] top-[9.5px] w-[181px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Enter Code Number</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[40px] left-0 right-[16px] top-[22.3px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] left-0 text-[#192947] text-[12.8px] top-[20px] w-[181px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Manually type the ID code</p>
        <p className="leading-[20px]">for your unit or product</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="-translate-y-1/2 absolute h-[62.295px] left-[88px] right-[40px] top-1/2" data-name="Container">
      <Heading1 />
      <Container6 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-0 overflow-clip size-[20px] top-0" data-name="SVG">
      <div className="absolute aspect-[24/24] left-0 overflow-clip right-0 top-[-0.29px]" data-name="Lucide Icons">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-10%_-20%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path d="M1 11L6 6L1 1" id="Vector" stroke="var(--stroke-0, #192947)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="-translate-y-1/2 absolute left-[285px] size-[20px] top-1/2" data-name="Container">
      <Svg1 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#f7f9fc] border border-[#cad6ec] border-solid h-[104.295px] left-0 right-0 rounded-[8px] top-[120.29px]" data-name="Background+Border">
      <Margin2 />
      <Container5 />
      <Container7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[224.59px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[272px]" data-name="Margin">
      <Container1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
          <g id="Group">
            <path d={svgPaths.p114bcf80} id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2928ef00} id="Vector_2" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute left-0 overflow-clip size-[18px] top-0" data-name="SVG">
      <Group />
    </div>
  );
}

function Container9() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[18px] top-1/2" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="-translate-y-1/2 absolute h-[18px] left-[28px] top-1/2 w-[259px]" data-name="Heading 4">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-0 text-[#f7f9fc] text-[16px] top-[9px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Having trouble with your code?</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[18px] left-[19px] right-[19px] top-[19px]" data-name="Container">
      <Container9 />
      <Heading2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[63px] left-[19px] right-[19px] top-[49px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[63px] justify-center leading-[0] left-0 text-[#f7f9fc] text-[12.8px] top-[31.5px] w-[287px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">If your QR code isn’t scanning or shows an error, you can request assistance, or show this issue to your leasing manager.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[18px] left-[19px] top-[124px] w-[287px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-0 text-[#cad6ec] text-[16px] top-[9px] w-[200.64px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Get help</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#284271] border border-[#cad6ec] border-solid h-[163px] left-[24px] right-[24px] rounded-[8px] top-[536.59px]" data-name="Background">
      <Container8 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute inset-[64px_0_40px_0]" data-name="Main">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[24px] text-[#f7f9fc] text-[25px] top-[70px] w-[327px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[36px]">Let’s set up your home</p>
      </div>
      <Container />
      <Margin />
      <Background2 />
    </div>
  );
}

function Header() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#192947] content-stretch flex h-[64px] items-center justify-between left-[calc(50%-0.5px)] px-[24px] py-[16px] top-0 w-[374px]" data-name="Header">
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
        <p className="leading-[20px]">Home Setup</p>
      </div>
    </div>
  );
}

export default function MultiFamilyConnect() {
  return (
    <div className="bg-[#0a111d] relative size-full" data-name="Multi-family connect">
      <Main />
      <Header />
    </div>
  );
}