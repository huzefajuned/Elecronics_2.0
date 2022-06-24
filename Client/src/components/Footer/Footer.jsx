import React, { useState } from 'react'
import styles from '../Footer/Footer.module.css'
import { Link, Outlet } from 'react-router-dom'
import Seller_Register from '../../Seller/pages/Seller_Register/Seller_Register'


const Footer = () => {
    const [popup, setPopup] = useState(false)
    const upload = () => {
        // setActive(!active);
        // navigate('Upload')
        setPopup(true)
    };


    return (
        <>

            <div className={styles.footer__container}>
                <div className={styles.footer__left}   >
                    {/* <Link to="/seller_Register"> */}
                    <h3 style={{ border: "2px solid brown", cursor: 'pointer' }} onClick={() => upload()} > Sell On Electronics</h3>
                    {/* </Link> */}
                    <h2>Login As Seller</h2>
                    <h2> Register As Seller</h2>
                </div>
                <div className={styles.footer__middle}>
                    <h4> Electronics,Bulbs,Chargers</h4>
                    <h4>Chargers</h4>
                    <h4>Data Cables</h4>
                    <h4>Bulbs</h4>
                </div>
                <div className={styles.footer__right}>
                    <hr />
                    <hr />

                    <div>
                        <h3> Complete Address</h3>

                        DC-220, ST-N0-350 <br />
                        New Town , Kolkata West Bengal <br />
                        700156 India
                    </div>
                    <hr />
                    <hr />
                    <div>
                        :h@gmail.com <br />
                        Contact N0 <br />

                    </div>

                </div>
            </div>
            <div className={styles.display_content}>
                {/* <Outlet > */}
                {/* hhh */}
                {/* </Outlet> */}
                <Seller_Register trigger={popup} setTrigger={setPopup} />

            </div>
        </>
    )
}

export default Footer