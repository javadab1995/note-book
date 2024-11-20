import { List } from "./List";
import { Button } from "./Button";







export function TableList({ items, onDeleteItem, onDeleteList, translations }) {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  return (
    <div className="table">
      <div>
        <div className="table-list">{month} 2024 </div>
        {<List items={items} onDeleteItem={onDeleteItem} translations={translations} />}
      </div>
      {items.length > 0 && <Button onClick={onDeleteList} translations={translations}>{translations.clearList}</Button>}
    </div>
  );
}
