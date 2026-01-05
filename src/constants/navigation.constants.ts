export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: '홈' },
  { href: '/service', label: '서비스 소개' },
  { href: '/guide', label: '이용안내' },
  { href: '/mock-vote', label: '모의투표보기' },
  { href: '/support', label: '고객센터' },
];

export const LANGUAGES = ['KO', 'EN'] as const;
export type Language = typeof LANGUAGES[number];
