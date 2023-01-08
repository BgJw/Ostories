
import { useAppDispatch, useAppSelector } from '../../Hooks/useDispatch_Selector';
import { changeActiveFilter } from '../../Slices/ProductSlice';
import { IClothesService, Status } from '../../types/Types';
import Products from '../Products/Products';
import Spinner from '../Spinner/Spinner';

import './Content.scss';



const Content = () => {
    const dispatch = useAppDispatch();
    const { productsMan, productsWoman, activeFilter, statusMan, statusWoman } = 
                                                        useAppSelector(state => state.ProductSlice);




    const filterProduct = (products: IClothesService[]): JSX.Element[] => {
        return products.map(product => (
            <Products key={product.id} product={product} />
        ))
    }


    return (
        <main className='content'>
            {/* filter content  */}
            <div className='content__filter'>
                <button
                    disabled={activeFilter === 'man'}
                    onClick={() => {
                        dispatch(changeActiveFilter('man'));
                    }}
                    className={activeFilter === 'man' ? 'active content__filter-button' : 'content__filter-button'}>
                    Man
                </button>
                <button
                    disabled={activeFilter === 'woman'}
                    onClick={() => {
                        dispatch(changeActiveFilter('woman'));
                    }}
                    className={activeFilter === 'woman' ? 'active content__filter-button' : 'content__filter-button'}>
                    Woman
                </button>
            </div>
            {/* Product content */}
            <div className='content__products'>
                {
                    activeFilter === 'man' ?
                        statusMan === Status.idle ? filterProduct(productsMan) : <Spinner />
                        :
                        statusWoman === Status.idle ? filterProduct(productsWoman) : <Spinner />
                }
            </div>
        </main>
    );
};

export default Content;