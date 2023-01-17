import { IClothesService } from "../types/Types";



const ClothesService = () => {
    const BASE_API = 'https://api.unsplash.com/';
    const API_KEY = 'client_id=mmISGjwpO8EVWWsViXzfAFzLnZR0sSoHo7OKH6r4_NM';

    const country = ['Turkey', 'China', 'Italy'];
    const materials = ['Nylon', 'Cotton', 'Leather'];

    const random = (min: number, max: number) =>  {
        return Math.floor(Math.random() * (max - min + 1) + min)};

    const getClothesForPreviewGallery = async (): Promise<IClothesService[]> => {
        
        const res = await fetch(`${BASE_API}/search/photos/?${API_KEY}&color=black&query=clothes&orientation=portrait`);

            const data: {results: IClothesService[]} = await res.json();
            return transformData(data.results);
    
    };

    const getClothesForMan = async (): Promise<IClothesService[]>  => {

        const res = await fetch(`${BASE_API}/search/photos/?${API_KEY}&page=2&query=man clothes&orientation=portrait`);
        const data: {results: IClothesService[]} = await res.json();
            return transformData(data.results);
    };
    const getClothesForWomen = async (): Promise<IClothesService[]>  => {

        const res = await fetch(`${BASE_API}/search/photos/?${API_KEY}&query=woman clothes&orientation=portrait`);
        const data: {results: IClothesService[]} = await res.json();
            return transformData(data.results);
    };
    const getClothesForSingleProduct = async (id: string): Promise<IClothesService>  => {

        const res = await fetch(`${BASE_API}/photos/${id}/?${API_KEY}`);
        const data: IClothesService = await res.json();
        return {
            id: data.id,
            alt_description: data.alt_description,
            price: random(35, 150),
            country: country[random(0, country.length -1)],
            material: materials[random(0, materials.length -1)],
            urls: {
                thumb: data.urls.thumb,
                regular: data.urls.regular
            }
        }
            
    };



    const transformData = (data: IClothesService[]) => {
        return data.map( (clothes: IClothesService) => {
            return {
                id: clothes.id,
                alt_description: clothes.alt_description,
                price: random(35, 150),
                country: country[random(0, country.length -1)],
                material: materials[random(0, materials.length -1)],
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
        getClothesForSingleProduct,
    }

};




export default ClothesService;