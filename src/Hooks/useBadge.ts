import {useState} from 'react';
import { IClothesService } from '../services/ClothesService';


export const useBadge = ( ) => {

    const [badge, setbadge] = useState<boolean>(false);


    const changeBadge = () => setbadge( badge => !badge);

    const isCheckId = (data: IClothesService[], product: IClothesService) => {
        data.map( el => {
            if(el.id === product.id){
                changeBadge();
            } 
        })
    }

    return {
        badge,
        changeBadge,
        isCheckId
    }
};