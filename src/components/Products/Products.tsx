import './Products.scss';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className='product'>
            <div className='product__img'>
                <div className='product__img-buttons'>
                    <button className='product__img-buttons-notFavorites' />
                    <button className='product__img-buttons-favorites' />
                </div>
                <Link to="/product">
                    <img className='product__img-photo' src='https://images.unsplash.com/photo-1614676459401-34413f54cc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTIxNzV8MHwxfHNlYXJjaHwzfHxjbG90aGVzfGVufDB8MXx8YmxhY2t8MTY3MTg0MTg5MQ&ixlib=rb-4.0.3&q=80&w=1080' alt="" />
                </Link>
            </div>

            <div className='product__preview'>
                <h3 className='product__preview-title'>bomber classic</h3>
                <div className='product__preview-buy'>
                    <span className='product__preview-buy-price'>5 290$</span>
                    <div className='product__preview-buy-button'><button /></div>
                </div>
            </div>
        </div>
    );
};

export default Products;