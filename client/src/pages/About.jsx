import { PropTypes } from 'prop-types';
const About = (props) => {
    return (
        <div className="divInicio relative z-[3] text-white text-center">
            <div className="text-lg sm:text-2xl  px-10 grid gap-4">
                <p className="lg:w-[60%] lg:mx-auto">
                    Saludos, soy{" "}
                    <span className={`${props.color} text-2xl sm:text-3xl  font-medium`}>
                        Breyner Ustariz,
                    </span>{" "}
                    desarrollador web <strong>FULL STACK</strong> con un enfoque
                    en la creación de experiencias digitales excepcionales. Mi
                    objetivo es combinar diseño y funcionalidad para dar vida a
                    proyectos web emocionantes.
                </p>
                <div>
                    <h2 className={`hover:text-white text-2xl font-semibold ${props.color} mt-6 mb-8 `}>
                        Habilidades
                    </h2>
                    <div className="sm:w-[60%] lg:w-[40%]   mx-auto">
                        <div className=" slider">
                            <ul>
                                <li>
                                    <img
                                        className="animate-bounce"
                                        src="./html.svg"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="animate-bounce"
                                        src="./css.svg"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="animate-bounce"
                                        src="./js.svg"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="animate-bounce"
                                        src="./node.svg"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="animate-bounce"
                                        src="./python.svg"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="animate-bounce"
                                        src="./django.svg"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="animate-bounce"
                                        src="./react.svg"
                                        alt=""
                                    />{" "}
                                </li>
                                <li>
                                    <img
                                        className="animate-bounce"
                                        src="./tailwind.svg"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="animate-bounce"
                                        src="./boostrap.svg"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="animate-bounce"
                                        src="./mysql.svg"
                                        alt=""
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <span className={`block text-lg sm:text-2xl ${props.color}`}>
                La experiencia es el mejor maestro; la práctica, su herramienta. 
                </span>
            </div>
        </div>
    );
};
About.propTypes = {
    color: PropTypes.string.isRequired, // O el tipo de dato adecuado
};

export default About;
