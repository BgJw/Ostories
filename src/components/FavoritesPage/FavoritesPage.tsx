import React from 'react';
import { useAppSelector } from '../../Hooks/useDispatch_Selector';
import './FavoritesPage.scss';


const FavoritesPage = () => {
    const {favorites} = useAppSelector( state => state.BadgeSlice);

    return (
        <div>
            {
                favorites.data.map( el => (
                    <div>
                        <img src={el.urls.regular} alt={el.alt_description} />
                        
                    </div>
                ) )
            }
        </div>
    );
};

export default FavoritesPage;