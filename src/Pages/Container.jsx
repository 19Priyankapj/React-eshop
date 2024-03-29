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
import SingleProduct from "../screens/Product/SingleProduct"
import PrivateRoute from "../PrivateRouter/PrivateRoute"




function Container(){
    return(
        <Routes>
            <Route element= {<PrivateRoute/>}>
                <Route path=  {`/`} element={<Home/>}>
                    <Route path={`/`} element={<Store/>}/>
                    <Route path={`/cart`} element={<ProductCart/>}/>
                    <Route path={`/product/:id`} element={<SingleProduct/>}/>
                    <Route path={`/checkout`} element={<Productcheckout/>}/>
                </Route>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
            </Route>
           
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/*'} element={<Pnf/>}/>
        </Routes>
    )

}
export default Container