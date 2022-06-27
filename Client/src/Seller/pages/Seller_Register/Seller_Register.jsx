import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import styles from './Seller_Register.module.css'
import { useNavigate } from 'react-router-dom'



const Seller_Register = (props) => {

    const navigate = useNavigate()


    // events for form type change  to login
    const loginButton = () => { setlogin(true); }

    // events for form type change  to register
    const registerButton = () => { setlogin(false); }

    // for form type changing to Login / Registration Form view
    const [login, setlogin] = useState(false);

    //for seller Authentication state (initial state is false)
    const [sellerLogin, setSellerLogin] = useState(false)


    // const { loggedIn, onChanged, OnRegistered, OnLoggedIn } = useState('')


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //seller Registration Onclick Event handler
    const Register_Click = async (e) => {
        e.preventDefault();
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }
        try {
            await axios.post("/sellerRegister", {
                name, email, password
            }, config)

                .then((response) => {

                    if (response.status === 200) {
                        toast.error(response.data.message);
                    }
                    if (response.status === 201) {
                        toast.success(response.data.message);
                        setlogin(true);
                    }
                    if (response.status === 202) {
                        toast.success(response.data.message)
                    }

                })
        } catch (error) {
            alert(error.data.message)

        }
    }


    //seller Registration Onclick Event handler
    const Login_Click = (e) => {
        e.preventDefault();
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        axios.post("/sellerLogin", {

            email, password
        }, config)
            .then((response) => {

                if (response.status === 200) {
                    toast.error(response.data.message);
                }
                if (response.status === 201) {
                    toast.success(response.data.message);
                    navigate("Seller_Dashboard")

                }
                if (response.status === 202) {
                    toast.success(response.data.message)
                }

            })

        // alert("okkkkk")
    }

    return (props.trigger) ? (

        <>
            {
                !login ? (<>
                    <div className={styles.container}>
                        <div className={styles.main}>
                            <button className={styles.close} onClick={() => props.setTrigger(false)}>X</button>

                            <h2 className={styles.heading}>Seller Registration</h2>

                            <form className={styles.form}>
                                <input type='text' name="name" value={name} placeholder="Enater Valid Name" onChange={(e) => setName(e.target.value)} />
                                <input type='text' name="email" value={email} placeholder="Enter Valid Email" onChange={(e) => setEmail(e.target.value)} />
                                <input type='password' name="password" value={password} placeholder="Enater Valid Password" onChange={(e) => setPassword(e.target.value)} />
                                <input type='button' value="Register Now" onClick={Register_Click} />
                            </form>
                            {/* <br /> */}
                            {/* <hr /> <br /> */}

                            <div className={styles.topButton}>
                                Already a Seller   ? <button onClick={() => loginButton()}>Login</button>
                            </div>

                        </div>
                    </div>
                </>) : (<>
                    <div className={styles.container}>
                        <div className={styles.main}>
                            <button className={styles.close} onClick={() => props.setTrigger(false)}>X</button>

                            <h2 className={styles.heading}>Login Form</h2>
                            <h2>
                                {name}
                            </h2>

                            <form className={styles.form}>
                                <input type='text' name="email" value={email} placeholder="Enter Valid Email" onChange={(e) => setEmail(e.target.value)} />
                                <input type='password' name="password" value={password} placeholder="Enater Valid Password" onChange={(e) => setPassword(e.target.value)} />
                                <input type='button' value="Login " onClick={Login_Click} />

                            </form>
                            {/* <hr /> <br /> */}
                            <div className={styles.topButton}>
                                Become a Seller?   <button onClick={() => registerButton()} >Registration</button>
                            </div>
                        </div>

                    </div>
                </>)}

        </>

    ) : ""
}

export default Seller_Register;