import About from "./about";
import Contact from "./contact";

export default function Introduction() {
  return (
    <div className="flex justify-center min-screen m-[20px]">
      <About />
      <Contact />
    </div>
  );
}
