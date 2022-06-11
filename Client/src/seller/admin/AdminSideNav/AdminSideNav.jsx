import React, { useState } from 'react'
import styles from '../AdminSideNav/AdminSideNav.module.css'
import { useNavigate, Link, Outlet } from 'react-router-dom'
import Header from '../../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { BiFolderPlus } from 'react-icons/bi'
import { HiDatabase } from 'react-icons/hi'
import { CgRecord, CgProfile } from 'react-icons/cg'
import { AiOutlineLogout } from 'react-icons/ai'
import Upload from '../../Upload/Upload'

const AdminSideNav = () => {
  const location = useLocation();
  const [popup, setPopup] = useState(false)

  const navigate = useNavigate();
  // const [active, setActive] = useState(false);
  const [color, setColor] = useState()
  const home = () => {
    // setActive(!active);
    navigate('Home')
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

  return (
    <>
      <div className={styles.container}>

        <div className={styles.top}>
          <h3 className={styles.header} onClick={() => navigate('/')}> Admin Panel</h3>
          <h5 className={styles.user}>Logged as Salman khan</h5>
        </div>

        <div className={styles.inner}>

          <nav className={styles.sidebar}>
            <ul>
              <li onClick={() => home()}><a > {<FaHome className={styles.icons} />} Home</a></li>
              <li onClick={() => products()}><a > {<HiDatabase className={styles.icons} />} Our Product</a></li>
              <li onClick={() => upload()}><a >  {<BiFolderPlus className={styles.icons} />} Add New Product</a></li>
              <li><a> {<CgRecord className={styles.icons} />} Orders</a></li>
              <li><a> {<CgRecord className={styles.icons} />} Delivered Orders</a></li>
              <li><a> {<CgRecord className={styles.icons} />} Pending Order</a></li>
              <li><a> {<CgRecord className={styles.icons} />} Orders</a></li>
              <li><a> {<CgProfile className={styles.icons} />} Profile</a></li>
              <li><a> {<AiOutlineLogout className={styles.icons} />} Logout</a></li>
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
