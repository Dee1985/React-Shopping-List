import React, { useContext } from "react";
import ListDetails from "./ListDetails";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const ShoppingList = () => {
  const { items } = useContext(ShoppingListContext);
  return items.length ? (
    <div className="shopping-list">
      <ul>
        {items.map(item => {
          return <ListDetails item={item} key={item.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"></div>
  );
};

export default ShoppingList;
