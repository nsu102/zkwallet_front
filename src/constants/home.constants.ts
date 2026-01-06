// Hero Section Constants
export const HERO_CONTENT = {
  smallTitle: 'INNOVATIVE VOTING SYSTEM',
  mainTitle: {
    line1: '모두가 믿을 수 있고, 가장 혁신적인',
    line2: '온라인 투표 서비스',
  },
  buttons: {
    quote: {
      label: '견적보기',
      href: '/requestquote',
    },
    contact: {
      label: '도입문의',
      href: 'mailto:contact@zkrypto.com',
    },
  },
  bottomTabs: [
    {
      label: '투표개설',
      href: 'https://admin.zkvoting.com/login',
    },
    {
      label: '투표개설관리',
      href: 'https://admin.zkvoting.com/login',
    },
    {
      label: '이용내역확인',
      href: 'https://admin.zkvoting.com/login',
    },
  ],
} as const;

// Intro Section Constants
export const INTRO_CONTENT = {
  subtitle: 'zkVoting 만의 차별화된 블록체인 온라인 투표 시스템을 만나보세요!',
  title: 'zkVoting 만의 블록체인 온라인 투표 시스템',
} as const;

// Features Section Constants
export const FEATURES_CONTENT = [
  {
    title: '블록체인 저장',
    subtitle: '투표 조작이 걱정되나요?',
    description:
      '유권자의 명단부터 투표데이터까지\n변경할 수 없도록 블록체인에 저장해요.',
    imageSrc: '/icons/home/블록체인저장.svg',
    imageAlt: '블록체인 저장 일러스트',
    link: '/service#integrity',
    buttonLabel: '자세히보기',
    isLeftAligned: true,
  },
  {
    title: '영지식증명 검증',
    subtitle: '선거 결과가 의심되나요?',
    description:
      '알아볼 수 없도록 암호화 된 투표데이터를 \n영지식 증명(Zero-Knowledge Proof)으로 \n정확하게 검증할 수 있어요.',
    imageSrc: '/icons/home/영지식증명검증.svg',
    imageAlt: '영지식증명 검증 일러스트',
    link: '/service#end',
    buttonLabel: '자세히보기',
    isLeftAligned: false,
  },
  {
    title: '믿을 수 있는 시스템',
    subtitle: '2년 연속 CES 최고혁신상 수상',
    description:
      '2023년 zkVoting모바일APP,2024년 현장투표시스템(Poll station)으로수상해서 신뢰할 수 있는 기술로 인정받았어요.',
    imageSrc: '/icons/home/home_ces.avif',
    imageAlt: 'ces 검증',
    link: '/service#best',
    buttonLabel: '자세히보기',
    isLeftAligned: true,
  },
];

// Voting Features Section Constants
export const VOTING_FEATURES_SECTION = {
  title: '다양한 기능을 지원하는 zkVoting',
  subtitle: '아래 투표 방법을 선택하여 지원되는 기능을 확인해보세요',
  tabs: [
    { id: 'online', label: '온라인투표' },
    { id: 'offline', label: '현장투표' },
  ],
  offlineMessage: '현장투표 기능은 추후 업데이트될 예정입니다',
} as const;

export const DIVERSE_VOTING_FEATURES = {
  title: '다양한 투표 기능 지원',
  features: [
    {
      icon: '/icons/home/다양한 투표 방식.avif',
      title: '다양한 투표 방식',
      description: '찬반·선택(중복), 선호·채점,\n점수 투표 가능',
    },
    {
      icon: '/icons/home/다양한 유전자 투표인증.avif',
      title: '다양한 유권자 보안인증',
      description: '개인정보공용, 간편인증,\n통신사PASS인증 등',
    },
    {
      icon: '/icons/home/복수소속.avif',
      title: '복수소속',
      description: '유권자에게 2개 이상의 소속에\n배정할 수 있는 기능',
    },
    {
      icon: '/icons/home/가중치투표.avif',
      title: '가중치 투표',
      description: '소속 단위별 투표권의\n가중치 부여 기능',
    },
    {
      icon: '/icons/home/개표키분할.avif',
      title: '개표키분할',
      description: '공정한 개표를 위한 2개 관한의\n3-5명으로 분리 기능',
    },
    {
      icon: '/icons/home/의결정족수.avif',
      title: '의결정족수',
      description: '투표 안건이 가결될 수 있는\n최소 구성원/투표결과',
    },
  ],
} as const;

export const ACCURATE_VOTING_FEATURES = {
  title: '정확하고 투명한 투표를 위한 기능 지원',
  features: [
    {
      icon: '/icons/home/투표진행현황.avif',
      title: '투표진행현황',
      description: '실시간 투표율, 투표소홀\n확인할 수 있는 대시보드',
    },
    {
      icon: '/icons/home/투개표검증.avif',
      title: '투·개표 검증',
      description: '일은전히 블록체인2 투표데이터를\n재조사업로드로 유효성 검증',
    },
    {
      icon: '/icons/home/참관인.avif',
      title: '참관인',
      description: '투표관계자, 개표과정 수행법관을\n관리자전달대화 관한 부여',
    },
  ],
} as const;

// Pricing Section Constants
export const PRICING_SECTION = {
  title: '나에게 맞는 플랜을 선택해보세요',
  plans: [
    {
      name: 'Basic Plan',
      price: '70,000원',
      description: '100명까지 고정 요금 적용',
      buttonLabel: '자세히보기',
      buttonLink: '/requestquote',
    },
    {
      name: 'Growth Plan',
      price: '인당 700원',
      description: '100명 초과 시 인원 당 요금 과금',
      buttonLabel: '자세히보기',
      buttonLink: '/requestquote',
    },
  ],
} as const;

// Footer Constants
export const FOOTER_CONTENT = {
  company: {
    name: 'zkVoting',
    address: '서울특별시 성동구 왕십리로 222 한양종합기술연구원 HIT 321호',
    ceo: '대표이사:우영욱',
    businessNumber: '사업자등록번호 : 534-81-02121',
    email: 'contact@zkrypto.com',
    copyright: 'Copyright©2021 zkrypto.inc. All rights reserved.',
    certification: '정보보호제품 신속확인 인증 확득',
  },
  links: [
    { label: '이용약관', href: '/terms' },
    { label: '개인정보 처리방침', href: '/privacy' },
    { label: '제휴문의', href: 'mailto:contact@zkrypto.com' },
  ],
  social: [
    { name: 'YouTube', icon: 'youtube', href: '#' },
    { name: 'LinkedIn', icon: 'linkedin', href: '#' },
    { name: 'X', icon: 'x', href: '#' },
    { name: 'RSS', icon: 'rss', href: '#' },
  ],
} as const;
