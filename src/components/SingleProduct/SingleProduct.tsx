import React from 'react';
import './SingleProduct.scss';

const SingleProduct = () => {
    return (
        <div className='wrap'>
            <div className='wrap__photo'>
                <div className='wrap__photo-compare'>
                    <button className='wrap__photo-compare-bttn bttn__link' />
                </div>
            <img className='wrap__photo-img' src='https://images.unsplash.com/photo-1614676459401-34413f54cc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTIxNzV8MHwxfHNlYXJjaHwzfHxjbG90aGVzfGVufDB8MXx8YmxhY2t8MTY3MTg0MTg5MQ&ixlib=rb-4.0.3&q=80&w=1080' alt="" />
            </div>
            <div className='wrap__information'>
                <div className='wrap__information__preview'>
                    <h2>NAME NAME NAME</h2>
                    <span className='wrap__information__preview-price'>2 500 $</span>
                </div>

                    Sizing
                <div className='wrap__information__sizes'>
                    <button className='wrap__information__sizes-bttn'>S</button>
                    <button className='wrap__information__sizes-bttn'>M</button>
                    <button className='wrap__information__sizes-bttn'>L</button>
                    <button className='wrap__information__sizes-bttn'>XL</button>
                </div>

                <div className='wrap__information__buy'>
                    <button className='wrap__information__buy-bttn'> BUY IT </button>
                    <div className='wrap__information__buy-favorites'>
                        <button className='wrap__information__buy-favorites'  />
                        <button className='wrap__information__buy-favorites likes'  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;