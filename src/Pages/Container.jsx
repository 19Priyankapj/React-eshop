import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../Component/default/Home"
import About from "../Component/default/About"
import Contact from "../Component/default/Contact"
import Pnf from "../Component/default/Pnf"
import Register from "../Component/auth/Register"
import Login from '../Component/auth/login'
import Store from './../screens/Product/store';
import ProductCart from './../screens/Cart/ProductCart';
import Productcheckout from './../screens/Checkout/Productcheckout';


function Container(){
    return(
        <Routes>
            <Route path=  {`/`} element={<Home/>}>
                <Route path={`/`} element={<Store/>}/>
                <Route path={`/cart`} element={<ProductCart/>}/>
                <Route path={`/checkout`} element={<Productcheckout/>}/>
            </Route>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={'/login'} element={<Pnf/>}/>
            <Route path={'/register'} element={<Login/>}/>
            <Route path={'/*'} element={<Register/>}/>
        </Routes>
    )

}
export default Container