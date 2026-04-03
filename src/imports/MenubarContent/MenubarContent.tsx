import svgPaths from "./svg-xwztmosx2d";

function Menu() {
  return (
    <div className="bg-[#0a111d] relative shrink-0 w-full" data-name="Menu">
      <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
        <div className="h-[32px] relative rounded-[6px] shrink-0 w-full" data-name="Menu Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons">
                <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
                  <div className="absolute inset-[-6.82%_-4.69%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 8.33333">
                      <path d={svgPaths.p38cbd780} id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f7f9fc] text-[14px]">
                <p className="leading-[20px]">Ap 4B - 123 Maple Street</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuGroup() {
  return (
    <div className="bg-[#0a111d] relative shrink-0 w-full" data-name="Menu Group">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Menu />
      </div>
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Menu1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu">
      <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
        <div className="h-[32px] relative rounded-[6px] shrink-0 w-full" data-name="Menu Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[6px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons">
                <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
                  <div className="absolute inset-[-6.82%_-4.69%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 8.33333">
                      <path d={svgPaths.p38cbd780} id="Vector" stroke="var(--stroke-0, #18181B)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f7f9fc] text-[14px]">
                <p className="leading-[20px]">Other house</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuGroup1() {
  return (
    <div className="bg-[#0a111d] relative shrink-0 w-full" data-name="Menu Group">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Menu1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DotFat() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[8px] top-1/2" data-name="dot-fat">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="dot-fat">
          <circle cx="4" cy="4" fill="var(--fill-0, #18181B)" id="dot" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Menu2() {
  return (
    <div className="bg-[#0a111d] relative shrink-0 w-full" data-name="Menu">
      <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
        <div className="bg-[#0a111d] h-[32px] relative rounded-[6px] shrink-0 w-full" data-name="Menu Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[6px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons">
                <DotFat />
              </div>
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f7f9fc] text-[14px]">
                <p className="leading-[20px]">Other House 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuGroup2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Group">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Menu2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DotFat1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[8px] top-1/2" data-name="dot-fat">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="dot-fat">
          <circle cx="4" cy="4" fill="var(--fill-0, #18181B)" id="dot" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Menu3() {
  return (
    <div className="bg-[#0a111d] relative shrink-0 w-full" data-name="Menu">
      <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
        <div className="bg-[#0a111d] h-[32px] relative rounded-[6px] shrink-0 w-full" data-name="Menu Item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center pl-[32px] pr-[8px] py-[6px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons">
                <DotFat1 />
              </div>
              <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f7f9fc] text-[14px]">
                <p className="leading-[20px]">Other House 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuGroup3() {
  return (
    <div className="bg-[#0a111d] relative shrink-0 w-full" data-name="Menu Group">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Menu3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#cad6ec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function MenubarContent() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="Menubar Content">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <MenuGroup />
        <MenuGroup1 />
        <MenuGroup2 />
        <MenuGroup3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}