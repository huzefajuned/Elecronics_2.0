import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Upload.css'
import { toast } from 'react-toastify';

const Upload = (props) => {

    // const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')

    // const [popup, setPopup] = useState(true);
    const [dataField, setDataField] = useState({
        image: "",
        price: "",
        model: "",
        description: "",
        category: ""
    })
    const inputField = (e) => {
        setDataField({ ...dataField, [e.target.name]: e.target.value })
    }

    // const handleFileChange = (e) => {
    //     const img = {
    //         preview: URL.createObjectURL(e.target.files[0]),
    //         data: e.target.files[0],
    //     }
    //     setImage(img)
    // }
    const { image, price, model, description, category } = dataField;


    //onSubmit Event For userData Submit...
    const handleSubmitFormData2 = (e) => {
        e.preventDefault()

        const formdata = new FormData();
        formdata.append('image', image[0]);
        formdata.append('price', price);
        formdata.append('model', model);
        formdata.append('description', description);
        formdata.append('category', category);

        axios.post('/product/insert', formdata, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res)
                toast.success('Data Inserted')
            })
            .catch((resp) => {
                alert(resp)
            })
            console.log(formdata)

    }
    return (props.trigger) ? (
        <>
            <div className='container'>
                <div className="upload">
                    <button className='close-icon' onClick={() => props.setTrigger(false)}>x</button>
                    <div>
                        <h2> Upload Products To DataBase..</h2>
                    </div>
                    <form
                        encType="multipart/form-data"
                        className='upload__inner'>

                        <div>
                            <input type="file" name='image' accept='image/*' value={image} onChange={inputField} />
                        </div>
                        <input type="number" name='price' value={price} placeholder='input Price ' onChange={inputField} />
                        <input type="text" name='model' value={model} placeholder='INput Model' onChange={inputField} />
                        <input type="text" name='description' value={description} placeholder='input DEscroption' onChange={inputField} />

                        <div className='select__option'>
                            <select value={category} onChange={inputField} name='category'  >
                                <option >Select</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Earphone">Earphone</option>
                                <option value="Charger">Charger</option>
                                <option value="Data-Cable">Data-Cable</option>
                                <option value="Laptop">Laptop</option>
                            </select>
                        </div>
                        <button type='button'
                            onClick={handleSubmitFormData2}
                        // disabled={!image || !price || !model || !description || !category ? true : false}
                        > Add Product..</button>
                    </form>

                </div>
                <div className='preview'>
                    {/* {
                        image.preview ? (<>
                            <h4>Preview</h4>
                            <img src={image.preview} width='250' height='200' />
                        </>) : " "
                    } */}
                    {/* {image.preview && <img src={image.preview} width='200' height='200' />} */}
                </div>
            </div>
        </>
    ) : "";
}

export default Upload