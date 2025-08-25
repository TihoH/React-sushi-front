import React from "react";
import CustomButton from "../../UI/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { orderPrice } from "../../utils/cart";

const CartIssue = ({ cart, adedToOrderProducts }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-5 md:mb-0 p-4 bg-white border border-gray-200 text-myTextGray shadow-lg rounded-xl max-w-md mx-auto">
      <input
        type="text"
        className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none h-14 md:h-16 rounded-lg px-4 text-base transition"
        placeholder="Введіть промокод"
      />
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between text-base text-gray-600">
          <span>Товарів</span>
          <span className="font-medium">{cart.length}</span>
        </div>
        <div className="flex justify-between text-base text-gray-600">
          <span>Знижка</span>
          <span className="italic text-gray-400">без знижки</span>
        </div>
        <h4 className="text-black font-bold text-xl md:text-2xl">
          {cart.length ? orderPrice(cart, adedToOrderProducts) + " грн" : ""}
        </h4>

        <CustomButton
          onClick={cart.length ? () => navigate("/ChekoutOrder") : null}
          className="mt-3 font-semibold fixed md:static bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 w-full md:w-auto px-6 py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {cart.length > 0 ? (
            <>
              <span>Оформити</span>
              <span className="ml-3">{orderPrice(cart, adedToOrderProducts)} грн</span>
            </>
          ) : (
            <Link to="/" className="block w-full text-center">
              Треба наповнити кошик
            </Link>
          )}
        </CustomButton>
      </div>
    </div>
  );
};

export default CartIssue;
