import { createContext, Dispatch, SetStateAction } from "react";

export interface CartContextType {
    cart: any[];
    setCart: Dispatch<SetStateAction<any[]>>;
}

export const CartContext = createContext<CartContextType | null>(null);

