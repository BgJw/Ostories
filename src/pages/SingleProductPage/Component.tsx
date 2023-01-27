import { sizes } from '../../services/ClothesService';
import { BadgeType, IClothesService } from '../../types/Types';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import MyButtons from '../../components/MyButtons/MyButtons';

interface IProps {
    singleProduct: IClothesService,
}

const Component = ({ singleProduct }: IProps) => {

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
                    Sizing
                    <div className='wrap__information__sizes'>
                        {
                            sizes.map( (el, i) => (
                                <button
                                    key={el + i} 
                                    className={`wrap__information__sizes-bttn ${singleProduct.sizes?.includes(el) && ' isSize'}`}>
                                        {el}
                                </button>

                            ))
                        }
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