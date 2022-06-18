import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './Products.module.css'

const Products = () => {

    const [prodData, setProdData] = useState([]);
    useEffect(() => {
        loadProductData()
    }, [])
    const loadProductData = () => {
        axios.get('/product/read').then((resp) => {
            setProdData(resp.data);
            // console.log(resp.data)
        })
    }

    return (
        <>
            <div>
                {/* <h4> Avalaible Products...</h4> */}

                <div className={styles.container}>
                    {/* <div>
                        hii
                    </div> */}
                    {
                        prodData.map((props) => (
                            <div className={styles.card}>
                                <img src={props.image} alt="image" />
                                <h3>{props.price}</h3>
                                <h3>{props.model}</h3>
                                <h6>{props.description}</h6>
                                <button>Delete</button>
                                <button>Update</button>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Products