import React from 'react';
import CustomButton from '../../UI/CustomButton';

const CartIssue = ({cart , adedToOrderProducts}) => {

function orderPrice(cart, adedToOrderProducts) {
  if (!cart || !adedToOrderProducts) return 0;

  const priceAdedToOrderProducts = adedToOrderProducts.reduce((total, item) => {
    return total + (item.price * (item.quantity || 1));
  }, 0);

  const priceCart = cart.reduce((total, item) => {
    return total + (item.price * (item.quantity || 1));
  }, 0);

  return priceCart + priceAdedToOrderProducts;
}

    return (
        <div className='p-4 text-myTextGray text-xl shadow-xl rounded-md'>
            <input type="text" className='w-full border h-16 rounded-md px-4' placeholder='промокод?' />
            <div className='flex flex-col gap-3 mt-2'>
                <div className='flex justify-between'>
                    <span>Товаров</span>
                <span>{cart.length}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Знижка</span>
                    <span> без знижки </span>
                </div>
                <h4 className='text-black text-2xl'>{orderPrice(cart, adedToOrderProducts)} грн</h4>
                <CustomButton className='mt-3 font-semibold  '     >
                    <span>Оформити</span>
                    <span className='ml-3'>{orderPrice(cart, adedToOrderProducts)} грн</span>
                </CustomButton>
            </div>
        </div>
    );
};

export default CartIssue;