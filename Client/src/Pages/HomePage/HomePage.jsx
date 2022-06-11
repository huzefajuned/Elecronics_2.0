import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import { slideImages } from "../../components/products/products";
import ShowProducts from "../../components/ShowProducts/ShowProducts";
import Carousel from "react-elastic-carousel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const HomePage = ({ cart, setCart, prodData, searchItem, setSearchItem, handleClick }) => {
  const navigate = useNavigate()
  const [selectProd, setSelectProd] = useState(prodData[0]);
  const navToViewPage = (selectProd) => {
    navigate('/ViewProduct', {
      state: selectProd
    });
    console.log(selectProd, setSelectProd)
  }

  return (
    <>
      {/* ============== Sliders HomePage =============== */}
      <div className={styles.slide__container}>
        <Slide>
          {slideImages.map((slideImages, index) => (
            <div key={index}>
              <div
                className={styles.show__images}
                style={{ backgroundImage: `url(${slideImages.url})`, objectFit: "cover" }}
              >
              </div>
            </div>
          ))}
        </Slide>
      </div>

      {/* ============== offer__card =============== */}
      {/* <div className={styles.offercard__container}>
        <div className={styles.offercard__inner}>

          <Carousel breakPoints={breakPoints}>
            {prodData.map((prod, index) => (
              <div key={index} className={styles.single__card} onClick={() => navToViewPage(prod)}>
                <img src={prod.imgUrl} alt="CARD__IMG" className={styles.inner__img} />
                <h4 className={styles.pp}>  ₹{prod.price}   </h4>
                <h4 className={styles.pp}>   {prod.model}  </h4>
              </div>
            ))}
          </Carousel>
        </div>

      </div> */}

      {/* =============== ShowProducts ================= */}
      {/* //All Available Products..... */}
      <div>
        <ShowProducts
          cart={cart}
          setCart={setCart}
          prodData={prodData}
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          handleClick={handleClick}
        />
        <Footer />

      </div>
    </>
  );
};

export default HomePage;
