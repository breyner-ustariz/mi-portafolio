import { useCallback, useState } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesBubles from "./config/particlesBubles";
import particlesNasa from "./config/particlesjsNasa";
import particlesDefault from "./config/particlesjsDefault";
import PropTypes from "prop-types";

const themes = [particlesBubles, particlesNasa, particlesDefault];
const themeColors = ["text-emerald-400", "text-amber-400", "text-red-400"]; 
const bgColors = ["bg-emerald-400", "bg-amber-400", "bg-red-400"]; 
const borderColors = ["border-emerald-400", "border-amber-400", "border-red-400"]; 
const ParticlesBackground = (props) => {
    const [themeIndex, setThemeIndex] = useState(0);

    function changeTheme() {
        // Cambiar al siguiente tema en la lista
        setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
        const textColor = themeColors[themeIndex];
        const newBgColor = bgColors[themeIndex];
        const newBorderColor = borderColors[themeIndex];
        props.colorElegido(textColor, newBgColor, newBorderColor);
        
    }


    const particlesInit = useCallback((engine) => {
        loadFull(engine);
    }, []);
    const currentTheme = themes[themeIndex];

    return (
        <div className="">
            <div className="absolute  w-full h-[100vh]  top-0 py-9 flex flex-nowrap">
                <button
                    className={`absolute  bottom-0 font-black cursor-pointer w-32 text-center ${props.bgColor} rounded-xl px-4 py-1 text-xs m-4`}
                    onClick={changeTheme}
                >
                    Cambiar Tema
                </button>
                <div className="absolute  bottom-0 left-36 font-black cursor-pointer w-32 text-center text-xs m-4"></div>
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={currentTheme}
                className="absolute z-[-1]"
            />
        </div>
    );
};

ParticlesBackground.propTypes = {
    colorElegido: PropTypes.func.isRequired,
    bgColor: PropTypes.string.isRequired
};

export default ParticlesBackground;
