import skills from "../contents/skills";
import SubTitle from "./subTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const classes = {
  profileWrap: "grid items-center gap-y-10 lg:max-w-7xl",
  wrap: "mt-4",
  contactName: "font-bold text-default mr-2",
};

export default function Skill() {
  return (
    <>
      <h3 className={SubTitle}>사용하는 언어와 프레임워크</h3>
      <div className={classes.wrap}>
        {skills.map((skill, index) => (
          <div key={index} className={classes.wrap}>
            <SubTitle key={index}>{skill.name}</SubTitle>
            {skill.items.map((item, idx) => (
              <p key={idx}>
                <span className="mr-3">
                  <FontAwesomeIcon icon={faCode} />
                </span>
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
