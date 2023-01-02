import React from 'react';
import { useAppSelector } from '../../Hooks/useDispatch_Selector';
import './ComparePage.scss';

const ComparePage = () => {
    const {compare} = useAppSelector( state => state.BadgeSlice);

    return (
        <div className='compare'>
            {
                compare.data.map( el => (
                    <div>
                        <img src={el.urls.regular} alt={el.alt_description} />
                        <div>
                            <p>{el.price}</p>
                            <p>{el.material}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ComparePage;