import ArrowRightIcon from '../icons/arrow-right';
import personImage from '../assets/zhiwar.jpeg';

import ClickupIcon from '../icons/click-up';
import DropboxIcon from '../icons/dropbox';
import PaychexIcon from '../icons/paychex';
import ElasticIcon from '../icons/elastic';
import StripeIcon from '../icons/stripe';

const brandsIcon = [
  { icon: <ClickupIcon />, href: '#' },
  { icon: <DropboxIcon />, href: '#' },
  { icon: <PaychexIcon />, href: '#' },
  { icon: <ElasticIcon />, href: '#' },
  { icon: <StripeIcon />, href: '#' },
];

export default function HeroSection() {
  return (
    <section className="h-dvh bg-black text-white">
      <div className="container mx-auto flex h-full flex-col pt-16 pb-11.25">
        <div className="flex h-full items-center justify-center gap-21.5">
          {/* texts */}
          <div className="">
            <h1 className="text-[44px] font-extrabold">Hey, I'm Zhiwar Mandi</h1>

            <p className="mt-2.5 mb-7 max-w-123 font-mono text-pretty text-[#9C9C9C] [word-spacing:1px]">
              Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button className="inline-flex cursor-pointer items-center gap-2.5 rounded-md bg-[#3F8E00] px-16 py-5 font-mono text-base font-bold text-white shadow-xl shadow-[#62BA1B]/30 outline -outline-offset-1 outline-[#62BA1B] transition-colors hover:bg-[#2D6B00]">
              Let’s get started
              <span className="text-xs">
                <ArrowRightIcon />
              </span>
            </button>
          </div>

          {/* image */}
          <img
            src={personImage}
            alt="Zhiwar Mandi"
            className="size-87.5 rounded-full object-cover"
          />
        </div>

        {/* brands */}
        <div className="px-14">
          <span className="font-mono text-sm font-light">Worked with</span>
          <div className="mt-5 flex items-center justify-between">
            {brandsIcon.map((brand, index) => (
              <a
                key={index}
                href={brand.href}
                className="flex h-15 w-40 items-center justify-center rounded-md border border-[#1B1B1B] text-2xl text-[#9C9C9C] transition-colors hover:text-white"
              >
                {brand.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
