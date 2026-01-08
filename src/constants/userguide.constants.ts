export const REGISTRATION_STEPS = [
    {
      number: '1',
      title: '회원가입 신청',
      description: '단체, 기업 등 사업자등록번호가\n있는 경우 회원가입 신청 가능',
    },
    {
      number: '2',
      title: '가입 심사',
      description: '신청 정보, 첨부 서류를 확인하며\n보완 사항이 있을 경우 개별 연락',
    },
    {
      number: '3',
      title: '가입 완료',
      description: '가입 승인 후 zkVoting의\n모든 서비스를 이용 가능',
    },
  ];
  
  export const ADMIN_VOTING_STEPS = [
    {
      number: '1',
      title: '투표 개설',
      description: '투표명, 투표 기간, 예상 유권자 수,\n유권자 본인인증 방법 등 투표 정보 등록',
    },
    {
      number: '2',
      title: '예상 견적 확인',
      description: '투표 개설 설정 정보를 기준으로\n서비스 이용 예상 견적 확인',
    },
    {
      number: '3',
      title: '명부 등록',
      description: '유권자 명부를 엑셀 파일 업로드 또는\n건별 직접 등록 후 명부 마감',
    },
    {
      number: '4',
      title: '투표 시작',
      description: '투표 시작 시, 카카오 알림톡으로\n유권자에게 투표 참여 URL 발송',
    },
    {
      number: '5',
      title: '투표 참여 현황',
      description: '투표 진행 중, 실시간으로 투표수와\n투표율 정보를 관리자 페이지에서 제공',
    },
    {
      number: '6',
      title: '투표 마감',
      description: '종료 시간 경과 시 자동 마감\n(유권자 100% 참여 시 수동 마감 가능)',
    },
    {
      number: '7',
      title: '개표',
      description: '전체 및 후보별 득표수/율 결과 제공\n영지식증명 기술로 결과 검증 가능',
    },
    {
      number: '8',
      title: '이용 수수료 납부',
      description: '이용 내역서 확인 후 세금계산서 발행,\n지정된 계좌로 수수료 입금',
    },
  ];
  
  export const USER_VOTING_STEPS = [
    {
      number: '1',
      title: '스마트폰 로그인',
      description: '수신된 알림톡/SMS URL 접속 후\n설정된 본인인증 방법으로 로그인',
    },
    {
      number: '2',
      title: '투표 참여',
      description: '후보자 및 안건 정보를 확인하고\n원하는 항목 선택 후 참여 완료',
    },
    {
      number: '3',
      title: '나의 투표함 확인',
      description: '트랜잭션 ID, 블록 번호 등 블록체인에\n저장된 내 투표 정보를 직접 확인',
    },
  ];