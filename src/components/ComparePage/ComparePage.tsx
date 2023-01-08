import {useAppSelector } from '../../Hooks/useDispatch_Selector';
import Component from './Component';

import './ComparePage.scss';

const ComparePage = () => {
    const {compare} = useAppSelector( state => state.BadgeSlice);


    return (
        <>
        <h2 className='compare_h3'>Compare</h2>
        <div className='container'>
            {
                compare.data.map( el => (
                    <Component el={el} key={el.id} />
                ))
            }
        </div>
        </>
    );
};

export default ComparePage;