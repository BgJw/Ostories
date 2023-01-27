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
                    {
                        <MyButtons
                            on='&#9825;'
                            off='&#10084;'
                            styles={{on: 'favoritesOf', off: 'favoritesOn'}}
                            type={BadgeType.favorite}
                            product={product} 
                        />
                    }
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
                    <p>{product.price} $</p>
                    <Link to={`/product/${product.id}`} />
                </div>
            </div>
        </div>
    );
};

export default Products;