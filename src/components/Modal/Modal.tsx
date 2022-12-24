
import { useState, useCallback, useRef, useEffect } from 'react';
import { IPreviewGallery } from '../../services/ClothesService';
import './Modal.scss';

interface IProps {
img: IPreviewGallery | undefined,
imgCarousel: IPreviewGallery[] | undefined,
hideModal: () => void
}


const Modal: React.FC<IProps> = ({img, imgCarousel, hideModal}) => {

const [modalItem, setModalItem] = useState<IPreviewGallery>( img as  IPreviewGallery);

const changeMainImg = useCallback((img: IPreviewGallery) => {  setModalItem(img) }, [img]);


    return (
        <div className='modal'>
            <button 
                className='modal__close'
                onClick={hideModal}
            >
                X
            </button>
            <div className='modal__bg'
                 style={modalItem?.urls.thumb? {backgroundImage: `url(${modalItem.urls.thumb})`}: {backgroundImage: ''}  }  
            />
            <div className='modal__item'>
                <img
                    className='modal__item-img'
                    src={modalItem?.urls.regular} 
                    alt={modalItem?.alt_description} />
            </div>
            <div className='modal__carousel'>

                {
                    imgCarousel?.map( carousel => (
                        <div key={carousel.id} className='modal__carousel__items'>
                            <img 
                                className='modal__carousel__items-img' 
                                src={carousel.urls.thumb} 
                                alt={carousel.alt_description}
                                onClick={() => changeMainImg(carousel)} 
                            />
                            {
                                modalItem.id === carousel.id 
                                        && <div className='modal__carousel__items-activeImg' />
                            }
                        </div>
                    ) )
                }


            </div>
        </div>
    );
};

export default Modal;
