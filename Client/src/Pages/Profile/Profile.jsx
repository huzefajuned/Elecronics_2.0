import React, { useEffect, useState } from 'react';
import styles from '../Profile/Profile.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState();

    console.log("user", user)


    const loadGetUser = () => {
        axios.get("/User/getUser", {
            headers: {
                "auth-token": localStorage.getItem("auth-token")
            }

        }).then((response) => {
            console.log("response", response);
            setUser(response.data)
        }).catch((err) => {
            console.log(err)
        })

        if (!user) {
            navigate('/Login')
        }
    }



    useEffect(() => {

        loadGetUser()
    }, [])

    return (
        <>
            <div className={styles.container}>
                <h2>Name:Dummy</h2>
                <h2>Email:Dummy@gmail.com</h2>
            </div>



        </>
    )
}

export default Profile