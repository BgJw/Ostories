import { useState } from 'react';
import Badge from '../Badge/Badge';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../Hooks/useDispatch_Selector';

import './Header.scss';
const logo = require('../../assets/logo/logo.svg').default;

const Header = () => {
    const { cart, compare, favorites } = useAppSelector(state => state.BadgeSlice);
    const [showInput, setShowInput] = useState(false);

    const onChangeInput: React.MouseEventHandler<HTMLDivElement> = () => {
        setShowInput(prev => !prev);
    }



    return (
        <>
            <header className='header'>
                {/* navigator menu  */}
                <div className='header__menu bttn__link' />

                {/* navigator logo */}
                <div className='header__logo'>
                    <Link to="/">
                        <img src={logo} alt="O stories" />
                    </Link>
                </div>
                {/* navigator options start */}
                <div className='header__options'>

                    {/* navigation search */}
                    <div className='header__options-search'>
                        <input
                            className='search-input'
                            style={showInput ? { display: 'block' } : { display: 'none' }}
                            type="text"
                            placeholder='Search'
                        />
                        <div
                            onClick={onChangeInput}
                            className='search-button bttn__link'
                            style={!showInput ? { display: 'block' } : { display: 'none' }}
                        />
                        <div
                            onClick={onChangeInput}
                            className='search-close'
                            style={!showInput ? { display: 'none' } : { display: 'block' }}>
                            &times;
                        </div>
                    </div>

                    {/* navigation compare */}
                    <Link to='/compare' className='compare-link'>
                        <div className='header__options-compare' >
                            <Badge amount={compare.amount} />
                        </div>
                    </Link>

                    {/* navigation favorites */}
                    <div className='header__options-favorites'>
                        <Link to="/favorites" className='favorites-link'>&#9825;</Link>
                        <Badge amount={favorites.amount} />
                    </div>

                    {/* navigation cart */}
                    <Link to="/cart" className='cart-link' >
                        <div className='header__options-cart'>
                            <Badge amount={cart.amount} />
                        </div>
                    </Link>
                </div>
                {/* navigation  end  */}
            </header>
            <hr />
        </>
    );
};

export default Header;
