import ArrowRightIcon from '../icons/arrow-right';

export default function GetInfo() {
  return (
    <section className="flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold">Get In Touch</h2>
        <p className="w-140 py-5 text-[14px] font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mb-10 flex flex-col gap-3 py-10">
          <h5>Email</h5>
          <input
            type="email"
            placeholder="Please enter your email"
            className="h-9 w-80 bg-white text-[#757575]"
          />

          <h5>Mobile</h5>
          <input
            type="number"
            placeholder="Enter mobile"
            className="h-9 w-80 bg-white text-[#757575]"
          />

          <h5>Message</h5>
          <input
            type="text"
            placeholder="Enter your message"
            className="h-30 w-80 bg-white text-[#757575]"
          />
          <button className="flex h-9 w-80 cursor-pointer items-center justify-center gap-2.5 rounded-md bg-[#3F8E00] font-mono text-base font-bold text-white shadow-xl shadow-[#62BA1B]/30 outline -outline-offset-1 outline-[#62BA1B] transition-colors hover:bg-[#2D6B00]">
            Submit
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
