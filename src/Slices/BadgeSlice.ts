import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BadgeType, DataBadge, IBadgeSlice } from "../types/Types";


const initialState: IBadgeSlice = {
    favorites: {
        amount: 0,
        data: []
    },
    cart: {
        amount: 0,
        data: []
    },
    compare: {
        amount: 0,
        data: []
    }
};

type key = keyof typeof initialState;

export const BadgeSlice = createSlice({
    name: 'badge',
    initialState,
    reducers: {
        incrementBadge: (state, {payload}: PayloadAction<BadgeType>) => {
            state[payload as key].amount++ ;
        },
        decrementBadge: (state, {payload}: PayloadAction<BadgeType>) => {
            state[payload as key].amount-- ;
        },
        addDataBadge: (state, {payload}: PayloadAction<DataBadge>) => {
            payload.data && state[payload.name as key].data.push(payload.data)
        },
        removeDataBadge: (state, {payload}: PayloadAction<DataBadge>) => {
                            
            state[payload.name as key].data?.map((el, i) => {
                if (el.id === payload.data?.id) {
                    state[payload.name as key].data.splice(i,1);
                }
            })
        },
         
    }
})
export const {incrementBadge, decrementBadge, addDataBadge, removeDataBadge} = BadgeSlice.actions;

export default BadgeSlice.reducer;