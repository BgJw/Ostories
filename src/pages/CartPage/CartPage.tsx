import { useAppSelector } from "../../Hooks/useDispatch_Selector";

import './CartPage.scss';

const CartPage = () => {
    const { data } = useAppSelector(state => state.BadgeSlice.cart);
     
    return (
        <>
            <h2 className="cart_h3">Cart</h2>
            {data.length ?
                <div className="carts">

                    <div className="cart">
                        {data.map(product => {
                     return (
                            <div
                                key={product.id}
                                className="cart__product"
                            >
                                <img className="img" src={product.urls.regular} alt={product.alt_description} />
                                <div className="information">
                                    <p>{product.alt_description.length > 20
                                        && product.alt_description.slice(0, 20) + '....'}
                                    </p>
                                    <p>{product.size} </p>
                            
                                    <p>{product.price} $/oс</p>
                                </div>

                                        <div className="cart__product-amount">
                                            <>
                                                <small></small>
                                                <button
                                                    // onClick={ increment } 
                                                    className="left">-</button>
                                                <input type="number" value={1} />
                                                <button className="right">+</button>
                                            </>
                                        </div>
                            </div>
                        )})}
                    </div>
                    <div className="price">
                    </div>
                </div>
                :
                <span>Cart list is empty</span>
            }
        </>
    );
};

export default CartPage;