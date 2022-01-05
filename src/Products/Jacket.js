import React from 'react';
import Product from '../Product';

function Jacket() {
    return (
        <div className='jacket'>
            <Product
                title='Black Jacket'
                image='https://m.media-amazon.com/images/I/919jHf-RRbS._AC_UX342_.jpg'
                price='49.98'
                rating={3}
                dsc1={'Cool jacket'}
                dsc2={'This jacket keeps you warm but looks cool'}
                dsc3={'Fits all sizes'}
            />
        </div >

    )
}

export default Jacket;
