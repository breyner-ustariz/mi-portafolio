import { useEffect, useState } from "react";
import { getPortafolio } from "./../api/portafolio.api";
import { PropTypes } from 'prop-types';

const Portfolio = (props) => {
    const [proyectos, setProyectos] = useState([]);

    

    useEffect(() => {
        async function loadPortfolio() {
            const res = await getPortafolio();
            const portafolioUrl = res.data.portafolio;

            // Realiza una solicitud GET a la URL del portafolio
            try {
                const proyectosRes = await fetch(portafolioUrl);
                if (proyectosRes.ok) {
                    const proyectosData = await proyectosRes.json();
                    setProyectos(proyectosData);
                } else {
                    console.error(
                        "Error al obtener los proyectos:",
                        proyectosRes.status
                    );
                }
            } catch (error) {
                console.error(
                    "Error al realizar la solicitud de proyectos:",
                    error
                );
            }
        }
        loadPortfolio();
    }, []);
    return (
        <div className="z-[4] portafolio text-white ">
            
            <p className="w-[80%] text-xl  sm:w-[60% ] sm:text-2xl lg:w-[50%] my-12 mx-auto text-center lg:text-3xl"><span className={`block font-bold ${props.color} mb-4`}>¡Bienvenido a mi portafolio!</span> En esta sección, te invito a explorar una muestra de los emocionantes proyectos web que he tenido el placer de desarrollar.</p>

            <div  className="sm:w-[80%] lg:w-[60%] px-10 mt-10   mx-auto"
            
            >
                <div className="flex gap-10   z-[10000]"  >

                {proyectos ? (
                proyectos.map((project) => (
                    <div 
                        className="cardContainer text-white w-[200px] z-[95] h-[200px]"
                        key={project.id}
                    >
                        <div className="cardInfo absolute w-[200px] h-[200px] text-center">
                            <div className="text-sm text-black   bg-[#2e2e2ebd] w-full h-full">
                                <h1 className={`${props.color} font-semibold`}>{project.nombre}</h1>
                                <p className="bg-[#929292bd] text-xs font-semibold h-[40%] mt-4">{project.descripcion}</p>
                                <p className={`${props.bgcolor} h-[15%] p-1  text-xs text-black font-bold`}>{project.tecnologias}</p>
                               <div className={`flex gap-4 justify-center items-center text-2xl ${props.color} pt-2 `}>
                               <a href={project.url}><i className="fa-solid fa-link"></i></a>
                                <a href="{project.github}"><i className="fa-brands fa-github"></i></a>
                               </div>
                                
                            </div>
                        </div>
                        <div>
                            <img className="w-[200px] h-[200]" src={project.imagen} alt="" />
                        </div>
                    </div>
                ))
            ) : (
                <p>Cargando proyectos...</p>
            )}
                </div>
            </div>
        </div>
    );
};

Portfolio.propTypes = {
    color: PropTypes.string.isRequired,
    bgcolor: PropTypes.string.isRequired
};

export default Portfolio;
