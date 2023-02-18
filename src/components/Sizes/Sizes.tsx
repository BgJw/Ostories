import { sizes } from '../../services/ClothesService';
import './Sizes.scss';

interface IProps {
    setSize: React.Dispatch<React.SetStateAction<string[]>>,
    size: string[],
}
const Sizes = ({setSize, size}: IProps) => {
    const isCheckSize = (size: string) => {
        if(setSize){
            setSize( prev => {
                if (!prev.includes(size)) {
                    return [...prev, size]
                } else {
                    return prev.length > 1 ? prev.filter(el => el !== size): prev
                }
            })
        }
    };


    return (
        <div className="sizes">
        {
            sizes.map( (el, i) => {
                return (
                <button
                    className={ size?.includes(el) ? 'active': ''}
                    onClick={ () =>  {isCheckSize(el)} } 
                    key={el}>
                    {el}
                </button>

                )
})
        }
    </div>
    );
};

export default Sizes;