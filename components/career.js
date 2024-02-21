import { faUnderline } from "@fortawesome/free-solid-svg-icons";
import career from "../contents/career";
import Link from "next/link";

const classes = {
  wrap: "mt-4",
  titleText: "text-lg font-bold",
  smallText: "mb-1 text-sm text-gray-500",
};

export default function Career() {
  return (
    <>
      <div className={classes.wrap}>
        {career.map((item, idx) => (
          <div key={idx}>
            <p key={idx} className={classes.smallText}>
              {item.period}
            </p>
            <p key={idx}>
              <Link href={item.link} className="underlinedText">
                {item.companyName}
              </Link>
            </p>
            <p key={idx} className={classes.smallText}>
              {item.occupation} | {item.rank}
            </p>
            {item.description.map((result, index) => (
              <div key={index} className="mt-4">
                {result}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
