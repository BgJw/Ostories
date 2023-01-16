import { useBadge } from '../../Hooks/useBadge';
import { BadgeType, IClothesService } from '../../types/Types';
import MyButtons from '../MyButtons/MyButtons';

interface IProps{
    singleProduct: IClothesService
}

const Component = ({singleProduct}: IProps) => {
    const compares = useBadge();
    const likes = useBadge();
    
    
    return (
        <div className='wrap'>
                {/* start photo element */}
                <div className='wrap__photo'>
                    <div className='wrap__photo-compare'>
                        {
                            <MyButtons
                                styles={{
                                    on: 'wrap__photo-compare-bttnOf bttn__link',
                                    off: 'wrap__photo-compare-bttnOn bttn__link'
                                }}
                                name={compares}
                                type={BadgeType.compare}
                                product={singleProduct}
                            />
                        }
                    </div>
                    <img className='wrap__photo-img' src={singleProduct.urls.regular} alt={singleProduct.alt_description} />
                </div>
                {/* End photo element */}

                <div className='wrap__information'>
                    <div className='wrap__information__preview'>
                        {/* Price  */}
                        <p>{singleProduct.alt_description}</p>
                        <span className='wrap__information__preview-price'>{singleProduct.price} $</span>
                    </div>
                    {/* Size */}
                    Sizing
                    <div className='wrap__information__sizes'>
                        <button className='wrap__information__sizes-bttn'>S</button>
                        <button className='wrap__information__sizes-bttn'>M</button>
                        <button className='wrap__information__sizes-bttn'>L</button>
                        <button className='wrap__information__sizes-bttn'>XL</button>
                    </div>

                    <div className='wrap__information__buy'>
                        {/* Buy and likes bttn */}
                        <button
                            className='wrap__information__buy-bttn'> BUY IT
                        </button>
                        <div className='wrap__information__buy-favorites'>

                            {
                                <MyButtons
                                    on='&#9825;'
                                    off='&#10084;'
                                    styles={{
                                        on: 'wrap__information__buy-favorites-Of',
                                        off: 'wrap__information__buy-favorites-On'
                                    }}
                                    name={likes}
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
                {/* end information */}
            </div>
    );
};

export default Component;