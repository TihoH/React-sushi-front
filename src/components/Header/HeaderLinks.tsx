import React from 'react';

const HeaderLinks = () => {
    const links = [
        {link: 'Сети' , id: 1},
        {link: 'Роли та суші' , id: 2},
        {link: 'Акції' , id: 3},
        {link: '1+1=3' , id: 4},
        {link: 'Комбо' , id: 5},
        {link: 'Суші бургери' , id: 6},
        {link: 'Гаряче та супи' , id: 7},
        {link: 'Салати та закуски' , id: 8},
        {link: 'Десерти' , id: 9},
        {link: 'Напої' , id: 10},
        {link: 'Доповнення' , id: 11},
    ]
    return (
        <ul className=' flex justify-between text-myTextGray font-medium shadow-lg py-4 -mx-[calc((100vw-100%)/2)] px-12'>
            {links.map( item => <li key={item.id}>{item.link}</li> )}
        </ul>
    );
};

export default HeaderLinks;