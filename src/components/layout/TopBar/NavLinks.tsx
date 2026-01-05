import Link from 'next/link';
import { NAV_LINKS } from '@/constants';

interface NavLinksProps {
  pathname: string;
}

export default function NavLinks({ pathname }: NavLinksProps) {
  const isActive = (href: string) => pathname === href;

  return (
    <div className="hidden text-lg font-bold md:flex items-center space-x-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition-colors ${
            isActive(link.href)
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
