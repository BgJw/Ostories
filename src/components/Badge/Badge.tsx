import './Badge.scss';

interface IProps {
    amount: number | null
}

const Badge = ({amount}: IProps) => {
    return (
        <span className='badge'>{amount}</span>
    );
};

export default Badge;