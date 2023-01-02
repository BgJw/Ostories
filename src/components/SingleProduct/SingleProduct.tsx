import React, { useEffect } from 'react';
import { useBadge } from '../../Hooks/useBadge';
import { useAppDispatch, useAppSelector } from '../../Hooks/useDispatch_Selector';
import { IClothesService } from '../../services/ClothesService';
import { incrementBadge, decrementBadge, addDataBadge, removeDataBadge } from '../../Slices/BadgeSlice';
import Spinner from '../Spinner/Spinner';
import './SingleProduct.scss';

const SingleProduct = () => {
    const { singleProduct } = useAppSelector(state => state.ProductSlice);
    const { compare, favorites } = useAppSelector(state => state.BadgeSlice);
    const compares = useBadge();
    const likes = useBadge();
    const dispatch = useAppDispatch();

    useEffect(() => {
        compares.isCheckId(compare.data, singleProduct as IClothesService);
        likes.isCheckId(favorites.data, singleProduct as IClothesService);
    }, [])

    return (
        singleProduct ?
            <div className='wrap'>
                {/* start photo element */}
                <div className='wrap__photo'>
                    <div className='wrap__photo-compare'>
                        {
                            !compares.badge ?
                                <button
                                    className='wrap__photo-compare-bttnOf bttn__link'
                                    onClick={() => {
                                        dispatch(incrementBadge('compare'));
                                        dispatch(addDataBadge({ name: 'compare', data: singleProduct }));
                                        compares.changeBadge();
                                    }}
                                />
                                :
                                <button
                                    className='wrap__photo-compare-bttnOn bttn__link'
                                    onClick={() => {
                                        dispatch(decrementBadge('compare'))
                                        dispatch(removeDataBadge({ name: 'compare', data: singleProduct }));
                                        compares.changeBadge();

                                    }}
                                />
                        }
                    </div>
                    <img className='wrap__photo-img' src={singleProduct?.urls.regular} alt={singleProduct?.alt_description} />
                </div>
                {/* End photo element */}

                <div className='wrap__information'>
                    <div className='wrap__information__preview'>
                        {/* Price  */}
                        <p>{singleProduct?.alt_description}</p>
                        <span className='wrap__information__preview-price'>{singleProduct?.price} $</span>
                    </div>
                        {/* Size */}
                    Sizing
                    <div className='wrap__information__sizes'>
                        <button className='wrap__information__sizes-bttn'>S</button>
                        <button className='wrap__information__sizes-bttn'>M</button>
                        <button className='wrap__information__sizes-bttn'>L</button>
                        <button className='wrap__information__sizes-bttn'>XL</button>
                    </div>

                    <div className='wrap__information__buy'>
                        {/* Buy and likes bttn */}
                        <button
                            className='wrap__information__buy-bttn'> BUY IT
                        </button>
                        <div className='wrap__information__buy-favorites'>

                            {
                                !likes.badge ?
                                    <button
                                        onClick={() => {
                                            dispatch(incrementBadge('favorites'))
                                            dispatch(addDataBadge({ name: 'favorites', data: singleProduct }));
                                            likes.changeBadge();
                                        }}
                                        className='wrap__information__buy-favoritesOf'>&#9825;
                                    </button>
                                    :
                                    <button
                                        onClick={() => {
                                            dispatch(decrementBadge('favorites'))
                                            dispatch(removeDataBadge({ name: 'favorites', data: singleProduct }));
                                            likes.changeBadge()
                                        }}
                                        className='wrap__information__buy-favoritesOn'>&#10084;
                                    </button>
                            }

                        </div>
                    </div>
                    <hr />
                            {/* Product characteristic */}
                    <div className='wrap__information__characteristic'>
                            <h4>Characteristics</h4>
                            <div className='wrap__information__characteristic__div'>
                                <div className='wrap__information__characteristic__div-country'>
                                    <small>Country</small>
                                    <p>{singleProduct.country}</p>
                                </div>
                                <div className='wrap__information__characteristic__div-material'>
                                    <small>Material</small>
                                    <p>{singleProduct.material}</p>
                                </div>
                            </div>
                    </div>
                </div>
                {/* end information */}
            </div>
            :
            <Spinner />
    );
};

export default SingleProduct;