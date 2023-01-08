import { useEffect } from 'react';
import { useBadge } from '../../Hooks/useBadge';
import { useAppSelector } from '../../Hooks/useDispatch_Selector';
import { BadgeType, IClothesService } from '../../types/Types';
import MyButtons from '../MyButtons/MyButtons';

interface IProps {
    el: IClothesService
};

const Component = ({ el }: IProps) => {
    const { favorites } = useAppSelector(state => state.BadgeSlice);
    const likes = useBadge();
    const compares = useBadge();

    useEffect(() => {
        likes.isCheckId(favorites.data, el);
    }, []);

    return (
        <div className='compare'>
            <img className='compare__img' src={el.urls.regular} alt={el.alt_description} />
            <div className='compare__information'>
                <p className='compare__information-p'>{el.alt_description}</p>
                <div className='compare__information-feather'>

                    <div><small>price</small> <p>{el.price} $</p></div>
                    <div><small>material</small> <p> {el.material}</p></div>
                    <div><small>country</small> <p> {el.country}</p></div>

                </div>
                <div className='compare__information-bttn'>
                    {
                        !compares.badge &&
                        <MyButtons
                            styles={{
                                on: '',
                                off: 'compare__information-bttn-remove'
                            }}
                            name={{ ...compares, badge: true }}
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