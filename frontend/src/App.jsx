import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import SignIn from './components/SignIn/SignIn'
import Menu from './components/Menu/Menu'
import { StoreContext } from './context/Context'

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const {category,setCategory} = useContext(StoreContext)
  return (
  <>
    {showSignIn?<SignIn onClose={() => setShowSignIn(false)} />:<></>}
    <div className='app'>
      <Navbar setShowSignIn = {setShowSignIn}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/menu' element={<Menu category={category} setCategory={setCategory} />} />
      </Routes>
    </div>
      <ScrollToTopButton/>
      <Footer/>
  </>
  )
}

export default App