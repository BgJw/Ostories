import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Hooks/useDispatch_Selector';
import { getSingleProduct } from '../../Slices/ProductSlice';
import { useBadge } from '../../Hooks/useBadge';
import './Products.scss';
import MyButtons from '../MyButtons/MyButtons';
import { BadgeType, IClothesService } from '../../types/Types';

interface IProduct {
    product: IClothesService
}

const Products = ({product}: IProduct) => {
    const {favorites} = useAppSelector( state => state.BadgeSlice );
    const likes = useBadge();
    const dispatch = useAppDispatch();


    useEffect(() => {
        likes.isCheckId(favorites.data, product );
    }, []);
    
    return (
        <div className='product'>

            <div className='product__img'>
                <div className='product__img-buttons'>
                    {
                        <MyButtons
                            on='&#9825;'
                            off='&#10084;'
                            styles={{on: 'product__img-buttons-favoritesOf', off: 'product__img-buttons-favoritesOn'}}
                            name={likes}
                            type={BadgeType.favorite}
                            product={product} 
                        />
                    }

                </div>
                <Link to="/product">
                    <img
                        className='product__img-photo' 
                        src={product.urls.regular} 
                        alt={product.alt_description} 
                        onClick={() => dispatch(getSingleProduct(product))}
                        />
                </Link>
            </div>

            <div className='product__preview'>
                <div className='product__preview-title'>{product.alt_description}</div>
                <div className='product__preview-buy'>
                    <p className='product__preview-buy-price'>{product.price} $</p>
                    <div className='product__preview-buy-button'>
                        <Link 
                            to='/product'
                            onClick={() => dispatch(getSingleProduct(product))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;