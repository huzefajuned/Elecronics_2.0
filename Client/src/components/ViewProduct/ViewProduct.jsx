import React from 'react'
import styles from '../ViewProduct/ViewProduct.module.css'
import { useLocation } from 'react-router-dom'
import Header from '../Header/Header';

const ViewProduct = ({ cart , setCart  ,isLoggedIn,setIsLoggedIn}) => {
    const location = useLocation();
    console.log(location)
    return (

        <>
            <Header  cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

            <div className={styles.viewprod__container}>
                <div className={styles.viewprod__left}>
                    <div className={styles.left__img}>
                        <img src={location.state.image} alt="viewprpd__img" />
                    </div>
                    <div className={styles.left__button}>
                        <button>Add To Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className={styles.viewprod__right}>
                    <div className={styles.right__details}>
                        {/* <img src={location.state.image} alt="viewProd_img" /> */}
                        <h3> ₹ {location.state.price}</h3>
                        <h2> {location.state.model}</h2>
                        <h5> {location.state.description}</h5> <hr /> <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur, iste excepturi unde sint nostrum minima corporis odit dignissimos ea fugiat obcaecati placeat fugit aperiam quidem adipisci eius modi dicta!
                        </p>

                    </div>
                    <div className={styles.right__offer}>
                        <h4> Availaible Offers</h4> <br />
                        <h6>Special PriceGet extra 10% off (price inclusive of discount)T&C</h6>
                        <h6>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*Know More</h6>
                        <h6>Partner OfferOrder More, Win More: Chance to win an iPad and EGVs worth ₹5000 on Flipkart Pay Later transactionKnow More</h6>
                        <h6>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</h6>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProduct