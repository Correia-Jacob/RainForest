import React from 'react';
import Product from '../Product';

function Arduino() {
    return (
        <div className='arduino'>
            <Product
                title='Arduino Uno R3'
                image='https://m.media-amazon.com/images/I/71z22cRPeeL._AC_SL1000_.jpg'
                price='29.98'
                rating={5}
                dsc1={'Arduino is an open-source hardware, software, and content platform'}
                dsc2={'The Uno is the most used and documented board in the world'}
                dsc3={'Great for learning the basics of how sensors and actuators work'}
            />
        </div >
    )
}

export default Arduino;
