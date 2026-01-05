import { Language } from '@/constants';

interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ language, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="flex gap-1.5 md:gap-2">
      <button
        onClick={() => onLanguageChange('KO')}
        className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 rounded-sm border transition-all ${language === 'KO'
          ? 'border-border-active bg-gray-700/50 text-primary'
          : 'border-border-inactive bg-gray-700/30 hover:border-gray-500 text-gray-300'
          }`}
      >
        <span className="text-lg md:text-xl">🇰🇷</span>
        <span className={`text-sm md:text-base`}>
          KO
        </span>
      </button>

      <button
        onClick={() => onLanguageChange('EN')}
        className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 rounded-sm border transition-all ${language === 'EN'
          ? 'border-border-active bg-gray-700/50 text-primary'
          : 'border-border-inactive bg-gray-700/30 hover:border-gray-500 text-gray-300'
          }`}
      >
        <span className="text-lg md:text-xl">🇺🇸</span>
        <span className={`text-sm md:text-base`}>
          EN
        </span>
      </button>
    </div>
  );
}
