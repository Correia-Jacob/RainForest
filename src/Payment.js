import React, { useState, useEffect } from 'react';
import './css/Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import { db } from './firebase';
import { nanoid } from 'nanoid';

function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();
    const history = useHistory();


    const pay = event => {
        db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(nanoid())
            .set({
                cart: cart,
                amount: getCartTotal(cart)
            })
        dispatch({
            type: 'EMPTY_CART'
        })

        history.replace('/orders')
    }

    return (
        <div className='payment'>
            <div className='payment__container'>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3 style={{ userSelect: 'none' }}>Delivery Address</h3>
                    </div>
                    <div className='payment__address' style={{ userSelect: 'none' }}>
                        <p>{user?.email}</p>
                        <p>3737 RainForest St</p>
                        <p>Detroit, MI</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3 style={{ userSelect: 'none' }}>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {cart.map(item => (
                            <CheckoutProduct
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>


                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3 style={{ userSelect: 'none' }}>Payment Method</h3>
                    </div>
                    <div className='payment__details'>

                        <form >

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3 style={{ userSelect: 'none' }}>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button onClick={pay}>
                                    <span><p>Pay</p></span>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Payment;
