import React, { useState } from "react";
import styles from "./ProductList.module.css";

const API_URL = "https://fakestoreapi.com/products";

function ProductList({ setClicked }) {
  const [product, setProduct] = useState([]);

  const FetchData = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={styles.main}>
      <button className={styles.btn} onClick={() => FetchData()}>
        {" "}
        Show List{" "}
      </button>
      {product.map((item) => (
        <ul className={styles.container} key={item.id}>
          <li>{item.title}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.description}</li>
          <img alt="product" src={item.image}></img>
          <li>{item.rate}</li>
        </ul>
      ))}
    </div>
  );
}

export default ProductList;
