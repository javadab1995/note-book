import { Button } from "./Button";







export function ListItem({ item, onDeleteItem, translations }) {
  const date = new Date();
  const weekday = date.toLocaleString("default", { weekday: "long" });
  const day = date.toLocaleString("default", { day: "numeric" });
  return (
    <li>
      <div className="item-list--first">

        <h2>{item.title} </h2>
        <p>{item.description}</p>
      </div>
      <div className="item-list--secound">
        <span>{weekday} {day}  </span>
        <Button onClick={() => onDeleteItem(item.id)}>{translations.deleteButton}</Button>
      </div>
    </li>
  );
}
