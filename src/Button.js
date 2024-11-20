export function Button({ children, onClick }) {
  return <button onClick={onClick} className="button btn">{children}</button>;
}
