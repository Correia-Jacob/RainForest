import React from 'react'
import './css/Footer.css'
function Footer() {
    return (
        <div>
            <div className='footer' style={{ userSelect: 'none' }}>
                <div className='footer__container'>
                    <div>
                        <p className='footer__title'>
                            Get to Know Us</p>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>About RainForest</p>
                        <p>Sustainability</p>
                        <p>Press Center</p>
                        <p>Investor Relations</p>
                    </div>
                    <div>
                        <p className='footer__title'>
                            Make Money with Us</p>
                        <p>Sell apps on RainForest</p>
                        <p>Become an Affiliate</p>
                        <p>Advertise Your Products</p>
                        <p>Self-publish with us</p>
                        <p>Host an RainForest Hub</p>
                        <p>See More Ways to Make Money</p>
                    </div>
                    <div>
                        <p className='footer__title'>
                            RainForest Payment Products</p>
                        <p>RainForest Rewards</p>
                        <p>RainForest Store Card</p>
                        <p>Reload Your Balance</p>
                        <p>RainForest Business Card</p>
                        <p>Shop with Points</p>
                        <p>RainForest Currency Converter</p>
                    </div>
                    {<div>
                        <p className='footer__title'>
                            Let Us Help You</p>
                        <p>RainForest and Covid-19</p>
                        <p>Your Account</p>
                        <p>Your Orders</p>
                        <p>Shipping Rates & Policies</p>
                        <p>Returns & Replacement</p>
                        <p>Help</p>
                    </div>}
                </div>
                <div className='footer__copyright'>
                    <div className='footer__copyright__info'>
                        <span>Conditions of Use </span>
                        <span>Privacy Notice </span>
                        <span>Interest-Based Ads </span>
                        <span> ©2021, Rainforest</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
