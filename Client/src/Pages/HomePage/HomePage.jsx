import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import { slideImages } from "../../components/products/products";
import ShowProducts from "../../components/ShowProducts/ShowProducts";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Category from "../../components/Category/Category";
import Carousal from '../../components/Carousal/Carousal'

const HomePage = ({
  cart,
  setCart,
  isLoggedIn,
  setIsLoggedIn,
  prodData,
  searchItem,
  setSearchItem,
  handleClick,
}) => {
  const navigate = useNavigate();
  const [selectProd, setSelectProd] = useState(prodData[0]);
  const navToViewPage = (selectProd) => {
    navigate("/ViewProduct", {
      state: selectProd,
    });
    console.log(selectProd, setSelectProd);
  };

  return (
    <>
      <Header cart={cart} isLoggedIn={isLoggedIn} />
      <Carousal />
      <Category />

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
