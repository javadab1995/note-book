import { useState } from "react";
import { Button } from "./Button";
import { Header } from "./Header";
import { Table } from "./Table";
import { FormAddItem } from "./FormAddItem";

export default function App() {
  const [items, setItems] = useState([]);

  const [language, setLanguage] = useState("en"); 
 
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




  


