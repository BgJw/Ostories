import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Hooks/useDispatch_Selector';
import { incrementBadge, decrementBadge, addDataBadge, removeDataBadge } from '../../Slices/BadgeSlice';
import { BadgeType, IClothesService } from '../../types/Types';

interface IProps{
    on?: string,
    off?: string,
    styles: {
        on: string,
        off: string
    },
    name: {
       badge: boolean,
       isCheckId: (data: IClothesService[], product: IClothesService) => void, 
       changeBadge: () => void,
    },
    type: BadgeType,
    product: IClothesService,
}

const MyButtons = ({ on, off, styles, name, type, product } : IProps) => {
    const {data} = useAppSelector(state => state.BadgeSlice[type]);
    const dispatch = useAppDispatch();
    
    useEffect(()=> {
            name.isCheckId(data, product);
    },[product])



    return (
        !name.badge?
            <button 
                className={styles.on}
                onClick={ () => {
                    dispatch(incrementBadge(type))
                    dispatch(addDataBadge({name: type, data: product}))
                    name.changeBadge()
                }}
            >
            {on}
            </button>
        :
            <button 
                className={styles.off}
                onClick={ () => {
                    dispatch(decrementBadge(type));
                    dispatch(removeDataBadge({name: type, data: product}));
                    name.changeBadge()
                }}
            >
                {off}
            </button>
    );
};

export default MyButtons;