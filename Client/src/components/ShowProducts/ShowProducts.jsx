import React, { useState } from "react";
import styles from "./ShowProducts.module.css";
import { useNavigate } from "react-router-dom";
import { CgMoreO } from "react-icons/cg";
import { BsHeart } from "react-icons/bs";

function ShowProducts({ prodData, searchItem, setSearchItem, handleClick }) {
  const navigate = useNavigate();

  const navToViewPage = (selectProd) => {
    navigate("/ViewProduct", {
      state: selectProd,
    });
  };

  //View MOre Products
  const [visible, setVisible] = useState(12);
  console.log(visible);
  const showMore = () => {
    setVisible((preValue) => preValue + 6);
  };

  //Filter Category ....
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {prodData.slice(0, visible).map((currentElem) => {
            const { price, model } = currentElem;
            // console.log(currentElem.images[0]);

            return (
              <>
                <div className={styles.card}>
                  <img
                    className={styles.cardImg}
                    src={currentElem.image}
                    alt="CARD__IMG"
                    onClick={() => navToViewPage(currentElem)}
                  />
                  <h4 className={styles.cardModel}> {model} </h4>
                  <h4 className={styles.cardPrice}> ₹{price} </h4>
                  <button
                    className={styles.addCart}
                    onClick={() => handleClick(currentElem)}
                  >
                    {" "}
                    Add To Cart{" "}
                  </button>
                  <BsHeart className={styles.heart_icon} />
                </div>
              </>
            );
          })}
        </div>
        {/* ++++++++++ Show More Button +++++++++++ */}
        <div className={styles.showMore}>
          <button onClick={() => showMore()}>
            Load More Products {<CgMoreO />}
          </button>
        </div>
      </div>
    </>
  );
}

export default ShowProducts;
