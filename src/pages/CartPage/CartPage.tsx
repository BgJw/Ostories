import { useAppSelector } from "../../Hooks/useDispatch_Selector";

import './CartPage.scss';

const CartPage = () => {
    const {data} = useAppSelector( state => state.BadgeSlice.cart);

    return (
        <>
        <h2 className="cart_h3">Cart</h2>
        <div>
            {data.length ?
                data.map( product => (
                    <div></div>
                ))
                : 
                <span>Cart list is empty</span>
            }
        </div>
        </>
    );
};

export default CartPage;