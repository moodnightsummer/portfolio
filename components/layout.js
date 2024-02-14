import Skill from "./skill";
import About from "./about";
import Header from "./header";
// 컨테이너
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <About />
      <h1>layout</h1>
      <div>{children}</div>
      <Skill />
    </>
  );
}
