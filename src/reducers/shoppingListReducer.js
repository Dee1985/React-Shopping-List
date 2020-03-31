import uuid from "uuid/v4";

export const shoppingListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          title: action.item.title,
          id: uuid()
        }
      ];
    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};
