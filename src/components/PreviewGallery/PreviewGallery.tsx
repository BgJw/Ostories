import { useAppDispatch, useAppSelector } from '../../Hooks/useDispatch_Selector';
import { showModal, setModalMainPhoto } from '../../Slices/PreviewGallerySlice';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import './PreviewGallery.scss';

const PreviewGallery = () => {
    const dispatch = useAppDispatch();
    const {clothesList, isOpenModal, status} = useAppSelector(state => state.PreviewGallerySlice);



    isOpenModal ? document.body.style.overflow = 'hidden': document.body.style.overflow = '' ;


    return (
        status === 'idle' ?
        <>
            <div className='gallery'>
                <div className='gallery__panel'>
                    {
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
                            )) 
                        }
                </div>
            </div>
            {isOpenModal && <Modal />}    
        </>
        :
        <Spinner />
    );
};

export default PreviewGallery;
