import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./components/Main";
import CardProduct from "./pages/CardProduct";
import ListCurrentCategory from "./pages/ListCurrentCategory";
import Cart from "./pages/Cart";


const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main /> }></Route>
          <Route path="product" element={<CardProduct /> }></Route>
          <Route path="category/:name" element={<ListCurrentCategory /> }></Route>
               <Route path="product/:name" element={<CardProduct /> }></Route>
                         <Route path="cart" element={<Cart /> }></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
