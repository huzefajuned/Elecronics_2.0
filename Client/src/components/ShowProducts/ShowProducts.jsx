import React, { useEffect, useState } from "react";
import styles from "./ShowProducts.module.css";
import { useNavigate } from 'react-router-dom'
import moreIcon from '../../images/more-icon.png'
import { BsHeart } from 'react-icons/bs'

function ShowProducts({ prodData, searchItem, setSearchItem, handleClick }) {

  const navigate = useNavigate();

  const navToViewPage = (selectProd) => {
    navigate('/ViewProduct', {
      state: selectProd
    })
  }

  //View MOre Products   
  const [visible, setVisible] = useState(8)
  const showMore = () => {
    alert("hover on Onhever")
    setVisible((preValue => preValue + 4))
  }

  //Filter Category .... 
  return (
    <div className={styles.showProducts__container}>

      {/* //showProductsCard__container */}
      <div className={styles.showProductsCard__container}  >

        {prodData.map((currentElem) => {
          const { _id, image, price, model, category } = currentElem;

          return (<>
            <div  className={styles.showProductsSingle__card} >
              <img className={styles.showProductsSingle__cardImg} src={currentElem.image} alt="CARD__IMG" onClick={() => navToViewPage(currentElem)} />
              <h4 className={styles.showProductsSingle__cardModel}> {model} </h4>
              <h4 className={styles.showProductsSingle__cardPrice}> ₹{price} </h4>
              <button className={styles.showProducts__addToCartButton} onClick={() => handleClick(currentElem)}> Add To Cart </button>
              <BsHeart className={styles.heart_icon} />
            </div>

          </>)
        })}
      </div>
      {/* ++++++++++ Show More Button +++++++++++ */}
      <button className={styles.showMore} onClick={showMore}>
        Slow More
      </button>

      {/* ++++++++++ Show More Button +++++++++++ */}
      {/* <div className={styles.showmore__button} onMouseOver={showMore}>
        <img src={moreIcon} alt=" viewMoreIcon" />
      </div> */}

    </div>
  );
}

export default ShowProducts;
