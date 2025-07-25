import React, { FC } from 'react';

interface ICustomButtonProps {
    className?:string ,
    children: React.ReactNode ,
    onClick?: any
}

const CustomButton:FC<ICustomButtonProps> = ({children , className , onClick}) => {
    return (
        <button onClick={onClick} className={`${className} font-extrabold bg-[#F6CF59] h-[50px] text-white px-6  rounded-lg hover:bg-[#8F7834] transition`}>
            {typeof children === 'string' ? children.toLocaleUpperCase() : children}
        </button>
    );
};

export default CustomButton;