import React, { useState } from 'react'
import styles from '../Auth/Auth.module.css'
import { Link } from 'react-router-dom'

const Auth = () => {

    const [isAuth, setIsAuth] = useState(false)

    const loginButton = () => {
        setIsAuth(true);
    }
    const registerButton = () => {
        setIsAuth(false);
    }


    return (<>

        {
            !isAuth ? (<>
                <div className={styles.main}>
                    <div className={styles.registerform}>

                        <h3>Registration Form</h3>
                        <input type="text" placeholder='name' />
                        <input type="text" placeholder='email' />
                        <input type="file" placeholder='profile' />
                        <input type="text" placeholder='password' />
                        <input className={styles.loginButton} type="button" placeholder='Login' value="Register" />
                        <div className={styles.bottomButtons}>
                            Already an User ? -
                            <button onClick={() => loginButton()}>Login</button>
                            {/* <button onClick={() => registerButton()} >Registration</button> */}
                        </div>
                    </div>
                </div>


            </>) : (<>
                <div className={styles.main}>

                    <div className={styles.loginform}>

                        <h3>Login Form</h3>
                        <input type="text" placeholder='email' />
                        <input type="text" placeholder='password' />
                        <input className={styles.loginButton} type="button" placeholder='Login' value="login" />
                        <div className={styles.bottomButtons}>Not an User ?
                            <button onClick={() => registerButton()} >Register</button>
                        </div>
                    </div>
                </div>


            </>)
        }
    </>


    )

}

export default Auth