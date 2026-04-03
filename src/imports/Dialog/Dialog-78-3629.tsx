import svgPaths from "./svg-xk7ms1evie";

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f7f9fc] text-[18px]">
        <p className="leading-none">Enter Code</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Lucide Icons">
        <div className="absolute inset-1/4" data-name="Vector">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <path d={svgPaths.p2e230080} id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Dialog Header">
      <Frame />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[14px] w-full">
        <p className="leading-[20px]">Manually type the ID code for your unit or Armada Power Product</p>
      </div>
    </div>
  );
}

function DialogFooter() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Dialog Footer">
      <div className="content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">Cancel</p>
        </div>
      </div>
      <div className="bg-[#4b75c0] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">Confirm Code</p>
        </div>
      </div>
    </div>
  );
}

export default function Dialog() {
  return (
    <div className="bg-[#0a111d] content-stretch flex flex-col gap-[16px] items-end justify-center p-[24px] relative rounded-[8px] size-full" data-name="Dialog">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <DialogHeader />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Field">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[14px] w-full">
          <p className="leading-none">Code Number</p>
        </div>
        <div className="bg-[#0a1a2e] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
          <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[4px] relative size-full">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[#cad6ec] text-[14px] whitespace-nowrap">
                <p className="leading-[24px]">XXXXXX-XX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogFooter />
    </div>
  );
}