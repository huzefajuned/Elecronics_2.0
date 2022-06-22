import React from 'react'
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Login from '../../Pages/Login/Login'
import HomePage from '../../Pages/HomePage/HomePage';
import CartItems from '../CartItems/CartItems'
import ViewProduct from '../ViewProduct/ViewProduct';
import Profile from '../../Pages/Profile/Profile';
import Admin from '../../seller/admin/AdminHomePage/AdminHomePage'
import Upload from '../../seller/Upload/Upload'
import Products from '../../seller/Products/Products';
import Home from '../../seller/Home/Home';
import Header from '../Header/Header';
const AllRoutes = ({ prod, isLoggedIn, setIsLoggedIn, loadProductData, prodData, searchItem, setSearchItem, cart, setCart, handleChange, handleClick, size }) => {
    return (
        <>
            <div>
                <Header
                    isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
                    searchItem={searchItem} setSearchItem={setSearchItem}
                    cart={cart}
                />
                <Routes>
                    <Route path="/" element={<HomePage cart={cart} setCart={setCart} prod={prod}
                        loadProductData={loadProductData} prodData={prodData}
                        searchItem={searchItem} setSearchItem={setSearchItem}
                        handleClick={handleClick}
                        size={size}
                    />} />

                    <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} size={size} />} />
                    <Route path="/Login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/CartItems" element={<CartItems cart={cart} setCart={setCart} handleChange={handleChange} handleClick={handleClick} size={size} />} />
                    <Route path="/ViewProduct" element={<ViewProduct handleClick={handleClick} />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
            </div>

            {/* **********Routes for Admins Only *************** */}
            <Routes>
                <Route path="Admin" element={<Admin />} >
                    <Route path="" element={<Home />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Products" element={<Products />} />
                    <Route path="Upload" element={<Upload />} />

                </Route>
            </Routes>

        </>
    )
}

export default AllRoutes