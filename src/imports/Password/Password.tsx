import svgPaths from "./svg-5t1u18ow29";

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
        <p className="leading-[20px]">Change Password</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Update your password to keep your account secure.</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container1 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#0a1a2e] content-stretch flex h-[40px] items-center justify-between px-[12px] py-[4px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[16px] w-[72px]">
        <p className="leading-[normal]">••••••••</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Lucide Icons">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-2.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0009 21">
              <path d={svgPaths.p1218e640} id="Vector" stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]" data-name="Field">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#f7f9fc] text-[12.8px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Current Password</p>
      </div>
      <Input />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Field />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#0a1a2e] content-stretch flex h-[40px] items-center justify-between px-[12px] py-[4px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Enter new password</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Lucide Icons">
        <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-3.57%_-2.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.001 14.9988">
              <g id="Vector">
                <path d={svgPaths.p19bc64f0} stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p1eac3700} stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]" data-name="Field">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#f7f9fc] text-[12.8px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">New Password</p>
      </div>
      <Input1 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Field1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[13px] w-[150.58px]">
        <p className="leading-[19.5px]">Password requirements:</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center opacity-80 relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
              <path d={svgPaths.p3088e580} id="Vector" stroke="var(--stroke-0, #F71414)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f7f9fc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        At least 8 characters
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center opacity-80 relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
              <path d={svgPaths.p3088e580} id="Vector" stroke="var(--stroke-0, #F71414)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f7f9fc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        At least one uppercase letter
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center opacity-80 relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
              <path d={svgPaths.p1885ad80} id="Vector" stroke="var(--stroke-0, #2FC955)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f7f9fc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        At least one number
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center opacity-80 relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
              <path d={svgPaths.p1885ad80} id="Vector" stroke="var(--stroke-0, #2FC955)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#f7f9fc] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`At least one special character (!@#$%&*)`}</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[335px]" data-name="Container">
      <Container3 />
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#0a1a2e] content-stretch flex h-[40px] items-center justify-between px-[12px] py-[4px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cad6ec] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Enter new password</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Lucide Icons">
        <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-3.57%_-2.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.001 14.9988">
              <g id="Vector">
                <path d={svgPaths.p19bc64f0} stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p1eac3700} stroke="var(--stroke-0, #CAD6EC)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]" data-name="Field">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#f7f9fc] text-[12.8px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Confirm New Password</p>
      </div>
      <Input2 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Field2 />
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-name="Wrap">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#f7f9fc] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Update Password
      </p>
    </div>
  );
}

function Wrap1() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0" data-name="Wrap">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#4b75c0] text-[12.8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Forgot your Password?
      </p>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-[#4b75c0] min-w-[80px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative w-full">
            <Wrap />
          </div>
        </div>
      </div>
      <div className="min-w-[80px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[12px] py-[8px] relative w-full">
            <Wrap1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[62.5px] relative shrink-0 w-full" data-name="Container">
      <Margin />
      <Margin1 />
      <Margin2 />
      <Margin3 />
      <Margin4 />
      <Margin5 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[749px] relative shrink-0 w-full" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[112px] pt-[24px] px-[20px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default function Password() {
  return (
    <div className="bg-[#0a111d] content-stretch flex flex-col items-start relative size-full" data-name="Password">
      <Header />
      <Main />
    </div>
  );
}