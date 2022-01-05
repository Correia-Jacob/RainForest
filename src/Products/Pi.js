import React from 'react';
import Product from '../Product';

function Pi() {
    return (
        <div className='pi'>
            <Product
                title='Raspberry Pi'
                image='https://m.media-amazon.com/images/I/71-2nd6QRnL._AC_SL1400_.jpg'
                price='139.98'
                rating={5}
                dsc1={'Broadcom BCM2711'}
                dsc2={'Quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1. 5GHz'}
                dsc3={'Wireless LAN, Bluetooth 5. 0, double-true Gigabit Ethernet'}
            />
        </div >
    )
}

export default Pi;
