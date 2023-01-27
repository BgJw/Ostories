import { useEffect, useState } from 'react';
import { useAppSelector } from '../../Hooks/useDispatch_Selector';
import { country, materials, sizes } from '../../services/ClothesService';
import { IClothesService } from '../../types/Types';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Products from '../../components/Products/Products';

import './FilterPage.scss';
import MyInput from './MyInput';

interface IFilter {
    text: string,
    price: string,
    country: string[],
    material: string[],
    size: string[]
}

const FilterPage = () => {

    const { productsMan, productsWoman } = useAppSelector(state => state.ProductSlice);


    const [copyData, setCopyData] = useState<IClothesService[]>([]);

    const [filterOptions, setFilterOptions] = useState<IFilter>({
        text: '',
        price: '150',
        country: [],
        material: [],
        size: []
    });

    // open filter options
    const [isOpenFilter, setIsOpenFilter] = useState(false);


    const filterClothers = (data: IClothesService[]) => {
        let copy = [...data];
        
        if (filterOptions.text.trim()) {
            copy = copy.filter( el => el.alt_description.includes(filterOptions.text));  
        }
        if (filterOptions.price) {
            copy = copy.filter( el => Number(el.price) <= Number(filterOptions.price))
        }
        if (filterOptions.size.length > 0) {            

            copy = isAvailabilityOptions(copy, filterOptions.size, 'sizes')
        }
        if (filterOptions.country.length > 0) {       

            copy = isAvailabilityOptions(copy, filterOptions.country, 'country')
        }
        
        if (filterOptions.material.length > 0) {            

            copy = isAvailabilityOptions(copy, filterOptions.material, 'material')
        }
                        
        setCopyData(copy);
    }

    const isAvailabilityOptions = (data: IClothesService[], filter: string[], option: string  ) => {
        type key = keyof IClothesService;

        const temp = [];

        for (let i = 0; i < data.length; i++) {
                let s = data[i][option as key];

            if (filter.includes(String(s))) {
                temp.push(data[i])
            }
        }
        return temp
    }
    

    const isCheck = (e: { target: HTMLInputElement; }, name: string) => {
        type key = keyof typeof filterOptions;
        let searchEl = filterOptions[name as key] as string[];
        
            
        if (searchEl.includes(e.target.name)) {
            
            searchEl = searchEl.filter(size => size !== e.target.name);
        } else {
            searchEl.push(e.target.name)
        }
        
        setFilterOptions({
            ...filterOptions,
            [name] : searchEl
        });
    }
    useEffect(() => {
        
            filterClothers([...productsMan, ...productsWoman]);

    }, [filterOptions, productsMan, productsWoman]);

    
    return (
        <div className='filter'>
            {/* links */}
            <Breadcrumbs />

            {/* filter Input */}
            <div className={`filter__position ${filterOptions.text || isOpenFilter ? 'rows' : ''}`}>
                <h2>How to filter things?</h2>
                {/* search for filter products */}
                <div className='filter__position__search'>
                    <input
                        value={filterOptions.text}
                        type="text"
                        placeholder='Search'
                        className='filter__position__search-input'
                        onChange={(e) => {setFilterOptions({...filterOptions, text: e.target.value})}}
                    />
                    <button
                        className='filter__position__search-bttn'
                    />
                </div>
            </div>

            {isOpenFilter ?
                <div className='filter__options'>
                    <div className='filter__options__left'>
                        {/* filter Price and Size */}
                        <div className='price'>
                            <p>
                                Price
                            </p>
                            <input
                                type="range"
                                min={35}
                                max={150}
                                value={filterOptions.price}
                                onChange={(e) => {setFilterOptions({ ...filterOptions, price: e.target.value })}}
                            />
                            <div>
                                Up to:
                                <input
                                    type="number"
                                    value={filterOptions.price}
                                    onChange={(e) => setFilterOptions({ ...filterOptions, price: e.target.value })}
                                />
                            </div>
                        </div>
                
                        <div className='size'>
                            <MyInput 
                                data={sizes} 
                                isCheck={isCheck} 
                                name='size' 
                            />
                        </div>

                    </div>
                    {/* Filter Country and material  */}
                    <div className='filter__options__container'>
                        <div>
                        <MyInput 
                                data={country} 
                                isCheck={isCheck} 
                                name='country' 
                            />
                        </div>
                        <div>
                        <MyInput 
                                data={materials} 
                                isCheck={isCheck} 
                                name='material' 
                            />
                        </div>

                    </div>
                </div>
                :
                <div className='bttnOptions'>
                    <button onClick={() => setIsOpenFilter(prev => !prev)} />
                    Filter
                </div>
            }
            <div className='filter__filteredProducts'>
                {
                    copyData.map(product => (
                         <Products key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default FilterPage;