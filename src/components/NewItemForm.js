import React, { useContext, useState } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const NewItemForm = () => {
  const { dispatch } = useContext(ShoppingListContext);
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", item: { title } });
    setTitle("");
  };
  return (
    <>
      <div className="navbar"></div>
      <div className="form">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
    </>
  );
};

export default NewItemForm;
