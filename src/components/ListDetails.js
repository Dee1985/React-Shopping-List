import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const ListDetails = ({ item }) => {
  const { dispatch } = useContext(ShoppingListContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
      <div className="title">{item.title}</div>
    </li>
  );
};

export default ListDetails;
