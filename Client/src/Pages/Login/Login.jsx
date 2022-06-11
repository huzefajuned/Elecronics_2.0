import React, { useState } from "react";
import styles from "../Login/Login.module.css";
import axios from "axios";
import { toast, } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [login, setlogin] = useState(false);
  // const [color, setColor] = useState('green');
  //Simple state for Data INput For REgsitration.....
  const [loggedIn, SetLoggedIn] = useState({
    name: "",
    email: "",
    password: "",
  })
  const { name, email, password } = loggedIn;
  const onChanged = (e) => {
    SetLoggedIn({ ...loggedIn, [e.target.name]: e.target.value })
  }

  //onClick For Form TYpe Change
  const loginButton = () => {
    setlogin(true);
    // setColor('brown');
  }
  const registerButton = () => {
    setlogin(false);
    // setColor('yellow');

  }

  // ++++++++ onClick function For Regsitration Button +++++++++++
  const OnRegistered = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post('/User/Register',
        {
          name,
          email,
          password
        }, config);
      localStorage.setItem("authToken", data.token);
    }
    catch (error) {
      alert(error)
    }

    if(200){
      alert("Reistered");
      setlogin(true)
    } else{
      alert("Error To Register")
    }

  }


  // } catch ((err) => {
  //   console.log(err)

  // })

  // ++++++++ onClick function For Login Button +++++++++++
  const OnLoggedIn = () => {
    axios.post("/User/Login", loggedIn)

      .then((resp) => {
        // alert(resp)
        toast.success("Logged In");
        setIsLoggedIn(true);
        navigate('/');
        localStorage.setItem("jwt-token", resp.data.authtoken);
      })

      .catch((err) => {
        alert(err)
        // toast.error("Error To uSER")
      });


  }

  return (
    <>
      {
        !login ? (<>
          <div className={styles.login__container}>
            <div className={styles.loginContainer__header}>
              <div className={styles.topButton}>
                <button onClick={() => loginButton()}>Login</button>
                <button onClick={() => registerButton()} >Registration</button>
              </div>

            </div>
            <div className={styles.registerContainer}>
              <h2>Registration Form</h2>
              <div className={styles.loginContainer__inputFields}>

                <input type='text' name="name" value={loggedIn.name} placeholder="Enater Valid Name" onChange={onChanged} />
                <input type='text' name="email" value={loggedIn.email} placeholder="Enter Valid Email" onChange={onChanged} />
                <input type='password' name="password" value={loggedIn.password} placeholder="Enater Valid Password" onChange={onChanged} />

              </div>
              <div className={styles.loginContainer__loginButton}>
                <button onClick={OnRegistered} disabled={!name || !email || !password ? true : false}>Register Now</button>
              </div>
            </div>

          </div>

        </>) : (<>

          <div className={styles.login__container}>
            <div className={styles.loginContainer__header}>
              <div className={styles.topButton}>
                <button onClick={() => loginButton()}>Login</button>
                <button onClick={() => registerButton()} >Registration</button>
              </div>
              <div className={styles.registerContainer}>
                <h2>Login Form</h2>
                <div className={styles.loginContainer__inputFields}>
                  <input type='text' name="email" value={loggedIn.email} placeholder="Enter Valid Email" onChange={onChanged} />
                  <input type='password' name="password" value={loggedIn.password} placeholder="Enater Valid Password" onChange={onChanged} />
                </div>
                <div className={styles.loginContainer__loginButton}>
                  <button onClick={OnLoggedIn} disabled={!email || !password ? true : false}>Login Now</button>
                </div>
              </div>
            </div>
          </div>
        </>)}
    </>
  );
};

export default Login;
