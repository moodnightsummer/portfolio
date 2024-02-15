import introductions from "../contents/introductions";
const classes = {
  wrap: "mt-4",
};

export default function About() {
  return (
    <div className={classes.wrap}>
      {introductions.map((intro, idx) => (
        <p key={idx}>{intro}</p>
      ))}
    </div>
  );
}
