import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./components/Main";
import CardProduct from "./pages/CardProduct";
import ListCurrentCategory from "./pages/ListCurrentCategory";
import Cart from "./pages/Cart";
import ChekoutOrder from "./pages/ChekoutOrder";
import Login from "./pages/Login";
import UserData from "./pages/UserData";
import UserProfile from "./components/User/UserProfile";
import UserOrders from "./components/User/UserOrders";
import UserAdress from "./components/User/UserAdress";
import Favorites from "./components/User/Favorites";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="product" element={<CardProduct />}></Route>
          <Route
            path="category/:name"
            element={<ListCurrentCategory />}
          ></Route>
          <Route path="product/:name" element={<CardProduct />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="/ChekoutOrder" element={<ChekoutOrder />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/User" element={<UserData />}>
            <Route index element={<UserProfile />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="UserOrders" element={<UserOrders />} />
            <Route path="UserAdress" element={<UserAdress />} />
            <Route path="Favorites" element={<Favorites />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
