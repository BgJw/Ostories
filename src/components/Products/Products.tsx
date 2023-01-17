import { Link } from 'react-router-dom';
import './Products.scss';
import MyButtons from '../MyButtons/MyButtons';
import { BadgeType, IClothesService } from '../../types/Types';

interface IProduct {
    product: IClothesService
}

const Products = ({product}: IProduct) => {
    
    return (
        <div className='product'>

            <div className='product__img'>
                <div className='product__img-buttons'>
                    {
                        <MyButtons
                            on='&#9825;'
                            off='&#10084;'
                            styles={{on: 'product__img-buttons-favoritesOf', off: 'product__img-buttons-favoritesOn'}}
                            type={BadgeType.favorite}
                            product={product} 
                        />
                    }

                </div>
                <Link to={`/product/${product.id}`}>
                    <img
                        className='product__img-photo' 
                        src={product.urls.regular} 
                        alt={product.alt_description} 
                    />
                </Link>
            </div>

            <div className='product__preview'>
                <div className='product__preview-title'>{product.alt_description}</div>
                <div className='product__preview-buy'>
                    <p className='product__preview-buy-price'>{product.price} $</p>
                    <div className='product__preview-buy-button'>
                        <Link to={`/product/${product.id}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;