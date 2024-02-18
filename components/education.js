import education from "@/contents/education";

const classes = {
  profileWrap: "grid items-center gap-y-10 lg:max-w-7xl",
  wrap: "mt-4",
  smallText: "mb-2 text-sm text-gray-500",
};

export default function Education() {
  return (
    <>
      <div className={classes.wrap}>
        {education.map((item, idx) => (
          <span key={idx}>
            <p key={idx}>
              {item.name} | {item.department}
            </p>
            <p key={idx} className={classes.smallText}>
              {item.period}
            </p>
          </span>
        ))}
      </div>
    </>
  );
}
