

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import ClothesService, { IClothesService } from '../services/ClothesService';

interface IProducts {
    productsMan: IClothesService[],
    productsWoman: IClothesService[],
    statusMan: Status,
    statusWoman: Status,
    activeFilter: Name,
}
enum Status {
    'idle',
    'loading',
    'error',
};
type Name = 'man' | 'woman';

export const fetchClothesForMan = createAsyncThunk(
    'products/fetchClothesForMan',
    () =>  ClothesService().getClothesForMan()
);
export const fetchClothesForWoman = createAsyncThunk(
    'products/fetchClothesForWoman',
    () =>  ClothesService().getClothesForWomen()
);



const initialState: IProducts = {
    productsMan: [],
    productsWoman: [],
    statusMan: Status.idle,
    statusWoman: Status.idle,
    activeFilter: 'man',
}

export const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeActiveFilter: (state, action: PayloadAction<Name>) => {
            state.activeFilter = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchClothesForMan.pending, state => {
                state.statusMan = Status.loading;
        })
            .addCase(fetchClothesForMan.fulfilled, (state, action) => {
                state.productsMan = action.payload;
                state.statusMan = Status.idle;
        })
            .addCase(fetchClothesForMan.rejected, state => {
                state.statusMan = Status.error
        })

        .addCase(fetchClothesForWoman.pending, state => {
            state.statusWoman = Status.loading;
    })
        .addCase(fetchClothesForWoman.fulfilled, (state, action) => {
            state.productsWoman = action.payload;
            state.statusWoman = Status.idle;
    })
        .addCase(fetchClothesForWoman.rejected, state => {
            state.statusWoman = Status.error
    })
            .addDefaultCase(()=> {})
    },
});

export const {
    changeActiveFilter,
            } = ProductSlice.actions;

export default ProductSlice.reducer;