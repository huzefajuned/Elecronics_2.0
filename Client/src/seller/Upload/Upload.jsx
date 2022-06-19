import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Upload.css'
import { toast } from 'react-toastify';

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

        axios.post('/product/insert', formdata, {
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
            <div className='container'>
                <div className="upload">
                    <button className='close-icon' onClick={() => props.setTrigger(false)}>x</button>
                    <div>
                        <h2> Upload Products To DataBase..</h2>
                    </div>
                    <form
                        encType="multipart/form-data"
                        className='upload__inner'>
                        <input type="file" name='image' accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
                        <input type="number" name='price' value={price} placeholder='input Price ' onChange={(e) => setPrice(e.target.value)} />
                        <input type="text" name='model' value={model} placeholder='INput Model' onChange={(e) => setModel(e.target.value)} />
                        <input type="text" name='description' value={description} placeholder='input DEscroption' onChange={(e) => setDescription(e.target.value)} />

                        <div className='select__option'>
                            <select value={category} name='category' onChange={(e) => setCategory(e.target.value)} >
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
                    {/* {console.log("IMage", image)} */}
                    {/* {
                        image ? (<>
                            <h4>Preview</h4>
                            <img src={image} width='250' height='200' alt={image.name} />
                        </>) : " "
                    } */}
                    {/* {image.preview && <img src={image.preview} width='200' height='200' />} */}
                </div>
            </div>
        </>
    ) : "";
}

export default Upload