import React from "react";
import CustomButton from "../../UI/CustomButton";
import { Link } from "react-router-dom";
import { orderPrice } from '../../utils/cart';

const CartIssue = ({ cart, adedToOrderProducts }) => {
    const price = orderPrice(cart, adedToOrderProducts)

  return (
    <div className="p-4 text-myTextGray text-xl shadow-xl rounded-md">
      <input
        type="text"
        className="w-full border h-16 rounded-md px-4"
        placeholder="промокод?"
      />
      <div className="flex flex-col gap-3 mt-2">
        <div className="flex justify-between">
          <span>Товаров</span>
          <span>{cart.length}</span>
        </div>
        <div className="flex justify-between">
          <span>Знижка</span>
          <span> без знижки </span>
        </div>
        <h4 className="text-black text-2xl">
          {cart.length ? orderPrice(cart, adedToOrderProducts) + "грн" : ""}{" "}
        </h4>
        <CustomButton className="mt-3 font-semibold  ">
          {cart.length > 0 ? (
            <>
              <span>Оформити</span>
              <span className="ml-3">
                {orderPrice(cart, adedToOrderProducts)} грн
              </span>
            </>
          ) : (
            <Link to={'/'}>Треба наповнити кошик</Link>
          )}
        </CustomButton>
      </div>
    </div>
  );
};

export default CartIssue;
