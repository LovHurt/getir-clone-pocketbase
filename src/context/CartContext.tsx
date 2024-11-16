import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface CartItem {
  productId: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialCartState: CartState = {
  items: [],
  total: 0,
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "INCREMENT_ITEM"; payload: string }
  | { type: "DECREMENT_ITEM"; payload: string };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemIndex = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (itemIndex > -1) {
        // Ürün zaten sepette, miktarı artır
        const updatedItems = [...state.items];
        updatedItems[itemIndex].productQuantity +=
          action.payload.productQuantity;
        return {
          ...state,
          items: updatedItems,
          total:
            state.total +
            action.payload.productPrice * action.payload.productQuantity,
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
        total:
          state.total +
          action.payload.productPrice * action.payload.productQuantity,
      };
    }
    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(
        (item) => item.productId !== action.payload
      );
      const removedItem = state.items.find(
        (item) => item.productId === action.payload
      );
      const updatedTotal = removedItem
        ? state.total - removedItem.productPrice * removedItem.productQuantity
        : state.total;
      return {
        ...state,
        items: updatedItems,
        total: updatedTotal,
      };
    }
    case "INCREMENT_ITEM": {
      const updatedItems = state.items.map((item) =>
        item.productId === action.payload
          ? { ...item, productQuantity: item.productQuantity + 1 }
          : item
      );
      const incrementedItem = state.items.find(
        (item) => item.productId === action.payload
      );
      return {
        ...state,
        items: updatedItems,
        total: incrementedItem
          ? state.total + incrementedItem.productPrice
          : state.total,
      };
    }
    case "DECREMENT_ITEM": {
      const updatedItems = state.items
        .map((item) =>
          item.productId === action.payload
            ? {
                ...item,
                productQuantity:
                  item.productQuantity > 1
                    ? item.productQuantity - 1
                    : item.productQuantity,
              }
            : item
        )
        .filter((item) => item.productQuantity > 0);
      const decrementedItem = state.items.find(
        (item) => item.productId === action.payload
      );
      return {
        ...state,
        items: updatedItems,
        total: decrementedItem
          ? state.total - decrementedItem.productPrice
          : state.total,
      };
    }
    default:
      return state;
  }
};

const CartContext = createContext<{
  state: CartState; 
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialCartState,
  dispatch: () => null,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
