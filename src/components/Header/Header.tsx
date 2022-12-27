import { useState } from 'react';
import Badge from '../Badge/Badge';
import { Link } from 'react-router-dom';
import './Header.scss';
const logo = require('../../assets/logo/logo.svg');

const Header = () => {
    const [showInput, setShowInput] = useState(false);

    const onChangeInput: React.MouseEventHandler<HTMLDivElement> = () => {
        setShowInput( prev => !prev);
    }



    return (
        <>
        <header className='header'>
            {/* navigator menu  */}
            <div className='header__menu bttn__link' />

            {/* navigator logo */}
            <div className='header__logo'>
                <Link to="/">
                    <img src={logo.default} alt="O stories" />
                </Link>
            </div>
                {/* navigator options start */}
            <div className='header__options'>

                {/* navigation search */}
                <div className='header__options-search'>
                    <input 
                        className='search-input'
                        style={showInput? {display: 'block'}: {display: 'none'} } 
                        type="text" 
                        placeholder='Search' 
                    />
                    <div 
                        onClick={ onChangeInput} 
                        className='search-button bttn__link'
                        style={!showInput? {display: 'block'}: {display: 'none'} }
                    />
                    <div 
                        onClick={ onChangeInput} 
                        className='search-close'
                        style={!showInput? {display: 'none'}: {display: 'block'} }>
                            &times;
                    </div>
                </div>

                {/* navigation compare */}
                <div className='header__options-compare'>
                    <Link to="/compare" className='compare-link' ><div className='bttn__link'/></Link>
                </div>

                {/* navigation favorites */}
                <div className='header__options-favorites'>
                    <Link to="/favorites" className='favorites-link'><div className='bttn__link'/></Link>
                    <Badge amount={4}/>
                </div>

                {/* navigation cart */}
                <div className='header__options-cart'>
                    <Link to="/cart" className='cart-link'><div className='bttn__link'/></Link>
                    <Badge amount={2}/>
                </div>
            </div>
            {/* navigation  end  */}
        </header>
        <hr />
        </>
    );
};

export default Header;
