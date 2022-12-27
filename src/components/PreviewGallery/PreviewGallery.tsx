import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Hooks/useDispatch_Selector';
import { fetchClothes, showModal, setModalMainPhoto } from '../../Slices/PreviewGallerySlice';
import Modal from '../Modal/Modal';
import './PreviewGallery.scss';

const PreviewGallery = () => {
    const dispatch = useAppDispatch();
    const {clothesList, isOpenModal, status} = useAppSelector(state => state.PreviewGallerySlice);


    useEffect(() => {
        dispatch(fetchClothes());
    }, [])

    isOpenModal ? document.body.style.overflow = 'hidden': document.body.style.overflow = '' ;


    return (
        <>
            <div className='gallery'>
                <div className='gallery__panel'>
                    {
                        clothesList.length ?
                        clothesList.map( photo => (
                                <div key={photo.id} className='gallery__panel__item'>
                                    <img
                                        className='gallery__panel__item-img'
                                        onClick={ () => { 
                                                dispatch(showModal()); 
                                                dispatch(setModalMainPhoto(photo))   
                                            }}
                                        src={photo.urls.thumb}
                                        alt={photo.alt_description} />
                                </div>
                            )) :
                            null
                    }
                </div>
            </div>
            {isOpenModal && <Modal />}
            
        </>
    );
};

export default PreviewGallery;
