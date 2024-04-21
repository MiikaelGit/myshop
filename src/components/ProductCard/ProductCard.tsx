/* eslint-disable @next/next/no-img-element */

import styles from "@/styles/ProductCard.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { Products } from "../Content/Content";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "@/redux/root-reducer";
import { addProduct, removeProducts } from "@/redux/Cart/cart-slice";

interface ProductCardProps {
  product: Products,
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
}) => {
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);
  const dispatch = useDispatch()
  const isProductOnCart = cart.find((productOnCart) => productOnCart.id === product.id) !== undefined;
  function haldleAddProductToCard() {
    dispatch(addProduct(product));
    // dispatch({
    //   type: "cart/add-product",
    //   payload: product,
    // })
  }
  function handleRemoveProductFromCart() {
    dispatch(removeProducts(product));
    // dispatch({
    //   type: "cart/remove-product",
    //   payload: product,
    // })
  }
  console.log(cart)
  return (
    <article className={styles.card}>
      <img className={styles.cardImage} alt="" src={product.image} />
      <h2 className={styles.cardTitle}>{product.title}</h2>
      <div className={styles.cardInfosContainer}>
        <span>
          {Array.from({length: 5}).map((_, index) =>
          index < Math.round(product.rating.rate) ? (
            <AiFillStar key={index} />
          ) :
          (
            <AiOutlineStar key={index} />
          ))}
          <div>
            ({product.rating.rate})
          </div>
        </span>
        <strong>R$ {product.price}</strong>
      </div>
      <div className={styles.buttonWrapper}>
      { isProductOnCart ? (
          <button onClick={handleRemoveProductFromCart} className={styles.removeButton}>
            Remover do carrinho
            <FiShoppingCart />
          </button>
          ) : ( 
          <button onClick={haldleAddProductToCard} className={styles.addButton}>
            Adicionar ao carrinho
            <FiShoppingCart />
          </button>
          )}
      </div>
    </article>
  );
};
