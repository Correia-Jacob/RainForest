import React from 'react';
import Product from '../Product';

function Shirt() {
    return (
        <div className='shirt'>
            <Product
                title='Corduroy Shirt'
                image='https://m.media-amazon.com/images/I/61LEcNh7mAL._AC_UL1024_.jpg'
                price='29.98'
                rating={4}
                dsc1={'8.9-ounce, 100% Cotton corduroy'}
                dsc2={'Two front handwarmer pockets with jersey lining'}
                dsc3={'Fits all sizes'}
            />
        </div >
    )
}

export default Shirt;
