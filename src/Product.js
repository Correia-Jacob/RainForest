import React from 'react';
import './css/Product.css';
import { useStateValue } from './StateProvider';

function Product({ title, image, price, rating, dsc1, dsc2, dsc3 }) {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <img src={image} alt='' />

            <div className='product__info'>
                <p className='product__title'>{title}</p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <p className='product__price'>
                    <small>Price: ${price}</small>
                </p>
                <ul className='description'>
                    <li>{dsc1}</li>
                    <li>{dsc2}</li>
                    <li>{dsc3}</li>
                </ul>
            </div>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;
