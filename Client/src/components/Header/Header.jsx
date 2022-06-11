import React, { useState } from "react";
import styles from "../Header/Header.module.css";
import logo from "../../images/logo.png";
import userImg from "../../images/user.png";
import { useNavigate } from "react-router-dom";
import cartimg from '../../images/cart.PNG';


const Header = ({ cart, isLoggedIn, size, searchItem, setSearchItem }) => {

  const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(true);
  const onClick = () => {
    setClick(false)

  };

  return (
    <>
      {isLoggedIn ? (
        <nav className={styles.header__container}>
          <div className={styles.logo__left} onClick={() => navigate('/')}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.logo__right}>
            <div className={styles.shopping__cart} onClick={() => navigate('/Cart')}>

              <img src={cartimg}
                width='50px' alt="" style={{ padding: '0px' }} />
              <span className={styles.shoppingCart__number}>
                {cart?.length}
              </span>
            </div>

            <h2>
              
            </h2>
            {/* {loggedIn.user} */}

            {/* **************** */}
            <div className={styles.showProductsInner__search}>
              <input
                className={styles.input__field}
                type="text"
                placeholder="Search Available Product"
                onChange={(e) => setSearchItem(e.target.value)}
              />
            </div>
            {/* ************** */}

            <div className={styles.logout__button}>
              <div className={styles.dropdown__container}>
                <img src={userImg} alt="user-icon" onClick={() => handleClick(click)} />

                {
                  !click ? (<> </>) : (<>
                    <div className={styles.dropdown__items}  >
                      <button> Orders</button>
                      <button onClick={() => navigate('/Profile')}> Profile</button>
                      <button> LogOut</button>
                      <button onClick={onClick}> Close <img width={20} src="https://www.freeiconspng.com/uploads/close-icon-png-close-window-icon-png-0.png" alt="" /></button>
                    </div>
                  </>
                  )}

              </div>
            </div>
          </div>
        </nav>
      ) : (
        <div>
          <nav className={styles.header__container}>
            <div className={styles.logo__left} onClick={() => navigate('/')}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.logo__right}>
              <div className={styles.shopping__cart} onClick={() => navigate('/Cart')}>

                <img src={cartimg}
                  width='50px' alt="" style={{ padding: '0px' }} />
                <span className={styles.shoppingCart__number}>
                  {cart?.length}
                </span>
              </div>
              <div className={styles.login__button}>
                <button onClick={() => navigate('/Login')}> Login</button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
