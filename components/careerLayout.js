import Career from "../contents/career";
import Job from "./job";

const classes = {
  wrap: "mt-4",
  titleText: "text-2xl tracking-tighter font-normal",
  periodText: "text-xl text-gray-400 font-light mb-4",
  smallText: "text-sm text-gray-400 font-light",
};

export default function CareerLayout(children) {
  return (
    <div className={classes.wrap}>
      {Career.map((item, idx) => (
        <div key={idx}>
          <p key={idx} className={classes.titleText}>
            {item.companyName}
          </p>
          <p key={idx} className={classes.periodText}>
            {item.period}
          </p>
        </div>
      ))}
      <Job />
    </div>
  );
}
