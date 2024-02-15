// 컨테이너
export default function Content({
  children,
  title = "타이틀",
  isUnderbar = false,
}) {
  return (
    <div className="mb-8">
      <h2 className="h2-global">{title}</h2>
      <div className="leading-relaxed">{children}</div>
      {isUnderbar && (
        <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
      )}
    </div>
  );
}
