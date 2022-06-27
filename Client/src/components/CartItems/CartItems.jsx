import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Header from "../Header/Header";
import "./CartItems.module.css";
import styles from "./CartItems.module.css";
const CartItems = ({ cart, setCart, handleChange }) => {
  // console.log("cart is her", cart)
  const [totalItem, setTotalItem] = useState('0')
  const [totalPrice, setTotalPrice] = useState('');

  const handleRemove = (_id) => {
    const arr = cart.filter((item) => item._id !== _id);
    setCart(arr);
    // handlePrice();
    toast.error("Item Removed")
  };

  // const handlePrice = () => {
  //   let ans = 0;
  //   cart.map((item) => (ans += 0.1 * item.price));
  //   setTotalPrice(ans);
  // };

  // useEffect(() => {
  //   handlePrice();
  // });
  return (

    <>

        <Header />

      <div className={styles.cartItems__container}>
        <div className={styles.cartItemsContainer__leftSide}>
          {cart.map((prod) => (
            <div key={prod.id} className={styles.cartItemsContainer__card}>
              <div className={styles.cartItemsContainer__img}>
                <img src={prod.image} alt="item__card" />
              </div>
              <div className={styles.cartItemsContainer__model}>
                <h4>{prod.model}</h4>
              </div>
              <div>
                <select id="dropdown">
                  <option value="Quantity">Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className={styles.cartItemsContainer__price}>
                <h4>₹{prod.price}</h4>
              </div>
              <div className={styles.cartItemsContainer__addToCartButton}>
                <div className={styles.cartItemsContainer__removeFromCart}>
                  <button onClick={() => handleRemove(prod._id)}>
                    Remove From Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cartItemsContainer__rightSide}>
          <div className={styles.cartItemsContainer__rightSideHeader}>

            <div>
              <h3>
                Total  <span style={{ color: "yellow", fontSize: '20px' }}> {cart?.length} </span>Items In Your
                Shoping Cart
              </h3>
            </div>
            <h2>SubTotal Amount..</h2>
            <h3> $1000</h3>
          </div>
        </div>
      </div>

    </>
  );
};

export default CartItems;
