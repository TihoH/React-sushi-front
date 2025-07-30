import React from 'react';
import CustomButton from '../../UI/CustomButton';

const CartIssue = ({cart}) => {


 function orderPrice() {
    if (!cart) {
        return null;
    }

    return cart.reduce((total, item) => {
        if (item.quantity) {
            return total + item.price * item.quantity;
        }
        return total;
    }, 0);
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
                <h4 className='text-black text-2xl'>{orderPrice()} грн</h4>
                <CustomButton className='mt-3 font-semibold '     >
                    <span>Оформити</span>
                    <span className='ml-3'>{orderPrice()} грн</span>
                </CustomButton>
            </div>
        </div>
    );
};

export default CartIssue;