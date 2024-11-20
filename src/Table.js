import { TableList } from "./TableList";

export function Table({ items, onDeleteItem, onDeleteList, translations }) {
  return (
    <div className="sidbar">
      <div>
        <TableList items={items} onDeleteItem={onDeleteItem} onDeleteList={onDeleteList} translations={translations} />
      </div>
    </div>
  );
}
