import Link from 'next/link';
import { NAV_LINKS, Language } from '@/constants';
import LanguageSelector from './LanguageSelector';
import LoginButton from './LoginButton';

interface MobileMenuProps {
  isOpen: boolean;
  pathname: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  pathname,
  language,
  onLanguageChange,
  onClose
}: MobileMenuProps) {
  if (!isOpen) return null;

  const isActive = (href: string) => pathname === href;

  return (
    <div className="md:hidden py-4 border-t border-gray-700">
      {/* Language & Login Section */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
        <LanguageSelector
          language={language}
          onLanguageChange={onLanguageChange}
        />
        <LoginButton />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col space-y-4">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`text-lg font-bold transition-colors ${
              isActive(link.href)
                ? 'text-primary'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
