import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-between py-10 px-5'>
            <ul className='flex flex-col gap-5'>
                <li className=' font-semibold text-2xl'>We Sushi</li>
                <span className='text-myTextGray'>Акції</span>
            </ul>
             <ul className='flex flex-col gap-5'>
                <li className=' font-semibold text-2xl'>Юридична iнформація</li>
                <span className='text-myTextGray'>Публічна оферта</span>
                  <span className='text-myTextGray'>Політика конфіденційності</span>
            </ul>
             <ul className='flex flex-col gap-5'>
                <li className=' font-semibold text-2xl'>Доставка та ресторани</li>
                <span className='text-myTextGray'>Доставка та самовиніс</span>
                   <span className='text-myTextGray'>Наші ресторани</span>
            </ul>
             <ul className='flex flex-col gap-5'>
                <li className=' font-semibold text-2xl'>Підтримка</li>
                <span className=''>0 800 336 939</span>
                <span><a href=''>TURBOTA@WESUSHI.COM.UA</a></span>
            </ul>
            
        </div>
    );
};

export default Footer;