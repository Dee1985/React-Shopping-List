import React from "react";
import Navbar from "./components/Navbar";
import ShoppingListContextProvider from "./contexts/ShoppingListContext";
import ShoppingList from "./components/ShoppingList";
import NewItemForm from "./components/NewItemForm";

function App() {
  return (
    <div className="App">
      <ShoppingListContextProvider>
        <Navbar />
        <ShoppingList />
        <NewItemForm />
      </ShoppingListContextProvider>
    </div>
  );
}

export default App;
