export default function Dialog() {
  return (
    <div className="bg-[#0a111d] content-stretch flex flex-col gap-[16px] items-end justify-center p-[24px] relative rounded-[8px] size-full" data-name="Dialog">
      <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Dialog Header">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#f7f9fc] text-[18px]">
            <p className="leading-none">Activate Bypass Mode?</p>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#cad6ec] text-[14px] w-full">
          <p className="leading-[20px] whitespace-pre-wrap">
            Bypass Mode temporarily overrides energy optimization to heat your water heater normally.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            Use this when you need more hot water quickly.
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Dialog Footer">
        <div className="content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
          <div aria-hidden="true" className="absolute border border-[#cad6ec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[14px] whitespace-nowrap">
            <p className="leading-[24px]">Cancel</p>
          </div>
        </div>
        <div className="bg-[#7f1d1d] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="button">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f7f9fc] text-[14px] whitespace-nowrap">
            <p className="leading-[24px]">Activate Bypass</p>
          </div>
        </div>
      </div>
    </div>
  );
}