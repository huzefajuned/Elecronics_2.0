import React from 'react'
import AdminSideNav from '../AdminSideNav/AdminSideNav'
import styles from '../AdminHomePage/AdminHomePage.module.css'

const HomeAdminPage = () => {
  return (
    <div className={styles.container}>
      <AdminSideNav />
    </div>
  )
}

export default HomeAdminPage;