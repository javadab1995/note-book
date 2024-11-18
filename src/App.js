import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  const [language, setLanguage] = useState("en"); // State for language
 
  const translations = {
    en: {
      header: "Note List",
      title: "Title:",
      description: "Description:",
      clearList: "Clear List",
      addButton: "Add",
      deleteButton: "❌",
    },
    fa: {
      header: "لیست یادداشت‌ها",
      title: "عنوان:",
      description: "توضیحات:",
      clearList: "پاک کردن لیست",
      addButton: "اضافه کردن",
      deleteButton: "حذف",
    },
  };

 
  function toggleLanguage() {
  
    setLanguage((prev) => (prev === "en" ? "fa" : "en"));
  }

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  
  }
  function handleDeleteList() {
    setItems([])
  }

  function handleDeleteItem(id) {
    console.log(id)
    setItems(items => items.filter(item => item.id !== id))
  }
  return (
      <div className="App">
      <Header text={translations[language].header} />
      <Button onClick={toggleLanguage}>{language === "en" ? "فارسی" : "English"}</Button>
      <Table items={items} onDeleteItem={handleDeleteItem} onDeleteList={handleDeleteList} translations={translations[language]} />
      <FormAddItem onAddItem={handleAddItem} translations={translations[language]} />
    </div>
  );
}




  

function Header({text}) {
  return (
    <div>
      <h1 className={`${text === "لیست یادداشت‌ها" ? "lang" : ""}`}>{text}</h1>
    </div>
  );
}
function Button({ children,onClick }) {
  return <button onClick={onClick} className="button">{children}</button>;
}

function Table({items,onDeleteItem,onDeleteList, translations}) {
  return (
    <div className="sidbar">
      <div>
        <TableList items={items} onDeleteItem={onDeleteItem} onDeleteList={ onDeleteList} translations={translations} />
      </div>
    </div>
  );
}

function TableList({items , onDeleteItem, onDeleteList,translations}) {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  return (
    <div className="table">
      <div>
        <div className="table-list">{month} 2024 </div>
        {<List items={items} onDeleteItem={onDeleteItem} translations={ translations} />}
      </div>
      {items.length > 0 && <Button onClick={onDeleteList} translations={translations}>{translations.clearList }</Button>}
    </div>
  );
}

function List({ items , onDeleteItem,translations}) {
  return (
    <div>
      <ul>
        {items.map((item, i) => <ListItem key={i + 1} item={item}  onDeleteItem={onDeleteItem} translations={translations} />)}
      </ul>
    </div>
  );
}

function ListItem({ item, onDeleteItem,translations }) {
   const date = new Date();
  const weekday = date.toLocaleString("default", { weekday: "long" });
  const day = date.toLocaleString("default" , {day:"numeric"})
  return (
    <li>
      <div className="item-list--first">
        
        <h2>{ item.title} </h2>
        <p>{ item.description}</p>
      </div>
      <div className="item-list--secound">
        <span>{ weekday} {day}  </span>
        <Button  onClick={() => onDeleteItem(item.id)}>{translations.deleteButton }</Button>
      </div>
    </li>
  );
}

function FormAddItem({ onAddItem,translations }) {
 
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !title) return;

    const newItem = { description, title, id: Date.now()};
   
    onAddItem(newItem);

   
    setTitle(""); 
    setDescription(""); 
   
  }

  return (
   

    <form className="form-add-sub" onSubmit={handleSubmit}>
      <label>{ translations.title}</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>{ translations.description}</label>
      <textarea
        maxLength={80}
        type="text"
        className="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      <button type="submit" className="button">{translations.addButton }</button> {/* Fixed button tag */}
    </form>
  );
}

