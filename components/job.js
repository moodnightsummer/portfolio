import Career from "../contents/career";

const classes = {
  wrap: "mt-4",
  titleText: "text-xl tracking-tighter font-normal",
  periodText: "text-lg text-gray-400 font-light mb-4",
  smallText: "text-sm text-gray-800 font-light mb-4",
  normalText: "text-normal text-gray-800",
};

export default function Job() {
  return (
    <div className={classes.wrap}>
      {Career.map((item, idx) => (
        <div key={idx}>
          {item.history.map((result, index) => (
            <div key={index} className={classes.wrap}>
              <p key={index} className={classes.titleText}>
                {result.title}
              </p>
              <p key={index} className={classes.periodText}>
                {result.workPeriod}
              </p>
              <p key={index} className={`${classes.normalText} flex-auto`}>
                팀원 : {result.people}
              </p>
              <p key={index} className={`${classes.normalText} flex-auto`}>
                구성원 : {result.member}
              </p>
              <p key={index} className={classes.smallText}>
                사용 기술 : {result.skills.join(", ")}
              </p>
              <p key={index} className={classes.normalText}>
                {result.jobDescription}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
