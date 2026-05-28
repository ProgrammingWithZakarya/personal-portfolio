import clientNameImg1 from '../assets/Client-Name1.png';
import clientNameImg2 from '../assets/Client-Name2.png';
import clientNameImg3 from '../assets/Client-Name3.png';
import clientNameImg4 from '../assets/Client-Name4.png';
import QuotsIcons from '../icons/quots';

const data = [
  {
    id: 1,
    title: 'Client Name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: clientNameImg1,
  },
  {
    id: 2,
    title: 'Client Name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: clientNameImg2,
  },
  {
    id: 3,
    title: 'Client Name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: clientNameImg3,
  },
  {
    id: 4,
    title: 'Client Name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: clientNameImg4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-[#FFFFFF]">
      <div className="flex flex-col items-center justify-center py-40">
        <h1 className="text-4xl font-extrabold">Testimonials</h1>
        <p className="flex h-12 w-100 gap-2.5 py-2.5 text-xs font-light text-[#9C9C9C] [word-spacing:7px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-15 grid grid-cols-2 gap-x-7.5 gap-y-15.5">
          {data.map((testimonial) => (
            <div className="rounded-md bg-linear-to-r from-[#9C9C9C] to-black p-px">
              <div className="relative h-53 w-111 rounded-md bg-black p-10">
                <div className="absolute -top-3 left-6 z-10 text-xl">
                  <QuotsIcons />
                </div>
                <p className="text-xs leading-8 text-zinc-400">
                  {testimonial.description}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    className="size-12.5 rounded-full object-cover"
                  />
                  <h3 className="text-2xl font-semibold">{testimonial.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
