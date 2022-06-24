import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from './Upload.module.css'



const Upload = (props) => {
    // const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')

    // const [popup, setPopup] = useState(true);

    const [image, setImage] = useState("");
    const [price, setPrice] = useState();
    const [model, setModel] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState()

    //onSubmit Event For userData Submit...
    const handleSubmitFormData2 = (e) => {
        e.preventDefault()

        const formdata = new FormData();
        formdata.append('image', image);
        formdata.append('price', price);
        formdata.append('model', model);
        formdata.append('description', description);
        formdata.append('category', category);

        axios.post('/item', formdata, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                toast.success(res.data.message);
                setImage()
                setPrice("")
                setModel("")
                setDescription("")
                setCategory("");

            })
            .catch((resp) => {
                console.log(resp.data);
                toast.error(resp.data.message)
            })

    }
    return (props.trigger) ? (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <button className={styles.close} onClick={() => props.setTrigger(false)}>x</button>
                    <h4 className={styles.heading}>
                        Add New Product
                    </h4>
                    <form className={styles.form} encType="multipart/form-data">
                        <input type="file" name='image' accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
                        <input type="number" name='price' value={price} placeholder=' Price ' onChange={(e) => setPrice(e.target.value)} />
                        <input type="text" name='model' value={model} placeholder=' Model' onChange={(e) => setModel(e.target.value)} />
                        <input type="text" name='description' value={description} placeholder='  Brief Description' onChange={(e) => setDescription(e.target.value)} />

                        <div className={styles.category}>
                            <select value={category} name='category' onChange={(e) => setCategory(e.target.value)} >
                                <option value="Mobile">Mobile</option>
                                <option value="Earphone">Earphone</option>
                                <option value="Charger">Charger</option>
                                <option value="Data-Cable">Data-Cable</option>
                                <option value="Laptop">Laptop</option>
                            </select>
                        </div>
                        <div className={styles.checkbox}>
                            <input type="checkbox" name="" id="" placeholder='' />
                            want to sell faster?
                            <input type="checkbox" name="" id="" placeholder='' />
                            offers available
                        </div>
                        <button className={styles.buttons} onClick={handleSubmitFormData2} disabled={!image || !price || !model || !description || !category ? true : false} > Add Item</button>
                    </form>

                </div>
                {/* <div className={styles.preview}> */}
                {/* {
                        image ? (<>
                            <h4>Preview</h4>
                            <img src={image} alt={image.name} /> <br />
                            {price} <br />
                            {model} <br />
                            {description} <br />
                            {category} <br />
                        </>) : " "
                    } */}
                {/* {image.preview && <img src={image.preview} width='200' height='200' />} */}
                {/* </div> */}
            </div>
        </>
    ) : "";
}

export default Upload