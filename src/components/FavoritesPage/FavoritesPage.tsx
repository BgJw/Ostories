import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../Hooks/useDispatch_Selector';
import { BadgeType } from '../../types/Types';
import MyButtons from '../MyButtons/MyButtons';
import './FavoritesPage.scss';

const FavoritesPage = () => {
    const { favorites } = useAppSelector(state => state.BadgeSlice);

    return (
        <>
            <h2 className='favorites_h3'>Favorites</h2>
            <div className='favorites'>
                {favorites.data.length ?
                    favorites.data.map(el => (
                        <div key={el.id} className='favorites__content'>
                            <MyButtons
                                on='&#9825;'
                                off='&#10084;'
                                type={BadgeType.favorite}
                                styles={{ on: 'favorites__content-off', off: 'favorites__content-on' }}
                                product={el}
                            />
                            <Link to={`/product/${el.id}`}>
                                <img className='favorites__content-img' src={el.urls.regular} alt={el.alt_description} />
                            </Link>

                            <div className='favorites__content-title'>
                                <p>{el.alt_description}</p>
                                <div className='favorites__content-title-buy'>
                                    <span className='favorites__content-title-buy-price'>{el.price} $</span>
                                    <Link to={`/product/${el.id}`} />
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <h3>Favorites list is empty</h3>
                }
            </div>
        </>
    );
};

export default FavoritesPage;