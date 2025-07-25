import React from 'react';

const CartIssue = () => {
    return (
        <div className='p-4 text-myTextGray text-xl shadow-xl rounded-md'>
            <input type="text" className='w-full border h-12 rounded-md px-4' placeholder='промокод?' />
            <div className='flex flex-col gap-3 mt-2'>
                <div className='flex justify-between'>
                    <span>Товари</span>
                <span>1665 грн</span>
                </div>
                <div className='flex justify-between'>
                    <span>Знижка</span>
                    <span>254 грн</span>
                </div>
                <h4 className='text-black text-2xl'>1411 грн</h4>
            </div>
        </div>
    );
};

export default CartIssue;