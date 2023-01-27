import { Link } from 'react-router-dom';
import { useAppSelector } from '../../Hooks/useDispatch_Selector';
import Badge from '../Badge/Badge';

import './Header.scss';
export const logo = require('../../assets/logo/logo.svg').default;

const Header = () => {
    const { cart, compare, favorites } = useAppSelector(state => state.BadgeSlice);

    return (
        <>
            <header className='header'>
                {/* navigator menu  */}
                <button className='header__menu bttn__link' />

                {/* navigator logo */}
                <Link to="/" className='header__logo'>
                    <img src={logo} alt="O stories" />
                </Link>

                {/* navigator options start */}
                <div className='header__options'>

                    {/* navigation search */}
                    <Link to='/filter'
                        className='search-button bttn__link'
                    />
                    {/* navigation compare */}
                    <Link to='/compare' className='compare-link'>
                        <Badge amount={compare.amount} />
                    </Link>

                    {/* navigation favorites */}
                    <Link to="/favorites" className='favorites-link'>&#9825;
                        <Badge amount={favorites.amount} />
                    </Link>

                    {/* navigation cart */}
                    <Link to="/cart" className='cart-link'  >
                        <Badge amount={cart.amount} />
                    </Link>
                </div>
                {/* navigation  end  */}
            </header>
            <hr />
        </>
    );
};

export default Header;
