import React, { useState, useEffect } from 'react'
import styles from '../AdminSideNav/AdminSideNav.module.css'
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { BiFolderPlus } from 'react-icons/bi'
import { HiDatabase } from 'react-icons/hi'
import { CgRecord, CgProfile } from 'react-icons/cg'
import { AiOutlineLogout } from 'react-icons/ai'
import Upload from '../../../Seller/components/Upload/Upload';


const AdminSideNav = () => {
  const location = useLocation();
  console.log(location.state)

  const [popup, setPopup] = useState(false)

  const navigate = useNavigate();
  // const [active, setActive] = useState(false);
  const [color, setColor] = useState()
  const home = () => {
    navigate('/Seller_Dashboard')
    setColor()
  };

  const upload = () => {
    // setActive(!active);
    // navigate('Upload')
    setPopup(true)
  };

  const products = () => {
    // setActive(!active);
    navigate('Products')

  };

  // *** retrieving Current User ....

  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
    }
  }, []);

  // console.log(currentUser.email)

  // *** Deleting Current User from localStorage

  const removeCurrentUser = () => {
    alert("Seller LogOut");

    localStorage.removeItem("user");
    navigate('/')
  }


  return (
    <>
      <div className={styles.container}>

        <div className={styles.top}>
          <h3 className={styles.header} onClick={() => navigate('/')}> Admin Panel</h3>
          <h5 className={styles.user}>    Seller As <span>{currentUser.name}  </span> </h5>
        </div>

        <div className={styles.inner}>

          <nav className={styles.sidebar}>
            <ul>
              <li onClick={() => home()}><a > {<FaHome className={styles.icons} />} Home</a></li>
              <li onClick={() => products()}><a > {<HiDatabase className={styles.icons} />} My Product</a></li>
              <li onClick={() => upload()}><a >  {<BiFolderPlus className={styles.icons} />} Add New </a></li>
              <li><a> {<CgRecord className={styles.icons} />} Orders</a></li>
              <li><a> {<CgRecord className={styles.icons} />} Delivered Orders</a></li>
              <li><a> {<CgRecord className={styles.icons} />} Pending Order</a></li>
              <li><a> {<CgRecord className={styles.icons} />} Orders</a></li>
              <li><a> {<CgProfile className={styles.icons} />} Profile</a></li>
              <li onClick={() => removeCurrentUser()}><a> {<AiOutlineLogout className={styles.icons} />} Logout</a></li>

            </ul>
          </nav>
          <div className={styles.display_content}>
            <Outlet >
            </Outlet>
            <Upload trigger={popup} setTrigger={setPopup} />

          </div>
        </div>
      </div>

    </>
  )

}

export default AdminSideNav
