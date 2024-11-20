export function Header({ text }) {
  return (
    <div>
      <h1 className={`${text === "لیست یادداشت‌ها" ? "lang" : ""}`}>{text}</h1>
    </div>
  );
}
