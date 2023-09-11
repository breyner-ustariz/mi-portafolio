import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";



const Social = (props) => {
    return (
        <div className="absolute w-[20%] sm:w-[100px] bottom-4  right-2 z-[97]  flex gap-4 flex-wrap">
            <Link to="#">
                <i className={`animated -mt-10 text-5xl fa-brands fa-github ${props.color} hover:text-white`}></i>
            </Link>
            <Link to="#">
                <i className={`animated text-3xl fa-brands fa-linkedin hover:${props.color} text-white`}></i>
            </Link>
            <Link to="#">
                <i className={`animated -mt-8 text-3xl fa-brands fa-discord text-white hover:${props.color}`}></i>
            </Link>
            <Link to="#">
                <i className={`animated text-2xl fa-brands fa-facebook  ${props.color} hover:text-white`}></i>
            </Link>
        </div>
    );
};

Social.propTypes = {
    color: PropTypes.string.isRequired, // O el tipo de dato adecuado
};

export default Social;
