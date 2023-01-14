import React from "react";
import {Routes,Route} from "react-router-dom"

import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home'
import Menu from "./Pages/Menu/Menu";
import Cart from "./Pages/Cart/Cart";
import Nopage from './Pages/Nopage/Nopage'
import QRcode from "./Pages/QRcode/QRcode";
import Rate from './Pages/RatePage/Rate'

const AllRoutes=()=>{
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/pay' element={<QRcode/>}/>
            <Route path='/rate' element={<Rate/>}/>
            <Route path="*" element={<Nopage/>}/>
        </Routes>
    )
}
export default AllRoutes