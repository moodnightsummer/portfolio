import introductions from "../contents/introductions";
import contacts from "../contents/contact";

// 컨테이너
const classes = {
  profileWrap: "grid items-center gap-y-10 lg:max-w-7xl",
  wrap: "mt-4",
  contactName: "font-bold text-default mr-2",
};

export default function About() {
  return (
    <div className="w-[600px] p-4">
      <h2 className="h2-global">About Me</h2>
      <p className="leading-relaxed">
        <div className={classes.wrap}>
          {introductions.map((intro, idx) => (
            <p key={idx}>{intro}</p>
          ))}
        </div>
      </p>
      <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
    </div>
  );
}