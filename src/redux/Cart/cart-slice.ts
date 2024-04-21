import { Products } from "@/components/Content/Content";
import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    cart: Products[],
}

const initialState: CartState = {
    cart: [],
}

export const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        addProduct: (state, action) => {
            state.cart = [
                ...state.cart,
                action.payload,
            ];
        },
        removeProducts: (state, action) => {
            const productToRemove = action.payload;
            const newCart = state.cart.filter(product => product.id !== productToRemove.id)

            state.cart = newCart;
        },
    },
})

export const {addProduct, removeProducts} = cartSlice.actions;