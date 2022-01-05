import React from 'react';
import Product from '../Product';

function Hoodie() {
    return (
        <div className='hoodie'>
            <Product
                title='Hoodie'
                image='https://m.media-amazon.com/images/I/61UO1jJM-FL._AC_UX679_.jpg'
                price='19.98'
                rating={5}
                dsc1={'Cool hoodie'}
                dsc2={'Keeps you warm when it is cold and is very comfortable'}
                dsc3={'Fits all sizes'}
            />
        </div >
    )
}

export default Hoodie;
