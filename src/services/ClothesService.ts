

export interface IClothesService {
    "id": string,
    "alt_description": string,
    "urls": {
        "thumb": string,
        'regular': string
    },
}

const ClothesService = () => {
    const BASE_API = 'https://api.unsplash.com/';
    const API_KEY = 'client_id=mmISGjwpO8EVWWsViXzfAFzLnZR0sSoHo7OKH6r4_NM';


    const getClothesForPreviewGallery = async (): Promise<IClothesService[] | undefined> => {

        const res = await fetch(`${BASE_API}/search/photos/?${API_KEY}&color=black&query=clothes&orientation=portrait`);

        if(res.ok){
            const data: {results: IClothesService[]} = await res.json();
            return data.results.map( (clothes: IClothesService) => {
                return {
                    id: clothes.id,
                    alt_description: clothes.alt_description,
                    urls: {
                        thumb: clothes.urls.thumb,
                        regular: clothes.urls.regular
                    }
                }
            } )   
    }
    
    };

    const getClothesForMan = async (): Promise<IClothesService[]>  => {
        const res = await fetch(`${BASE_API}/search/photos/?${API_KEY}&page=3&query=man clothes&orientation=portrait`);
        const data: {results: IClothesService[]} = await res.json();
            return data.results.map( (clothes: IClothesService) => {
                return {
                    id: clothes.id,
                    alt_description: clothes.alt_description,
                    urls: {
                        thumb: clothes.urls.thumb,
                        regular: clothes.urls.regular
                    }
                }
            } )
    };
    const getClothesForWomen = async (): Promise<IClothesService[]>  => {
        const res = await fetch(`${BASE_API}/search/photos/?${API_KEY}&query=woman clothes&orientation=portrait`);
        const data: {results: IClothesService[]} = await res.json();
            return data.results.map( (clothes: IClothesService) => {
                return {
                    id: clothes.id,
                    alt_description: clothes.alt_description,
                    urls: {
                        thumb: clothes.urls.thumb,
                        regular: clothes.urls.regular
                    }
                }
            } )
    }


    return {
        getClothesForPreviewGallery,
        getClothesForMan,
        getClothesForWomen,
    }

};




export default ClothesService;