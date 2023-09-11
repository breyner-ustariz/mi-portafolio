import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

const Home = (props) => {
    return (
        <div className="tituloInicio py-20 z=[2] font-medium text-2xl sm:text-5xl text-white text-center grid gap-4 justify-center  items-center">
            <div>
                <h1 className="tituloInicio px-10">
                    <span
                        className={`text-5xl sm:text-5xl font-black ${props.color} hover:text-white `}
                    >
                        Breyner{" "}
                    </span>
                    <span
                        className={`text-5xl sm:text-5xl font-black ${props.color} hover:text-white `}
                    >
                        Ustariz
                    </span>
                </h1>
                <h2>Desarrollador web Full Stack</h2>
            </div>
            <div className={`z-50 w-[300px] grid gap-6 mx-auto ${props.color}  mt-10`}>
                <NavLink
                    className={`rounded-xl bg-transparent border-2 ${props.borderColor} px-2 hover:text-white  text-2xl`}
                    to="/portafolio"
                >
                    Ver Portafolio{" "}
                    <i className="animate-bounce   text-sm fa-solid fa-arrow-right"></i>
                </NavLink>
                <NavLink
                    className={`rounded-xl bg-transparent border-2 ${props.borderColor} px-2 hover:text-white   text-2xl`}
                    to="/portafolio"
                >
                    Descargar Cv{" "}
                    <i className="animate-bounce text-sm fa-solid fa-download"></i>
                </NavLink>
            </div>
        </div>
    );
};
Home.propTypes = {
    color: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired
};

export default Home;
