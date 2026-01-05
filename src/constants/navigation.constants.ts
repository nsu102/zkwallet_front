export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: '홈' },
  { href: '/service', label: '서비스 소개' },
  { href: '/userguide', label: '이용안내' },
  { href: '/requestquote', label: '모의견적보기' },
  { href: '/customercenter', label: '고객센터' },
];

export const LANGUAGES = ['KO', 'EN'] as const;
export type Language = typeof LANGUAGES[number];
