import React, { useState } from 'react'
import styles from './Seller_Register.module.css'
const Seller_Register = (props) => {

    const [login, setlogin] = useState(false);


    const { loggedIn, onChanged, OnRegistered, email, password, OnLoggedIn } = useState('')

    const loginButton = () => {
        setlogin(true);
    }
    const registerButton = () => {
        setlogin(false);

    }

    return (props.trigger) ? (

        <>
            {
                !login ? (<>
                    <div className={styles.container}>
                        <div className={styles.main}>
                            <button className={styles.close} onClick={() => props.setTrigger(false)}>x</button>

                            <h2 className={styles.heading}>Seller Registration</h2>

                            <form className={styles.form}>
                                <input type='text' name="name" placeholder="Enater Valid Name" onChange={onChanged} />
                                <input type='text' name="email" placeholder="Enter Valid Email" onChange={onChanged} />
                                <input type='password' name="password" placeholder="Enater Valid Password" onChange={onChanged} />
                                <input type='button' value="Register Now" onClick={OnRegistered} />
                            </form>
                            <hr /> <br />

                            <div className={styles.topButton}>
                                Already a Seller   ? <button onClick={() => loginButton()}>Login</button>
                            </div>

                        </div>
                    </div>
                </>) : (<>
                    <div className={styles.container}>
                        <div className={styles.main}>
                            <button className={styles.close} onClick={() => props.setTrigger(false)}>x</button>

                            {/* <div className={styles.loginContainer__header}>

                                <div className={styles.registerContainer}> */}

                            <h2 className={styles.heading}>Login Form</h2>

                            <form className={styles.form}>
                                <input type='text' name="email" placeholder="Enter Valid Email" onChange={onChanged} />
                                <input type='password' name="password" placeholder="Enater Valid Password" onChange={onChanged} />
                                <input type='button' value="Register Now" onClick={OnRegistered} />
                            </form>
                            <hr /> <br />
                            <div className={styles.topButton}>
                                Become a Seller?   <button onClick={() => registerButton()} >Registration</button>
                            </div>
                        </div>

                    </div>
                    {/* </div>
                    </div> */}
                </>)}
        </>
    ) : ""
}

export default Seller_Register