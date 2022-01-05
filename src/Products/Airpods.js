import React from 'react';
import Product from '../Product';

function Airpods() {
    return (
        <div className='airpods'>
            <Product
                title='Airpods'
                image='https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg'
                price='99.98'
                rating={5}
                dsc1={'Quick access to Siri'}
                dsc2={'More than 24 hours total listening time with the Charging Case'}
                dsc3={'Effortless setup, in-ear detection, and automatic switching'}
            />
        </div >
    )
}

export default Airpods;
