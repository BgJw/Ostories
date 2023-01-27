import { Link } from "react-router-dom";

import './NotFoundPage.scss';

const NotFoundPage = () => {
    return (
        <div className="errorPage">
            <div>
            <p>404, pls return to Home Page</p>
            <Link to={'/'}>
                Go to Home
            </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;