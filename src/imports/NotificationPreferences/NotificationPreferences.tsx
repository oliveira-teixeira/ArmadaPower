function Header() {
  return (
    <div className="bg-[#192947] content-stretch flex h-[64px] items-center justify-between px-[24px] py-[16px] relative shrink-0 w-[375px]" data-name="Header">
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
        <p className="leading-[20px]">Notification preferences</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">Delivery Methods</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] right-0 top-[-4px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] w-[285.52px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Choose how you want to receive alerts and updates from Armada Power.</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Margin">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Push Notifications</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Receive real-time alerts on your</p>
        <p className="leading-[20px]">device</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#002460] h-[30px] relative rounded-[15px] shrink-0 w-[50px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[22px] pr-[2px] py-[2px] relative size-full">
        <div className="bg-[#f7f9fc] rounded-[13px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] shrink-0 size-[26px]" data-name="Background+Shadow" />
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
          <Background />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Email Notifications</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Receive updates and summaries via</p>
        <p className="leading-[20px]">email</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#cad6ec] content-stretch flex h-[30px] items-center p-[2px] relative rounded-[15px] shrink-0 w-[50px]" data-name="Background">
      <div className="bg-[#f7f9fc] rounded-[13px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] shrink-0 size-[26px]" data-name="Background+Shadow" />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container5 />
          <Background1 />
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
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading />
      <Margin />
      <BackgroundBorder />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">Alert Types</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] right-0 top-[-4px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] w-[279.13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Customize which types of events trigger a</p>
        <p className="leading-[20px]">notification.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0a1a2e] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Critical Alerts</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Device offline, sensor failures, and safety</p>
        <p className="leading-[20px]">warnings. These cannot be disabled.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Container9 />
          <button className="bg-[#002460] cursor-pointer h-[30px] relative rounded-[15px] shrink-0 w-[50px]" data-name="Toggle">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[22px] pr-[2px] py-[2px] relative size-full">
              <div className="bg-white rounded-[13px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] shrink-0 size-[26px]" data-name="Background+Shadow" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Important Events</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Peak energy events and high usage</p>
        <p className="leading-[20px]">spikes</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Container12 />
          <button className="bg-[#002460] cursor-pointer h-[30px] relative rounded-[15px] shrink-0 w-[50px]" data-name="Toggle">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[22px] pr-[2px] py-[2px] relative size-full">
              <div className="bg-white rounded-[13px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] shrink-0 size-[26px]" data-name="Background+Shadow" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Informational Updates</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Schedule changes, eco mode, and</p>
        <p className="leading-[20px]">savings summaries</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container16 />
          <button className="bg-[#cad6ec] block cursor-pointer h-[30px] relative rounded-[40px] shrink-0 w-[50px]" data-name="Toggle">
            <div className="absolute bg-white left-[2px] rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)] size-[26px] top-[2px]" data-name="Background+Shadow" />
          </button>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <HorizontalBorder1 />
        <HorizontalBorder2 />
        <Container15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading1 />
      <Margin1 />
      <BackgroundBorder1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start px-[4px] relative w-full">
        <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24px]">Quiet Hours</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[4px] right-0 top-[-4px]" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] w-[301px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Mute notifications during specific times.</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Margin">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Enable Quiet Hours</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] opacity-80 relative shrink-0 text-[#192947] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] mb-0">Currently set from 10:00 PM to 7:00</p>
        <p className="leading-[20px]">AM</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[16px] relative w-full">
          <Container20 />
          <button className="bg-[#cad6ec] cursor-pointer h-[30px] relative rounded-[40px] shrink-0 w-[50px]" data-name="Toggle">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <div className="absolute bg-white left-[2px] rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2)] size-[26px] top-[2px]" data-name="Background+Shadow" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#192947] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Schedule</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4b75c0] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">10:00 PM - 7:00 AM</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container25 />
      <Container26 />
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

function Container27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Container23() {
  return (
    <div className="mb-[-0.01px] opacity-50 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container24 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f7f9fc] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[1.01px] pt-px px-px relative rounded-[inherit] w-full">
        <HorizontalBorder3 />
        <Container23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading2 />
      <Margin2 />
      <BackgroundBorder2 />
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-name="Wrap">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Save Preferences
      </p>
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[48px] pt-[24px] px-[20px] relative w-full">
          <Section />
          <Section1 />
          <Section2 />
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

export default function NotificationPreferences() {
  return (
    <div className="bg-[#0a111d] content-stretch flex flex-col items-start relative size-full" data-name="Notification preferences">
      <Header />
      <Main />
    </div>
  );
}