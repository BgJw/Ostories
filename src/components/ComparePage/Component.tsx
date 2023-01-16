
import { Link } from 'react-router-dom';
import { useBadge } from '../../Hooks/useBadge';
import { BadgeType, IClothesService } from '../../types/Types';
import MyButtons from '../MyButtons/MyButtons';

interface IProps {
    el: IClothesService
};

const Component = ({ el }: IProps) => {

    const likes = useBadge();
    const compares = useBadge();



    return (
        <div className='compare'>
            <Link to={`/product/${el.id}`} >
                <img className='compare__img' src={el.urls.regular} alt={el.alt_description} />
            </Link>
            <div className='compare__information'>
                <p className='compare__information-p'>{el.alt_description}</p>
                <div className='compare__information-feather'>

                    <div><small>price</small> <p>{el.price} $</p></div>
                    <div><small>material</small> <p> {el.material}</p></div>
                    <div><small>country</small> <p> {el.country}</p></div>

                </div>
                <div className='compare__information-bttn'>
                    {
                        <MyButtons
                            styles={{
                                on: '',
                                off: 'compare__information-bttn-remove'
                            }}
                            name={compares}
                            type={BadgeType.compare}
                            product={el}
                        />
                    }
                    {
                        <MyButtons
                            on='&#9825;'
                            off='&#10084;'
                            styles={{
                                on: 'compare__information-bttn-off',
                                off: 'compare__information-bttn-on'
                            }}
                            name={likes}
                            type={BadgeType.favorite}
                            product={el}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default Component;