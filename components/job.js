import Career from "../contents/career";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const classes = {
  wrap: "mt-4",
  titleText: "text-xl tracking-tighter font-normal",
  periodText: "text-lg text-gray-400 font-light mb-4",
  smallText: "text-sm text-gray-800",
  miniTitleText: "text-normal text-gray-800 font-bold mr-4",
  jobText: "text-normal text-gray-600 mb-1",
};

export default function Job() {
  return (
    <div className={classes.wrap}>
      {Career.map((item, idx) => (
        <div key={idx}>
          {item.history.map((result, index) => (
            <div key={index} className="mb-10">
              <p className={classes.titleText}>{result.title}</p>
              <p className={classes.periodText}>{result.workPeriod}</p>
              <div className="mb-4">
                <div className="flex items-center">
                  <p className={classes.miniTitleText}>팀원</p>
                  <p className={classes.smallText}>{result.people}</p>
                </div>
                <div className="flex items-center">
                  <p className={classes.miniTitleText}>구성</p>
                  <p className={classes.smallText}>{result.member}</p>
                </div>
                <div className="flex items-center">
                  <p className={classes.miniTitleText}>기술</p>
                  <p className={classes.smallText}>
                    {result.skills.join(", ")}
                  </p>
                </div>
              </div>
              {result.jobDescription.map((job, index) => (
                <p key={index} className={classes.jobText}>
                  <span className="mr-3">
                    <FontAwesomeIcon icon={faPlayCircle} />
                  </span>
                  {job}
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
