import React from 'react';

const Footer = () => {
    const styleUl = 'flex flex-col mt-2 md:gap-5  md:mt-0'
    return (
        <div className=' flex md:flex-row flex-col justify-between py-10 px-5 '>
            <ul className={`${styleUl}`}>
                <li className=' font-semibold text-xl md:text-2xl'>We Sushi</li>
                <span className='text-myTextGray'>Акції</span>
            </ul>
             <ul className={`${styleUl}`}>
                <li className=' font-semibold -xl md:text-2xll'>Юридична iнформація</li>
                <span className='text-myTextGray'>Публічна оферта</span>
                  <span className='text-myTextGray'>Політика конфіденційності</span>
            </ul>
             <ul className={`${styleUl}`}>
                <li className=' font-semibold -xl md:text-2xl'>Доставка та ресторани</li>
                <span className='text-myTextGray'>Доставка та самовиніс</span>
                   <span className='text-myTextGray'>Наші ресторани</span>
            </ul>
             <ul className={`${styleUl}`}>
                <li className=' font-semibold -xl md:text-2xl'>Підтримка</li>
                <span className=''>0 800 336 939</span>
                <span><a href=''>TURBOTA@WESUSHI.COM.UA</a></span>
            </ul>
            
        </div>
    );
};

export default Footer;