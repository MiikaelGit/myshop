import React, { Dispatch, SetStateAction } from "react";
import styles from "@/styles/Cart.module.scss"

interface CartProps {
    showCart: Dispatch<SetStateAction<boolean>>
}
export const Cart: React.FC<CartProps> = (props) => {
    return(
        <aside className={styles.cart}>
            <div className={styles.cartHeader}>
                <h1>Carrinho</h1>
                <button onClick={() => props.showCart(false)}>Fechar</button>
            </div>
        </aside>
    )
}