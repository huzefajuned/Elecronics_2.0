import React, { useState, useEffect } from "react";
import styles from "../Login/Login.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import logo from "../../images/logo.png";

const Login = ({ cart, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [login, setlogin] = useState(true);
  const [activeBtn, setActiveBtn] = useState(false);

  // const [color, setColor] = useState('green');
  //Simple state for Data INput For REgsitration.....
  const [loggedIn, SetLoggedIn] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = loggedIn;
  const onChanged = (e) => {
    SetLoggedIn({ ...loggedIn, [e.target.name]: e.target.value });
  };

  //onClick For Form TYpe Change
  const loginButton = () => {
    setlogin(true);
    // setColor('brown');
  };
  const registerButton = () => {
    setlogin(false);
    // setColor('yellow');
  };

  // ++++++++ onClick function For Regsitration Button +++++++++++
  const OnRegistered = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios
        .post(
          "/buyerRegister",
          {
            name,
            email,
            password,
          },
          config
        )

        .then((response) => {
          // console.log("pppp");
          if (response.status === 200) {
            toast.error(response.data.message);
          }
          if (response.status === 201) {
            toast.success(response.data.message);
            setlogin(true);
          }
          if (response.status === 202) {
            toast.success(response.data.message);
          }
          if (response.status === 202) {
            toast.success(response.data.message);
          }
        });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      }
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("buyer");
    if (auth) {
      navigate("/");
      setIsLoggedIn(true);
    }
  }, []);

  // ++++++++ onClick function For Login Button +++++++++++
  const OnLoggedIn = () => {
    axios
      .post("/buyerLogin", loggedIn)

      .then((response) => {
        // let a = JSON.stringify(response);
        // alert(a);
        if (response.status === 201) {
          toast.success(response.data.message);
          navigate("/");
          setIsLoggedIn(true);
        }

        if (response.status === 202) {
          toast.error(response.data.message);
        }
        // alert(resp);
        // toast.success(" Buyer Logged In");

        // if (response === 201) {
        //   toast.success(response.data.message);
        // }
        if (response.data.auth) {
          localStorage.setItem(
            "buyer",
            JSON.stringify(response.data.buyerLogin)
          );
          localStorage.setItem("token", JSON.stringify(response.data.auth));
        }
        // localStorage.setItem("jwt-token", resp.data.authtoken);
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };
  return (
    <>
      <Header cart={cart} />
      {!login ? (
        <>
          <div className={styles.container}>
            <div className={styles.inner}>
              {/* <div className={styles.loginContainer__header}> */}
              <div className={styles.topButton}>
                <button onClick={() => loginButton()}>Login</button>
                <button onClick={() => registerButton()}>Registration</button>
              </div>
              {/* </div> */}

              <div className={styles.register}>
                {/* <h2>Registration Form</h2> */}
                <div className={styles.registerInputs}>
                  <input
                    type="text"
                    name="name"
                    value={loggedIn.name}
                    placeholder="Enater Valid Name"
                    onChange={onChanged}
                  />
                  <input
                    type="text"
                    name="email"
                    value={loggedIn.email}
                    placeholder="Enter Valid Email"
                    onChange={onChanged}
                  />
                  <input
                    type="password"
                    name="password"
                    value={loggedIn.password}
                    placeholder="Enater Valid Password"
                    onChange={onChanged}
                  />
                </div>
                <div className={styles.registerBtn}>
                  <button
                    onClick={OnRegistered}
                    // disabled={!name || !email || !password ? true : false}
                  >
                    Register Now
                  </button>
                </div>

                <div className={styles.logo} onClick={() => navigate("/")}>
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.inner}>
              <div className={styles.topButton}>
                <button onClick={() => loginButton()}>Login</button>
                <button onClick={() => registerButton()}>Registration</button>
              </div>
              <div className={styles.login}>
                {/* <h2>Login Form</h2> */}
                <div className={styles.loginInputs}>
                  <input
                    type="text"
                    name="email"
                    value={loggedIn.email}
                    placeholder="Enter Valid Email"
                    onChange={onChanged}
                  />
                  <input
                    type="password"
                    name="password"
                    value={loggedIn.password}
                    placeholder="Enater Valid Password"
                    onChange={onChanged}
                  />
                </div>
                <div className={styles.loginBtn}>
                  <button
                    onClick={OnLoggedIn}
                    // disabled={!email || !password ? true : false}
                  >
                    Login Now
                  </button>
                </div>

                <div className={styles.logo} onClick={() => navigate("/")}>
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
