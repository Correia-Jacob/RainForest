import React from 'react';
import './css/All.css';

function All() {
    return (
        <div className='all'>
            <div class='all__row'>
                <a href='/hoodie'>
                    <div class='card'>
                        <div class='card__img'>
                            <img src='https://m.media-amazon.com/images/I/61UO1jJM-FL._AC_UX679_.jpg' alt='' />
                        </div>
                        <div class='item__info'>
                            <div>
                                <span class='item price'>$19.98</span>
                                <span class='item name'>Hoodie</span>
                            </div>
                        </div>
                    </div>
                </a>
                <a href='/ipad' >
                    <div class='card'>
                        <div class='card__img'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' alt='' />
                        </div>
                        <div class='item__info'>
                            <div>
                                <span class='item price'>$499.98</span>
                                <span class='item name'>iPad Pro</span>
                            </div>
                        </div>
                    </div>
                </a>

                <a href='/airpods' >
                    <div class='card'>
                        <div class='card__img'>
                            <img src='https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg' alt='' />
                        </div>
                        <div class='item__info'>

                            <div>
                                <span class='item price'>$99.98</span>
                                <span class='item name'>Airpods</span>
                            </div>
                        </div>
                    </div>
                </a>

            </div>


            <div class='all__row'>
                <a href='/applewatch' >
                    <div class='card'>
                        <div class='card__img'>
                            <img src='https://m.media-amazon.com/images/I/51Wp-KowwXL._AC_SL1024_.jpg' alt='' />
                        </div>
                        <div class='item__info'>
                            <div>
                                <span class='item price'>$399.98</span>
                                <span class='item name'>Apple Watch</span>
                            </div>
                        </div>
                    </div>
                </a>

                <a href='/echodot' >
                    <div class='card'>
                        <div class='card__img'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg' alt='' />
                        </div>
                        <div class='item__info'>
                            <div>
                                <span class='item price'>$39.98</span>
                                <span class='item name'>Echo Dot</span>
                            </div>
                        </div>
                    </div>
                </a>

                <a href='/pi'>
                    <div class='card'>
                        <div class='card__img'>
                            <img src='https://m.media-amazon.com/images/I/71-2nd6QRnL._AC_SL1400_.jpg' alt='' />
                        </div>
                        <div class='item__info'>

                            <div>
                                <span class='item price'>$139.98</span>
                                <span class='item name'>Raspberry Pi</span>
                            </div>
                        </div>
                    </div>
                </a>

            </div>

            <div class='all__row'>
                <a href='/arduino' >
                    <div class='card'>
                        <div class='card__img'>
                            <img src='https://m.media-amazon.com/images/I/71z22cRPeeL._AC_SL1000_.jpg' alt='' />
                        </div>
                        <div class='item__info'>
                            <div>
                                <span class='item price'>$29.98</span>
                                <span class='item name'>Arduino Uno R3</span>
                            </div>
                        </div>
                    </div>
                </a>

                <a href='/jacket' >
                    <div class='card'>
                        <div class='card__img'>
                            <img src='https://m.media-amazon.com/images/I/919jHf-RRbS._AC_UX342_.jpg' alt='' />
                        </div>
                        <div class='item__info'>
                            <div>
                                <span class='item price'>$49.98</span>
                                <span class='item name'>Black Jacket</span>
                            </div>
                        </div>
                    </div>
                </a>

                <a href='/shirt' >
                    <div class='card'>
                        <div class='card__img'>
                            <img src='https://m.media-amazon.com/images/I/61LEcNh7mAL._AC_UL1024_.jpg' alt='' />
                        </div>
                        <div class='item__info'>

                            <div>
                                <span class='item price'>$29.98</span>
                                <span class='item name'>Corduroy Shirt</span>
                            </div>
                        </div>
                    </div>
                </a>

            </div>

        </div >
    );
}

export default All;
