import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './Products.module.css';
import { toast } from 'react-toastify';


const Products = () => {

    const [prodData, setProdData] = useState([]);
    useEffect(() => {
        loadProductData()
    }, [])
    const loadProductData = async () => {

        const config = {
            headers: {
                authorization: ` bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        }
        await axios.get('/item', config
        ).then((resp) => {

            setProdData(resp.data);
            // console.log(resp.data)
        })
    }


    const deleteById = async (_id) => {
        await axios.delete(`/item/${_id}`).then(resp => {
            toast.success(resp.data.message, resp.data.model);
            console.log(resp.data)

        }).catch(respon => {
            console.log(respon)
        })
    }

    return (
        <>
            <div>
                <div className={styles.container}>
                    {
                        prodData.map((props) => (
                            <div className={styles.card}>
                                <img src={props.image} alt="image" />
                                <h3>{props.price}</h3>
                                <h3>{props.model}</h3>
                                <h6>{props.description}</h6>
                                <button onClick={() => deleteById(props._id)}>Delete</button>
                                {/* <button onClick={() => deleteById(props._id)}>Delete</button> */}
                                <button >Update</button>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Products