import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const Navbar = () => {
  const { items } = useContext(ShoppingListContext);
  return (
    <div>
      <h1>Shopping List</h1>
      <p>There are {items.length} items in your shopping list</p>
    </div>
  );
};

export default Navbar;
