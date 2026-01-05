import { Language } from '@/constants';

interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ language, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onLanguageChange('KO')}
        className={`flex items-center space-x-2 px-3 py-1 rounded-lg border-2 transition-all ${language === 'KO'
            ? 'border-border-active bg-gray-700/50'
            : 'border-border-inactive bg-gray-700/30 hover:border-gray-500'
          }`}
      >
        <span className="text-xl">🇰🇷</span>
        <span className={`font-semibold ${language === 'KO' ? 'text-white' : 'text-gray-400'}`}>
          KO
        </span>
      </button>

      <button
        onClick={() => onLanguageChange('EN')}
        className={`flex items-center space-x-2 px-3 py-1 rounded-lg border-2 transition-all ${language === 'EN'
            ? 'border-border-active bg-gray-700/50'
            : 'border-border-inactive bg-gray-700/30 hover:border-gray-500'
          }`}
      >
        <span className="text-xl">🇺🇸</span>
        <span className={`font-semibold ${language === 'EN' ? 'text-white' : 'text-gray-400'}`}>
          EN
        </span>
      </button>
    </div>
  );
}
