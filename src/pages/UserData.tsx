import React from 'react';
import { Outlet } from 'react-router-dom';
import UserMenu from '../components/User/UserMenu';
import { useCartStore } from '../store/cart';


const UserData = () => {
    const {cart} = useCartStore( state => state )
    console.log(cart)

    async function postItemInCart(){
        const response = await fetch( 'http://localhost:5000/3/orders' )
    }

    return (
        <div className='flex h-full border flex-1 mt-2  '>
            <div className='w-[20%] border'>
                <UserMenu />
            </div>
            <div className='flex flex-1 h-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default UserData;