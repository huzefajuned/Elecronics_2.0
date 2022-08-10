import React, { useState, useEffect } from "react";
import styles from "../Header/Header.module.css";
import logo from "../../images/logo.png";
import userImg from "../../images/user.png";
import { useNavigate } from "react-router-dom";
import cartimg from "../../images/cart.PNG";
import { FaUser } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";
import cx from "classnames";

// import { useEffect } from "react/cjs/react.production.min";

const Header = ({ cart, isLoggedIn, size, searchItem, setSearchItem }) => {
  const navigate = useNavigate();

  const options = {
    side: "left",
    effect: "slide-out",
    speed: 250,
    timing: "ease-in-out",
  };

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    // alert("sidebar opened");
    setSidebar(!sidebar);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };
  // const handleClick = () => setClick(true);
  // const onClick = () => {
  //   setClick(false);
  // };

  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState();
  // const [close, setClose] = useState(true);

  const handleSearch = () => {
    axios
      .get(`/item/search/${search}`)
      .then((result) => {
        setSearched(result.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    handleSearch();
  }, [search]);

  const clearSearchBox = () => {
    setSearch("");
    setSearched(null);
    navigate("/");
  };
  return (
    <>
      {isLoggedIn ? (
        <div className={styles.fixedContainer}>
          <nav className={styles.container}>
            <div className={styles.left} onClick={() => navigate("/")}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.showHamBurger}>
              <img
                width="50"
                src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg"
                alt="menu"
              />
            </div>
            <div className={styles.right}>
              {/* **************** */}
              <div className={styles.search}>
                <input
                  // className={styles.input__field}
                  type="text"
                  placeholder="Search  Available Product after loggged in "
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* <h2> */}
                {search === "" ? (
                  <></>
                ) : (
                  <>
                    <GrClose
                      className={styles.close}
                      onClick={() => clearSearchBox()}
                    />
                  </>
                )}
                {/* </h2> */}
              </div>
              {/* ************** */}
              <div className={styles.cart} onClick={() => navigate("/Cart")}>
                <img src={cartimg} width="40px" alt=" cart_icon" />
                <span className={styles.CartNumber}>{cart?.length}</span>
              </div>
              <FaUser
                onClick={() => toggleSidebar()}
                className={styles.userIcon}
              />
              {/* <div className={styles.logout__button}> */}
              <div
                className={
                  sidebar === true
                    ? `${
                        (styles.dropdown__items.active,
                        `${styles.dropdown__items}`)
                      }`
                    : `${styles.dropdown__items}`
                }
              >
                {" "}
                {sidebar !== true ? (
                  <> </>
                ) : (
                  <>
                    <div className={styles.innerContainer}>
                      <div>
                        <hr /> Shaharukh Khan
                      </div>
                      <button> Orders</button>
                      <button onClick={() => navigate("/Profile")}>
                        Profile
                      </button>
                      <button> LogOut</button>
                      <button onClick={closeSidebar}>
                        Close
                        <img
                          width={20}
                          src="https://www.freeiconspng.com/uploads/close-icon-png-close-window-icon-png-0.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </>
                )}
                {/* </div> */}
              </div>
            </div>
          </nav>
        </div>
      ) : (
        <div className={styles.fixedContainer}>
          <nav className={styles.container}>
            {/* **************** logo  left side */}
            <div className={styles.left} onClick={() => navigate("/")}>
              <img src={logo} alt="logo" />
            </div>

            {/* **************** logo  right side */}
            <div className={styles.showHamBurger}>
              <img
                width="50"
                src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg"
                alt="menu"
              />
            </div>
            <div className={styles.right}>
              <div className={styles.search}>
                <input
                  type="text"
                  value={search}
                  placeholder="Search Available Products"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className={styles.cart} onClick={() => navigate("/Cart")}>
                <img src={cartimg} width="40px" alt=" cart_icon" />
                <span className={styles.CartNumber}>{cart?.length}</span>
              </div>

              <div className={styles.login__button}>
                <button onClick={() => navigate("/Login")}> Login</button>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* // ***********searched products ********* */}
      {searched ? (
        <>
          <div className={styles.pop}>
            {searched.map((result) => {
              return (
                <>
                  <div className={styles.popInner}>
                    <div className={styles.card}>
                      <img src={result.image} width="60px" alt="photo" />
                      <h3>{result.model}</h3>
                      <h3>{result.price}</h3>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      ) : (
        " "
      )}
    </>
  );
};

export default Header;
