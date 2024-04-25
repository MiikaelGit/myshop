import React, { Dispatch, SetStateAction } from "react";
import styles from "@/styles/Cart.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "@/redux/root-reducer";
import { Products } from "../Content/Content";
import { TbTrashXFilled } from "react-icons/tb";
import { removeProducts } from "@/redux/Cart/cart-slice";

interface CartProps {
    showCart: Dispatch<SetStateAction<boolean>>
}
export const Cart: React.FC<CartProps> = (props) => {
    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);
    const dispatch = useDispatch();
    function handleRemoveProduct(product: Products) {
        dispatch(removeProducts(product))
        // dispatch({
        //     type: "cart/remove-product",
        //     payload: product,
        // })
    }
    const total = cart.reduce((totalCart, products) => {return totalCart + products.price}, 0)
    return(
        <aside className={styles.cart}>
            <div className={styles.cartHeader}>
                <h1>Carrinho</h1>
                <button onClick={() => props.showCart(false)}>Fechar</button>
            </div>
                <div>
                    <ul className={styles.productsList}>
                        {cart.map((product) => (
                            <li key={product.id} className={styles.productItem}>
                                <div>
                                    <strong>{product.title}</strong> - R$ {product.price}
                                </div>
                                <button className={styles.buttonRemove} onClick={() => handleRemoveProduct(product)}><TbTrashXFilled /></button>
                            </li>
                            
                        ))}
                    </ul>
                    <strong>Total: R${total.toFixed(2)}</strong>
                </div>
        </aside>
    )
}