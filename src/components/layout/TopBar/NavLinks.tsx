import Link from 'next/link';
import { NAV_LINKS } from '@/constants';

interface NavLinksProps {
  pathname: string;
}

export default function NavLinks({ pathname }: NavLinksProps) {
  const isActive = (href: string) => pathname === href;

  return (
    <div className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg justify-around font-bold w-full">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition-colors whitespace-nowrap ${isActive(link.href)
            ? 'text-primary'
            : 'text-gray-300 hover:text-white'
            }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
