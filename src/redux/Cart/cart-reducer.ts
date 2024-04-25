// import { Products } from "@/components/Content/Content";

// interface CartState {
//     cart: Products[],
// }

// const initialState: CartState = {
//     cart: [],
// }

// interface CartAction {
//     type: string,
//     payload: Products,
// }

// export function cartReducer(state = initialState, action: CartAction) {
    
//     switch (action.type) {
//         case "cart/add-product":
//             return {
//                 ...state,
//                 cart: [
//                     ...state.cart,
//                     action.payload,
//                 ]
//             }
//         case "cart/remove-product":
//             const productToRemove = action.payload;
//             const newCart = state.cart.filter(product => product.id !== productToRemove.id)
//             return {
//                 ...state,
//                 cart: newCart,
//             }
//             default:
//                 return state;
//     }
// }