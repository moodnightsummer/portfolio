const data = [
  {
    companyName: "에이아이에스",
    period: "2021-12 ~ 2023-12",
    occupation: "백엔드 개발자",
    link: "ais",
    rank: "주임",
    description: [
      "스마트팜 스타트업인 에이아이에스에서 주로 서버 관리 및 API 개발, 비즈니스 로직 업무를 수행하였습니다.",
    ],
    workExperience: [
      "개발팀의 일원으로 참여하여, 주로 서버 관리 및 API 개발, 비즈니스 로직 업무를 수행하였습니다.",
      "작물별 의사결정 알고리즘의 정확도를 향상시키기 위해 Linux 환경에서 프로그램을 실행하고 데이터의 유지보수를 담당했습니다. 또한, Zapier를 활용하여 Gitlab에서 이슈가 생성될 때 Slack 메시지가 전송되는 자동화 시스템을 구축하여 일종의 개발 알림 시스템처럼 사용하도록 하였습니다.",
      "문자 인증 API의 구현에서는 해당 기능의 특성을 고려하여 일시적으로 생성되고, 인증 만료 시간 동안만 유지되어야 하는 요구사항을 충족하기 위해 NoSQL인 Redis를 도입하여 구현하였습니다.",
      "NodeJS 기반의 환경에서의 개발 경험을 바탕으로 Express와 NestJS 프레임워크를 사용하여 프로젝트를 구축하였습니다. Sequelize와 TypeORM을 통한 ORM 라이브러리 사용 및 오픈 API 및 외부 API를 통한 데이터 정제 경험을 보유하고 있습니다.",
      "GitLab의 CI/CD를 활용하여 배치 서비스를 구현하고, JWT와 Redis를 이용하여 AT와 RT를 관리하여 로그인 기능을 구현하였습니다. 이 과정에서 FCM 토큰이 변경될 때의 비동기 로직 지연 현상을 최소화하기 위해 동기 로직으로 변경하여 프로세스의 효율성을 향상시키고 응답 시간을 최적화하였습니다.",
      "도커 컨테이너 환경에서 Next.js 프로젝트를 배포하고, Jest 라이브러리를 활용하여 E2E 테스트를 진행한 경험이 있습니다. 또한, 작물별 의사결정 알고리즘 로직 업무 프로세스를 도면으로 변경하여 보다 명확하고 수정 및 추가가 용이한 확장성 있는 구조로 개선한 경험이 있습니다.",
    ],
    history: [
      {
        workPeriod: "2022.01 ~ 2022.02",
        title: "문자 인증 기능 개발",
        people: "2명",
        member: "Backend 2명",
        skills: ["Express", "Redis"],
        jobDescription:
          "사내 앱/웹에서 사용되는 문자 인증 기능 개발에 참여하여 프로젝트 아키텍처 설계와 Redis 세션 관리를 담당하였습니다.",
      },
      {
        workPeriod: "2022.02 ~ 2022.04",
        title: "잘키움 앱 백엔드 개발",
        people: "6명",
        member: "Backend 3명, Frontend 2명, Designer 1명",
        skills: ["Express", "Sequelize", "MariaDB"],
        jobDescription:
          "날씨 기능을 개발하기 위해 기상청, 웨더아이, 분 단위 기상대 API를 사용하여 데이터를 가공한 경험이 있으며, 농업, 알림 API를 담당하여 개발하였습니다.",
      },
      {
        workPeriod: "2022.04 ~ 2022.06",
        title: "잘키움 앱 백엔드 개발",
        people: "3명",
        member: "Backend 3명",
        skills: ["Express", "Sequelize", "MariaDB", "Gitlab CI/CD"],
        jobDescription:
          "작물별 의사결정 관련 비즈니스 로직 업무 프로세스를 텍스트 방식에서 Draw.io 방식으로 개선하였고, " +
          "관수, 시비 비즈니스 로직과 서버 내 텍스트 파일을 생성 및 수정하는 로직을 담당하여 개발하였습니다. \n" +
          "Gitlab CI/CD로 해당 기능들을 자동화 처리하여 1일 단위로 의사결정을 데이터베이스에 저장하도록 구현하였습니다.",
      },
    ],
  },
];

export default data;
