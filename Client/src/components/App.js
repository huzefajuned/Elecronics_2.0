import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './components/Routes/Routes'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios'



function App() {

  const [searchItem, setSearchItem] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [prodData, setProdData] = useState([]);

  useEffect(() => {
    loadProductData();
  }, [])
  const loadProductData = () => {
    axios.get('/product/read').then((resp) => {
      setProdData(resp.data);
    })
  }
  // for Cart.....
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    toast.success("Item Added")
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <>
      <BrowserRouter>
        <AllRoutes
          isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
          loadProductData={loadProductData} prodData={prodData}
          searchItem={searchItem} setSearchItem={setSearchItem}
          cart={cart} setCart={setCart} handleChange={handleChange}
          handleClick={handleClick}

        />
          {/* **********Routes for Admins Only *************** */}
          {/* <Routes>
                <Route path="Admin" element={<Admin />} >

                    <Route path="Home" element={<Home />} />
                    <Route path="Products" element={<Products />} />
                    <Route path="Upload" element={<Upload />} />

                </Route>
            </Routes> */}

      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
