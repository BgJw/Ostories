import './Products.scss';
import { Link } from 'react-router-dom';
import { IClothesService } from '../../services/ClothesService';

interface IProduct {
    product: IClothesService
}

const Products = ({product}: IProduct) => {

    return (
        <div className='product'>
            <div className='product__img'>
                <div className='product__img-buttons'>
                    <button className='product__img-buttons-notFavorites' />
                    <button className='product__img-buttons-favorites' />
                </div>
                <Link to="/product">
                    <img className='product__img-photo' src={product.urls.regular} alt={product.alt_description} />
                </Link>
            </div>

            <div className='product__preview'>
                <h3 className='product__preview-title'>{product.alt_description}</h3>
                <div className='product__preview-buy'>
                    <span className='product__preview-buy-price'>5 290$</span>
                    <div className='product__preview-buy-button'><button /></div>
                </div>
            </div>
        </div>
    );
};

export default Products;