import React, { FC } from 'react';

interface ICustomButtonProps {
    className?:string ,
    Children: any ,
    onClick: any
}

const CustomButton:FC<ICustomButtonProps> = ({Children , className , onClick}) => {
    return (
        <button onClick={onClick} className={`${className} font-extrabold bg-[#F6CF59] text-white px-6 py-3 rounded-lg hover:bg-[#8F7834] transition`}>
            {Children.toLocaleUpperCase()}
        </button>
    );
};

export default CustomButton;