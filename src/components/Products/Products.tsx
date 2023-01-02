import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { IClothesService } from '../../services/ClothesService';
import { useAppDispatch, useAppSelector } from '../../Hooks/useDispatch_Selector';
import { incrementBadge, decrementBadge, addDataBadge, removeDataBadge } from '../../Slices/BadgeSlice';

import { getSingleProduct } from '../../Slices/ProductSlice';
import { useBadge } from '../../Hooks/useBadge';
import './Products.scss';

interface IProduct {
    product: IClothesService
}

const Products = ({product}: IProduct) => {
    const {favorites} = useAppSelector( state => state.BadgeSlice );
    const {badge, changeBadge, isCheckId } = useBadge();
    const dispatch = useAppDispatch();


    useEffect(() => {
        isCheckId(favorites.data, product );
    }, []);
    
    return (
        <div className='product'>
            {
     
            // <Spinner />
            }
            <div className='product__img'>
                <div className='product__img-buttons'>
                    {
                    !badge
                    ?
                    <button 
                        className='product__img-buttons-favoritesOf' 
                        onClick={() => {
                            dispatch(incrementBadge('favorites'))
                            dispatch(addDataBadge({name:'favorites', data: product}))
                            changeBadge();
                        }}
                    >&#9825;</button>
                    :
                    <button 
                        className='product__img-buttons-favoritesOn' 
                        onClick={() => {
                            dispatch(decrementBadge('favorites'));
                            dispatch(removeDataBadge({name: 'favorites', data: product}))
                            changeBadge()
                        }}
                    >&#10084;</button>
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