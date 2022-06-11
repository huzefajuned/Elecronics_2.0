import React from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import CartItems from "../CartItems/CartItems";

const Cart = ({ cart, setCart }) => {
  // console.log(cart)
  return (
    <>
      <header>
        <div className={styles.cart__container}>
          {/* <div className={styles.cartLeftContainer__header}>
            <Link to="/">
              <div className={styles.cartLeftContainerHeader__backArrow}>
                <img
                  src="https://www.seekpng.com/png/full/155-1554494_operation-last-go-back-previous-comments-go-back.png"
                  alt="back__img"
                  width="50px"
                />
                <h2 className={styles.cartLeftContainerHeader__backArrowTitle}>
                  Continue Shopping
                </h2>
              </div>
            </Link>

          </div> */}
          <div className={styles.cartBottom__container}>
            <div>
              {cart.length > 0 ? (
                <>
                  <Link to='/'>
                    <img
                      src="https://www.seekpng.com/png/full/155-1554494_operation-last-go-back-previous-comments-go-back.png"
                      alt="back__img"
                      width="50px"
                    />
                  </Link>
                  <CartItems cart={cart} setCart={setCart} />
                </>
              ) : (

                <>
                  <div>
                    <img src="https://img.freepik.com/free-vector/shopping-cart_1284-672.jpg?t=st=1648132144~exp=1648132744~hmac=13e953e065c6f72b31c7b902673cb81120b5ae1507aac369ea22bba304cdb65e&w=740"
                      style={{
                        objectFit: "cover",
                        width: '100%'
                      }}


                      alt="" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Cart;
