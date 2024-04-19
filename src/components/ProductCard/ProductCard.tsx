/* eslint-disable @next/next/no-img-element */

import styles from "@/styles/ProductCard.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { Products } from "../Content/Content";

interface ProductCardProps extends Products {}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  rating,
  price,
}) => {
  return (
    <article className={styles.card}>
      <img className={styles.cardImage} alt="" src={image} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardInfosContainer}>
        <span>
          {Array.from({length: 5}).map((_, index) =>
          index < Math.round(rating.rate) ? (
            <AiFillStar key={index} />
          ) :
          (
            <AiOutlineStar key={index} />
          ))}
          <div>
            ({rating.rate})
          </div>
        </span>
        <strong>R$ {price}</strong>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.cardButton}>
          Adicionar ao carrinho
          <FiShoppingCart />
        </button>
      </div>
    </article>
  );
};
