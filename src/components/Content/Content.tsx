import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Hooks/useDispatch_Selector';
import { IClothesService } from '../../services/ClothesService';
import { fetchClothesForMan,fetchClothesForWoman, changeActiveFilter } from '../../Slices/ProductSlice';
import Products from '../Products/Products';
import './Content.scss';



const Content = () => {
    const dispatch = useAppDispatch();
    const {productsMan, productsWoman, activeFilter } = useAppSelector( state => state.ProductSlice);

    useEffect(()=> {
        dispatch(fetchClothesForMan());
    }, [] )



    const filterProduct = (products: IClothesService[]): JSX.Element[]  => {
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
                    onClick={ () => {
                            dispatch(changeActiveFilter('man'));
                            dispatch(fetchClothesForMan());
                        }} 
                    className={activeFilter === 'man'? 'active content__filter-button': 'content__filter-button'}>
                        Man
                </button>
                <button
                    disabled={activeFilter === 'woman'}  
                    onClick={ () => {
                        dispatch(changeActiveFilter('woman'));
                        dispatch(fetchClothesForWoman());
                    }} 
                    className={activeFilter === 'woman'? 'active content__filter-button': 'content__filter-button'}>
                        Woman
                </button>
            </div>

            <div className='content__products'>

                {
                    activeFilter === 'man'? filterProduct(productsMan): filterProduct(productsWoman) 
                }
            </div>
        </main>
    );
};

export default Content;