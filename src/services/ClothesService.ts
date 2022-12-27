

export interface IPreviewGallery {
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


    const getClothesForPreviewGallery = async () => {

        const res = await fetch(`${BASE_API}/search/photos/?${API_KEY}&color=black&query=clothes&orientation=portrait`);

        if(res.ok){
            const data: {results: IPreviewGallery[]} = await res.json();
            return data.results.map( (clothes: IPreviewGallery) => {
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

    const getClothesForMan = async () => {
        const res = await fetch(`${BASE_API}/search/photos/?${API_KEY}&query=woman&query=clothes&orientation=portrait`);
        const data: any = await res.json();
        console.log(data.results);
        
    }


    return {
        getClothesForPreviewGallery,
        getClothesForMan,
    }

};




export default ClothesService;