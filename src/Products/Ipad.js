import React from 'react';
import Product from '../Product';

function Ipad() {
    return (
        <div className='ipad'>
            <Product
                title='iPad Pro'
                image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                price='499.98'
                rating={5}
                dsc1={'10.2-inch Retina display with True Tone'}
                dsc2={'A13 Bionic chip with Neural Engine'}
                dsc3={'Up to 256GB storage'}
            />
        </div >
    )
}

export default Ipad;
