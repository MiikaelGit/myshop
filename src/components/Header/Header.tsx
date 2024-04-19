import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import styles from "../../styles/Header.module.scss";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "@/redux/root-reducer";

export const Header: React.FC = () => {
  const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;
  function handleUserAuth() {
    if (user === null) {
      dispatch({
        type: "user/login",
        payload: {
          name: "Mikael",
          email: "mikael@gmail.com",
        },
      })
    } else {
      dispatch({
        type: "user/logout",
      })
    }
  }
 
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>MyShop.</h1>
        <div className={styles.buttonContainer}>
          <button onClick={handleUserAuth} className={isLogged ? styles.buttonLogout : styles.buttonLogin}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </button>
          <button className={styles.buttonCart} onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </button>
        </div>
      </div>
      <div className={showCart ? styles.showCart : styles.hideCart}>
        <Cart showCart={setShowCart}/>
      </div>
    </header>
  );
};
