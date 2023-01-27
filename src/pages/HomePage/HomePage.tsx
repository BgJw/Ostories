import { useEffect } from "react";
import MainContent from "../../components/MainContent/MainContent";
import PreviewGallery from "../../components/PreviewGallery/PreviewGallery";
import { useAppDispatch } from "../../Hooks/useDispatch_Selector";
import { fetchClothes } from "../../Slices/PreviewGallerySlice";

const HomePage = () => {
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(fetchClothes());
      
      }, []);
    
    return (
        <>
            <PreviewGallery />
            <MainContent />
        </>
    );
};

export default HomePage;