import './Content.scss';

interface IProps {
    children: React.ReactNode,
}

const Content = ({children}: IProps) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Content;