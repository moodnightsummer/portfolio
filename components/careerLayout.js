import Career from "../contents/career";
import Job from "./job";

const classes = {
  wrap: "mt-4",
  titleText: "text-2xl tracking-tighter font-normal",
  periodText: "text-xl text-gray-400 font-light mb-4",
  smallText: "text-sm text-gray-400 font-light",
};

export default function CareerLayout({ link }) {
  const item = Career.find((v) => v.link === link);

  if (!item) return null;

  return (
    <div className="mt-4">
      <p className="text-2xl tracking-tighter font-normal">
        {item.companyName}
      </p>

      <p className="text-xl text-gray-400 font-light mb-4">{item.period}</p>

      <Job data={item} />
    </div>
  );
}
