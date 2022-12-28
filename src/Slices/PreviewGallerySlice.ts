import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import ClothesService, { IClothesService } from '../services/ClothesService';

interface IPreviewGallerySlice {
    clothesList: IClothesService[],
    isOpenModal: boolean,
    singleClothesModal: IClothesService | undefined,
    status: string,
}

export const fetchClothes = createAsyncThunk(
    'previewGallery/fetchClothes',
    () =>  ClothesService().getClothesForPreviewGallery()
);



const initialState: IPreviewGallerySlice = {
    clothesList: [],
    isOpenModal: false,
    singleClothesModal: undefined,
    status: 'idle'
}

export const PreviewGallerySlice = createSlice({
    name: 'previewGallery',
    initialState,
    reducers: {
        hideModal: ( state ) => {
            state.isOpenModal = false;
        },
        showModal: (state ) => {
            state.isOpenModal = true;
        },
        setModalMainPhoto: (state, action: PayloadAction<IClothesService>) => {
            state.singleClothesModal = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchClothes.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchClothes.fulfilled, (state, action)=> {
            if(typeof action.payload !== "undefined"){
                state.clothesList = action.payload;
                state.status = 'idle';
            };
        })
        .addCase(fetchClothes.rejected, state => {
            state.status = 'error';
        })
        .addDefaultCase( () => {})
    },
});

export const {
                hideModal, 
                showModal, 
                setModalMainPhoto,
            } = PreviewGallerySlice.actions;

export default PreviewGallerySlice.reducer;