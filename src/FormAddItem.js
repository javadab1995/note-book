import { useState } from "react";

export function FormAddItem({ onAddItem, translations }) {

  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !title) return;

    const newItem = { description, title, id: Date.now() };

    onAddItem(newItem);


    setTitle("");
    setDescription("");

  }


  return (


    <form className="form-add-sub" onSubmit={handleSubmit}>
      <label>{translations.title}</label>
      <input
        maxLength={10}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <label>{translations.description}</label>
      <textarea
        maxLength={80}
        type="text"
        className="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} />

      <button type="submit" className="button">{translations.addButton}</button>
    </form>
  );
}
