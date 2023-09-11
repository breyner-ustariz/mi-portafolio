import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import { PropTypes } from 'prop-types';

const Nav = (props) => {
    const menuRef = useRef(null);
    const iconBars = useRef(null);

    useEffect(() => {
        menuRef.current.classList.remove("navbar");
    })
    //const [menuVisible, setMenuVisible] = useState(false);

    function toggleMenu(e) {
        if (e.target.classList.contains("ICON")) {
            menuRef.current.classList.toggle("navbar");
            menuRef.current.classList.toggle("active");
        }
    }
    function closeMenu(){
        menuRef.current.classList.remove("navbar");
        menuRef.current.classList.remove("active");
    }

    return (
        <div className="relative z-[10]">
            <div className="relative flex justify-between h-[10%] px-10 py-10 z-50">
                <div className="m-[-10px]">
                    <img className="w-[15%] sm:w-[60px]" src="./logo.svg" alt="" />
                </div>
                <div className="text-white text-3xl sm:hidden" ref={iconBars}>
                    <i
                        className="ICON fa-solid fa-chart-bar cursor-pointer"
                        onClick={toggleMenu}
                    ></i>
                </div>
            </div>
            <div
                className={`hidden  sm:text-lg lg:text-2xl absolute left-[25%] w-[50%] top-10  font-bold sm:flex gap-4  sm:gap-6 text-center    justify-center z-[100]`}
                
            >
                <NavLink className={` ${props.color} hover:text-white  `} to="/" >
                    Inicio
                </NavLink>
                <NavLink className={` ${props.color} flex-none hover:text-white`}  to="/sobremi" >
                    Sobre Mi
                </NavLink>
                <NavLink className={` ${props.color} hover:text-white`} to="/portafolio" >
                    Portafolio
                </NavLink>
                <NavLink className={` ${props.color} hover:text-white`} to="/contacto" >
                    Contacto
                </NavLink>
                
                
            </div>
            
            <nav
                className={`flex ${props.bgcolor}  navActive border-r-8 border-white sm:hidden   absolute sm:sticky font-bold gap-10 flex-col sm:flex-row sm:justify-center w-[50%] sm:w-[100%] sm:gap-6 text-center h-[100vh] sm:h-[20%]  z-[1000] top-0  sm:left-[0%] justify-center px-10`}
                ref={menuRef}
            >
                <img className="sm:hidden absolute  top-0 left-5 w-[50%] sm:w-[20%]  m-10" src="./logo-black.svg" alt="" />
              
                <NavLink className={`enlace sm:${props.color}`} to="/" onClick={closeMenu}>
                    Inicio
                </NavLink>
                <NavLink className="enlace" to="/sobremi" onClick={closeMenu}>
                    Sobre Mi
                </NavLink>
                <NavLink className="enlace" to="/portafolio" onClick={closeMenu}>
                    Portafolio
                </NavLink>
                <NavLink className="enlace" to="/contacto" onClick={closeMenu}>
                    Contacto
                </NavLink>
                
            </nav>
        </div>
    );
};

Nav.propTypes = {
    color: PropTypes.string.isRequired, 
    bgcolor: PropTypes.string.isRequired
};


export default Nav;
