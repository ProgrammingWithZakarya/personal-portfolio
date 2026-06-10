import ArrowRightIcon from '../icons/arrow-right';
import MaskgroupImg from '../assets/Maskgroup.png';
export default function CaseStudies() {
  return (
    <>
      <header className="flex flex-col items-center justify-center py-20">
        <h1 className="h-10 text-3xl font-bold text-[#080808]">Case Studies</h1>
        <p className="mt-4 flex h-16 w-142 gap-2.5 px-4 font-mono text-pretty text-[#9C9C9C]">
          Solving user & business problems since last 15+ years. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
      </header>
      <section className="odd:flex h-dvh py-14">
        <div className='container flex flex-col gap-y-20'>
        <div className="mx-auto flex justufy-center">
          <div className="">
            <span className="px-3 rounded-lg bg-[#FFF6E9] text-[#FFA217]">Fintech</span>
            <h1 className=" text-2xl font-extrabold text-[#080808] mt-5">
              Work name here
            </h1>
            <p className="mt-2.5 mb-10 max-w-123 font-mono text-pretty text-[#9C9C9C] [word-spacing:1px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor
              incididunt ut labore et dolore magna.
            </p>
            <button className="inline-flex cursor-pointer items-center gap-2.5 rounded-md bg-[#FFA217] px-16 py-5 font-mono text-base font-bold text-white shadow-xl shadow-[#FFA217]/30 outline -outline-offset-1 outline-[#c77f12] transition-colors hover:bg-[#FFA217]">
              View case study
              <span className="text-xs">
                <ArrowRightIcon />
              </span>
            </button>
          </div>
          {/* img */}
          <div>
          <img src={MaskgroupImg} alt="MaskgroupImg" className="w-111.25 h-75 rounded-lg object-cover" />
          </div>
        </div>
        <div className="mx-auto flex  justufy-center">
          <div className="">
            <span className="px-3 rounded-lg bg-[#FFF6E9] text-[#FFA217]">Fintech</span>
            <h1 className=" text-2xl font-extrabold text-[#080808] mt-5">
              Work name here
            </h1>
            <p className="mt-2.5 mb-10 max-w-123 font-mono text-pretty text-[#9C9C9C] [word-spacing:1px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor
              incididunt ut labore et dolore magna.
            </p>
            <button className="inline-flex cursor-pointer items-center gap-2.5 rounded-md bg-[#FFA217] px-16 py-5 font-mono text-base font-bold text-white shadow-xl shadow-[#FFA217]/30 outline -outline-offset-1 outline-[#c77f12] transition-colors hover:bg-[#FFA217]">
              View case study
              <span className="text-xs">
                <ArrowRightIcon />
              </span>
            </button>
          </div>
          {/* img */}
          <div>
          <img src={MaskgroupImg} alt="MaskgroupImg" className="w-111.25 h-75 rounded-lg object-cover" />
          </div>
        </div>
        <div className="mx-auto mb-35 flex justufy-center">
          <div className="">
            <span className="px-3 rounded-lg bg-[#FFF6E9] text-[#FFA217]">Fintech</span>
            <h1 className=" text-2xl font-extrabold text-[#080808] mt-5">
              Work name here
            </h1>
            <p className="mt-2.5 mb-10 max-w-123 font-mono text-pretty text-[#9C9C9C] [word-spacing:1px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor
              incididunt ut labore et dolore magna.
            </p>
            <button className="inline-flex cursor-pointer items-center gap-2.5 rounded-md bg-[#FFA217] px-16 py-5 font-mono text-base font-bold text-white shadow-xl shadow-[#FFA217]/30 outline -outline-offset-1 outline-[#c77f12] transition-colors hover:bg-[#FFA217]">
              View case study
              <span className="text-xs">
                <ArrowRightIcon />
              </span>
            </button>
          </div>
          {/* img */}
          <div>
          <img src={MaskgroupImg} alt="MaskgroupImg" className="w-111.25 h-75 rounded-lg object-cover" />
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
