import React from 'react';

const Button = ({Children}) => {
    return (
        <button className=' font-extrabold bg-[#F6CF59] text-white px-6 py-3 rounded-lg hover:bg-[#8F7834] transition'>
            {Children.toLocaleUpperCase()}
        </button>
    );
};

export default Button;