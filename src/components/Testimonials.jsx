import clientNameImg1 from '../assets/Client-Name1.png';
import clientNameImg2 from '../assets/Client-Name2.png';
import clientNameImg3 from '../assets/Client-Name3.png';
import clientNameImg4 from '../assets/Client-Name4.png';

export default function Testimonials() {
  return (
    <section className="bg-[#000] text-[#FFFFFF]">
      <div className="flex flex-col items-center justify-center py-40">
        <h1 className="text-4xl font-extrabold">Testimonials</h1>
        <p className="flex h-12 w-100 gap-2.5 py-2.5 text-xs font-light text-[#9C9C9C] [word-spacing:7px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-7.5">
          <div className="relative mt-15 h-53 w-111 border border-zinc-800 bg-black p-10 text-white">
            <div className="absolute -top-7 left-6 z-10 bg-black px-2 text-7xl leading-none font-bold">
              “
            </div>
            <p className="text-xs leading-8 text-zinc-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={clientNameImg1}
                alt="Client Name"
                className="size-12.5 rounded-full object-cover"
              />
              <h3 className="text-2xl font-semibold">Client Name</h3>
            </div>
          </div>
          <div className="relative mt-15 h-53 w-111 border border-zinc-800 bg-black p-10 text-white">
            <div className="absolute -top-7 left-6 z-10 bg-black px-2 text-7xl leading-none font-bold">
              “
            </div>
            <p className="text-xs leading-8 text-zinc-400">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={clientNameImg2}
                alt="Client Name"
                className="size-12.5 rounded-full object-cover"
              />
              <h3 className="text-2xl font-semibold">Client Name</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-7.5">
          <div className="relative mt-15 h-53 w-111 border border-zinc-800 bg-black p-10 text-white">
            <div className="absolute -top-7 left-6 z-10 bg-black px-2 text-7xl leading-none font-bold">
              “
            </div>
            <p className="text-xs leading-8 text-zinc-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={clientNameImg3}
                alt="Client Name"
                className="size-12.5 rounded-full object-cover"
              />
              <h3 className="text-2xl font-semibold">Client Name</h3>
            </div>
          </div>
          <div className="relative mt-15 h-53 w-111 border border-zinc-800 bg-black p-10 text-white">
            <div className="absolute -top-7 left-6 z-10 bg-black px-2 text-7xl leading-none font-bold">
              “
            </div>
            <p className="text-xs leading-8 text-zinc-400">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={clientNameImg4}
                alt="Client Name"
                className="size-12.5 rounded-full object-cover"
              />
              <h3 className="text-2xl font-semibold">Client Name</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
