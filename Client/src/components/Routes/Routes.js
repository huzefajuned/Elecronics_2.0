import React from 'react'
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Login from '../../Pages/Login/Login'
import HomePage from '../../Pages/HomePage/HomePage';
import CartItems from '../CartItems/CartItems'
import ViewProduct from '../ViewProduct/ViewProduct';
import Profile from '../../Pages/Profile/Profile';
import Admin from '../../Seller/Admin/AdminHomePage/AdminHomePage'
import Upload from '../../Seller/components/Upload/Upload'
import Products from '../../Seller/components/Products/Products';
import Home from '../../Seller/Home/Home';
import Header from '../Header/Header';

//importing seller Components.
import Seller_Register from '../../Seller/pages/Seller_Register/Seller_Register';
import Seller_Login from '../../Seller/pages/Seller_Login/Seller_Login';

const AllRoutes = ({ prod, isLoggedIn, setIsLoggedIn, loadProductData, prodData, searchItem, setSearchItem, cart, setCart, handleChange, handleClick, size }) => {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage cart={cart} setCart={setCart} prod={prod}
                        loadProductData={loadProductData} prodData={prodData}
                        searchItem={searchItem} setSearchItem={setSearchItem}
                        handleClick={handleClick}
                        size={size}
                        isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
                    />} />

                    <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} handleChange={handleChange} size={size} />} />
                    <Route path="/Login" element={<Login cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/CartItems" element={<CartItems cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} handleChange={handleChange} handleClick={handleClick} size={size} />} />
                    <Route path="/ViewProduct" element={<ViewProduct cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} handleClick={handleClick} />} />
                    <Route path="/Profile" element={<Profile cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                </Routes>
            </div>

            {/* **********Routes for Admins Only *************** */}
            <Routes>
                <Route path="Seller_Dashboard" element={<Admin />} >
                    <Route path="" element={<Home />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Products" element={<Products />} />
                    <Route path="Upload" element={<Upload />} />

                </Route>
            </Routes>

            {/* ***** seller register and login routes */}
            <Routes>
                <Route path='/seller_Register' element={<Seller_Register />} />
                <Route />
                <Route path='/seller_Login' element={<Seller_Login />} />
            </Routes>

        </>
    )
}

export default AllRoutes;