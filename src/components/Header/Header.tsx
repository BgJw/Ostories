import Logo from '../../assets/logo/Logo';
import './Header.scss';


const Header = () => {
    return (
        <div>
            <div className='menu'>Menu</div>
            <div className='logo'>
                <Logo />
            </div>
            <div className=''>
                <span className='search'>search</span>
                <span className='compare'>compare</span>
                <span className='favorites'>favorites</span>
                <span className='cart'>cart</span>
            </div>
            <img src="../../assets/Rectangle-1.jpg" width='200px' height='200px' alt="1" />
        </div>
    );
};

export default Header;
