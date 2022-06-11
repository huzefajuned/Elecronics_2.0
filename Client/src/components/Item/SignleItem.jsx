import React from "react";
import styles from "../Item/SingleItem.module.css";
const SingleItem = ({ imgUrl, price, model }) => {
 
  return (
    <>
      <div className={styles.item__container}>
        <div className={styles.itemContainer__img}>
          <img src={imgUrl} alt="img" />
        </div>
        <div className={styles.itemContainerIncDecInput}>
          <input type="button" value="-" />
          <input type="text" value="0" onChange={(e) => e.target.value} />
          <input type="button" value="+" />
        </div>

        <div className={styles.itemContainer__model}>
          <h3>{model}</h3>
        </div>

        <div className={styles.itemContainer__price}>
          <h3>{price}</h3>
        </div>
        <div className={styles.itemContainer__removeItem}>
          <button>Remove From Cart</button>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
