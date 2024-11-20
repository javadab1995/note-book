import { ListItem } from "./ListItem";







export function List({ items, onDeleteItem, translations }) {
  return (
    <div>
      <ul>
        {items.map((item, i) => <ListItem key={i + 1} item={item} onDeleteItem={onDeleteItem} translations={translations} />)}
      </ul>
    </div>
  );
}
