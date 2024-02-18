// 컨테이너
export default function Content({
  children,
  title = "타이틀",
  isUnderbar = true,
}) {
  return (
    <div className="mb-8">
      <h2 className="h2-global">{title}</h2>
      <div className="leading-relaxed">{children}</div>
      {isUnderbar && <div className="h-0.5 bg-gray-200 mt-5"></div>}
    </div>
  );
}
