import svgPaths from "./svg-dg0hnl2eh0";

export default function AwayModeButton() {
  return (
    <button className="bg-[#183d64] content-stretch cursor-pointer flex gap-[12px] items-start pb-[24.2px] pt-[24.19px] px-[17px] relative rounded-[8px] size-full" data-name="Away mode button">
      <div aria-hidden="true" className="absolute border border-[#7695cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-[#192947] relative rounded-[6px] shrink-0 size-[36px]" data-name="Background">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Lucide Icons">
            <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-2.63%_-2.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
                  <path d={svgPaths.p3b0e8b80} id="Vector" stroke="var(--stroke-0, #F7F9FC)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold items-start leading-[0] pb-[0.69px] relative text-left w-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[#f7f9fc] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Away Mode Active</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#4b75c0] text-[10.24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Tap to return to Home mode</p>
          </div>
        </div>
      </div>
    </button>
  );
}