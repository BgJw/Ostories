import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Hooks/useDispatch_Selector';
import { fetchClothesForSingleProduct} from '../../Slices/ProductSlice';
import { Status } from '../../types/Types';
import Spinner from '../Spinner/Spinner';
import Component from './Component';
import './SingleProduct.scss';

const SingleProduct = () => {
    const { productId } = useParams();
    const { singleProduct, statusSingleProduct } = useAppSelector(state => state.ProductSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (productId !== singleProduct.id) {
            dispatch(fetchClothesForSingleProduct(String(productId)))
        }
    }, []);

    return (
        <>
        {statusSingleProduct === Status.loading && <Spinner />}
        {statusSingleProduct === Status.error && <div>...error</div>  }
        {statusSingleProduct === Status.idle &&
            <Component singleProduct={singleProduct}  />            
    }
    </>
    )
};

export default SingleProduct;