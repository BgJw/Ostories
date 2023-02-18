import { BadgeType, IClothesService } from '../../types/Types';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import MyButtons from '../../components/MyButtons/MyButtons';
import Sizes from '../../components/Sizes/Sizes';
import { useState } from 'react';
import { useAppSelector } from '../../Hooks/useDispatch_Selector';

interface IProps {
    singleProduct: IClothesService,
}

const Component = ({ singleProduct }: IProps) => {
    const [size, setSize] = useState<string[]>(['S']);
    const {data} = useAppSelector( state => state.BadgeSlice.cart);

    return (
        <>
            <Breadcrumbs />
            {/* start photo element */}
            <div className='wrap'>
                <div className='wrap__photo'>
                    {
                        <MyButtons
                            styles={{
                                on: 'wrap__photo-bttnOf bttn__link',
                                off: 'wrap__photo-bttnOn bttn__link'
                            }}
                            type={BadgeType.compare}
                            product={singleProduct}
                        />
                    }
                    <img className='wrap__photo-img' src={singleProduct.urls.regular}
                        alt={singleProduct.alt_description} />
                </div>
                {/* End photo element */}

                <div className='wrap__information'>
                    <div className='wrap__information__preview'>
                        {/* Price  */}
                        <p>{singleProduct.alt_description}</p>
                        <span className='wrap__information__preview-price'>{singleProduct.price} $</span>
                    </div>
                    {/* Size */}
                    <span className='size'>
                        Sizing
                    </span> 
                     {
                        data.find( el => el.id === singleProduct.id) ?
                        ''
                        :
                        <Sizes setSize={setSize} size={size} />
                    }

                        {/* Buy and likes bttn */}
                    <div className='wrap__information__buy'>
                        <MyButtons
                            on="BUY IT"
                            off='REMOVE IT'
                            styles={{
                                on: 'wrap__information__buy-bttn',
                                off: 'wrap__information__buy-bttn'
                            }}
                            type={BadgeType.cart}
                            product={singleProduct}
                            sizeForCart={size}
                        />
                        <div className='wrap__information__buy-favorites'>
                            {
                                <MyButtons
                                    on='&#9825;'
                                    off='&#10084;'
                                    styles={{
                                        on: 'wrap__information__buy-favorites-Of',
                                        off: 'wrap__information__buy-favorites-On'
                                    }}
                                    type={BadgeType.favorite}
                                    product={singleProduct}
                                />
                            }
                        </div>
                    </div>
                    <hr />
                    {/* Product characteristic */}
                    <div className='wrap__information__characteristic'>
                        <h4>Characteristics</h4>
                        <div className='wrap__information__characteristic__div'>
                            <div className='wrap__information__characteristic__div-country'>
                                <small>Country</small>
                                <p>{singleProduct.country}</p>
                            </div>
                            <div className='wrap__information__characteristic__div-material'>
                                <small>Material</small>
                                <p>{singleProduct.material}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end information */}
        </>
    );
};

export default Component;