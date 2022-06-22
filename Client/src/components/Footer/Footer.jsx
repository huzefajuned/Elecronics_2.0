import React, { useState } from 'react'
import styles from '../Footer/Footer.module.css'
import { Link, Outlet } from 'react-router-dom'


const Footer = () => {

    return (
        <>

            <div className={styles.footer__container}>
                <div className={styles.footer__left}>
                <h2>Seller Corner</h2>

                    <Link to="Auth">
                        <h3 style={{ border: "2px solid brown" ,cursor:'pointer'}}> Sell On Electronics</h3>
                    </Link>
                </div>
                <div className={styles.footer__middle}>
                    <h1>shortCuts</h1>
                    <h4> Electronics,Bulbs,Chargers</h4>
                    <h4>Chargers</h4>
                    <h4>Data Cables</h4>
                    <h4>Bulbs</h4>
                </div>
                <div className={styles.footer__right}>
                    <div>
                        <h3> Complete Address</h3>

                        DC-220, ST-N0-350 <br />
                        New Town , Kolkata West Bengal <br />
                        700156 India
                    </div>
                    <div>
                        :h@gmail.com <br />
                        Contact N0 <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer