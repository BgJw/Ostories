
import { useState, useEffect } from 'react';
import ClothesService, { IPreviewGallery } from '../../services/ClothesService';
import Modal from '../Modal/Modal';
import './PreviewGallery.scss';

const PreviewGallery = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [img, setImg] = useState<IPreviewGallery[]>();
    const [modalImg, setModalImg] = useState<IPreviewGallery>();

    const { getClothesForPreviewGallery } = ClothesService();

    const hideModal = (): void => {
        setIsOpenModal(false);
    }

    useEffect(() => {

        getClothesForPreviewGallery()
            .then(res => setImg(res))

    }, [])
        isOpenModal ? document.body.style.overflow = 'hidden': document.body.style.overflow = '' ;


    return (
        <>
            <div className='gallery'>
                <div className='gallery__panel'>

                    {
                        img?.length ?
                            img.map((el: IPreviewGallery) => (
                                <div key={el.id} className='gallery__panel__item'>
                                    <img
                                        className='gallery__panel__item-img'
                                        onClick={ () => {setModalImg(el); setIsOpenModal(true)}}
                                        src={el.urls.thumb}
                                        alt={el.alt_description} />
                                </div>
                            )) :
                            null
                    }
                </div>
            </div>
            {isOpenModal && <Modal img={modalImg} hideModal={hideModal} imgCarousel={img}/>}
            
        </>
    );
};

export default PreviewGallery;
