import React from "react";
import { useLocation } from "react-router-dom";
import FormOder from "../components/CheckoutOrder/FormOder";
import ListItemsOrder from "../components/CheckoutOrder/ListItemsOrder";
import { ItemProduct } from "../../types";

const ChekoutOrder = () => {
  const location = useLocation();
  const orders = location.state as ItemProduct[] ;


  return (
    <div className="max-w-[1200px] w-full mx-auto p-6 bg-white shadow-md rounded-xl my-10 ">
            <div>
        <h2> ваш Заказ</h2>
        <ListItemsOrder listOrders={orders} />
      </div>
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Оформлення замовлення
      </h1>

      <div>
        <FormOder />
      </div>
    </div>
  );
};

export default ChekoutOrder;
