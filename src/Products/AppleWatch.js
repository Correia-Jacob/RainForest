import React from 'react';
import Product from '../Product';

function AppleWatch() {
    return (
        <div className='apple__watch'>
            <Product
                title='Apple Watch'
                image='https://m.media-amazon.com/images/I/51Wp-KowwXL._AC_SL1024_.jpg'
                price='399.98'
                rating={5}
                dsc1={'Track your daily activity on Apple Watch'}
                dsc2={'Get high and low heart rate, and irregular heart rhythm notifications'}
                dsc3={'Sync your favorite music, podcasts, and audiobooks'}
            />
        </div >
    )
}

export default AppleWatch;
