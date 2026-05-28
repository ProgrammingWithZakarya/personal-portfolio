import BeIcon from '../icons/be';
import LinkedInIcon from '../icons/linkedin';
import TwitterIcon from '../icons/twitter';

const links = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Case Studies',
    href: '#',
  },
  {
    name: 'Testimonials',
    href: '#',
  },
  {
    name: 'Recent work',
    href: '#',
  },
  {
    name: 'Get In Touch',
    href: '#',
  },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 container mx-auto flex h-14 items-center gap-1 rounded-b-lg bg-[#1B1B1B] px-24 text-[#9C9C9C]">
      {/* links */}
      <div className="flex grow items-center justify-start gap-17.5">
        {links.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </div>

      {/* icons */}
      <div className="flex items-center gap-6 text-base text-white">
        <LinkedInIcon />
        <BeIcon />
        <TwitterIcon />
      </div>
    </header>
  );
}
