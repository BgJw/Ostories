import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Hooks/useDispatch_Selector';
import { IClothesService } from '../../services/ClothesService';
import { fetchClothesForMan, fetchClothesForWoman, changeActiveFilter } from '../../Slices/ProductSlice';
import Products from '../Products/Products';
import Spinner from '../Spinner/Spinner';
import './Content.scss';



const Content = () => {
    const dispatch = useAppDispatch();
    const { productsMan, productsWoman, activeFilter, statusMan, statusWoman } = useAppSelector(state => state.ProductSlice);

    // useEffect(() => {
    //     dispatch(fetchClothesForMan());
    //     dispatch(fetchClothesForWoman());
    // }, [])



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
                        statusMan === 'idle' ? filterProduct(productsMan) : <Spinner />
                        :
                        statusWoman === 'idle' ? filterProduct(productsWoman) : <Spinner />
                }
            </div>
        </main>
    );
};

export default Content;