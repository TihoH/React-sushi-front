import React from "react";
import CustomButton from "../../UI/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { orderPrice } from '../../utils/cart';

const CartIssue = ({ cart, adedToOrderProducts }) => {
    const navigate = useNavigate()

  return (
    <div className="p-4 text-myTextGray text-xl shadow-xl rounded-md">
      <input
        type="text"
        className="w-full border h-14 md:h-16 rounded-md px-4"
        placeholder="промокод?"
      />
      <div className="flex flex-col gap-3 mt-2">
        <div className="flex justify-between text-base">
          <span>Товаров</span>
          <span>{cart.length}</span>
        </div>
        <div className="flex justify-between text-base">
          <span>Знижка</span>
          <span> без знижки </span>
        </div>
        <h4 className="text-black md:text-2xl">
          {cart.length ? orderPrice(cart, adedToOrderProducts) + "грн" : ""}{" "}
        </h4>
        <CustomButton onClick={ cart.length ? () => navigate('/ChekoutOrder') : null } className="mt-3 font-semibold fixed md:static -bottom-[4px] -md:bottom-5 left-1/2 -translate-x-1/2 md:translate-x-0 w-full  rounded-none ">
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
