import React from 'react';
import Product from '../Product';


function EchoDot() {
    return (
        <div className='echodot'>
            <Product
                title='Echo Dot'
                image='https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg'
                price='39.98'
                rating={5}
                dsc1={'Meet Echo Dot - Our most compact smart speaker'}
                dsc2={'Ask Alexa to tell a joke, play music, answer questions, and more'}
                dsc3={'Connect with others hands-free'}
            />
        </div >
    )
}

export default EchoDot;
