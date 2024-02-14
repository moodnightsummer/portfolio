// 컨테이너
export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">신재일 포트폴리오</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">홈</a>
          <a className="mr-5 hover:text-gray-900">프로젝트</a>
          <a className="mr-5 hover:text-gray-900">연락하기</a>
        </nav>
      </div>
    </header>
  );
}
