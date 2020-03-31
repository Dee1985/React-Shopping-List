import React, { createContext, useReducer, useEffect } from "react";
import { shoppingListReducer } from "../reducers/shoppingListReducer";

export const ShoppingListContext = createContext();

const ShoppingListContextProvider = props => {
  const [items, dispatch] = useReducer(shoppingListReducer, [], () => {
    const localData = localStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ShoppingListContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListContextProvider;
