import { useState } from 'react';
import Products from '../Products/Products';
import './Content.scss';



const Content = () => {
    const [activeClass, setActiveClass] = useState('Man');

    const toggleActiveClass = ( nameButton: string) => {
        setActiveClass(nameButton)
    }

    return (
        <main className='content'>
            {/* filter content  */}
            <div className='content__filter'>
                <button 
                    onClick={ () => toggleActiveClass('Man')} 
                    className={activeClass === 'Man'? 'active content__filter-button': 'content__filter-button'}>
                        Man
                </button>
                <button 
                    onClick={ () => toggleActiveClass('Woman')} 
                    className={activeClass === 'Woman'? 'active content__filter-button': 'content__filter-button'}>
                        Woman
                </button>
            </div>

            <div className='content__products'>
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
            </div>
        </main>
    );
};

export default Content;