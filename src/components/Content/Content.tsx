import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "@/styles/Content.module.scss";
import axios from "axios";

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export const Content: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get("https://fakestoreapi.com/products");
      const newData = response.data;
      setProducts(newData);
    }
    loadProducts();
  });
  return (
    <main className={styles.content}>
      {products.map((product) => {
        return (
          <ProductCard
            product={product}
          />
        );
      })}
    </main>
  );
};
