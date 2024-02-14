import Skill from "./skill";
import Introduction from "./introductions";
import Header from "./header";
// 컨테이너
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Introduction />

      <div>{children}</div>
      <Skill />
    </>
  );
}
