
    // interface for Services 

export interface IClothesService {
    readonly "id": string,
    readonly "alt_description": string,
    readonly 'price'?: number,
    readonly 'country'?: string,
    readonly 'material'?: string,
    readonly "urls": {
        readonly "thumb": string,
        readonly 'regular': string
    },
}



// Types for  Badge slice  
export enum BadgeType {
    favorite = 'favorites',
    cart = 'cart',
    compare = 'compare'
}

export interface DataBadge {
    name: BadgeType, 
    data: IClothesService | undefined
 };


export interface IBadgeSlice {
    favorites: {
        amount: number,
        data: IClothesService[]
    },
    cart: {
        amount: number,
        data: IClothesService[]
    },
    compare: {
        amount: number,
        data: IClothesService[]
    }
}


// interface for Gallery Slice !

export interface IPreviewGallerySlice {
    clothesList: IClothesService[],
    isOpenModal: boolean,
    singleClothesModal: IClothesService,
    status: Status,
}



// types for All Products 

export interface IProducts {
    productsMan: IClothesService[],
    productsWoman: IClothesService[],
    statusMan: Status,
    statusWoman: Status,
    statusSingleProduct: Status,
    activeFilter: Name,
    singleProduct: IClothesService,
}

export type Name = 'man' | 'woman';

export enum Status {
    idle = 'idle',
    loading = 'loading',
    error = 'error',
};
