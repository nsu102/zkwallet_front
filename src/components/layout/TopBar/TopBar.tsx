'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Language } from '@/constants';
import Logo from './Logo';
import NavLinks from './NavLinks';
import LanguageSelector from './LanguageSelector';
import LoginButton from './LoginButton';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

export default function TopBar() {
  //나중에 뭐 전역변수로 하든 i18n을 넣든 perfix를 하든 할 예정입니다. 
  const [language, setLanguage] = useState<Language>('KO');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg border-b border-gray-700">
      <div className="max-w-topbar mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-2 md:gap-4">
          <Logo />

          <NavLinks pathname={pathname} />

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-3">
              <LanguageSelector
                language={language}
                onLanguageChange={setLanguage}
              />

              <LoginButton />
            </div>

            <MobileMenuButton
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>

        <MobileMenu
          isOpen={mobileMenuOpen}
          pathname={pathname}
          language={language}
          onLanguageChange={setLanguage}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </nav>
  );
}
