import React, { FC } from 'react';

interface ICustomButtonProps {
    className?:string ,
    children: React.ReactNode ,
    onClick?: any ,
    widthBtn?: number ,
    active?: boolean
}

const CustomButton:FC<ICustomButtonProps> = ({children , className , onClick , widthBtn , active = true }) => {
    return (
        <button onClick={onClick} className={`${className} ${active ? 'bg-[#F6CF59] text-white font-extrabold' : 'hover:text-white' }   h-[50px] w-[${widthBtn ? widthBtn : ''}px] px-6  rounded-lg hover:bg-[#8F7834] transition`}>
            {typeof children === 'string' ? children.toLocaleUpperCase() : children}
        </button>
    );
};

export default CustomButton;