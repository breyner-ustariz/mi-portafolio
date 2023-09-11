import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import { postPortafolio } from '../api/portafolio.api';



const Contact = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(async data => {
      console.log(data);
      await postPortafolio(data)
    })




    return (
        <div className="contacto  text-center z-[1000]">

            <p className="mx-auto text-center text-lg w-[80%] sm:[60%]  lg:w-[50%]">Estoy ansioso por conocer tus ideas y colaborar en la creación de algo genial. <span className="block font-medium">¡No dudes en contactarme!</span></p>
        
            <form onSubmit={onSubmit} className="w-[40%] sm:[60%]  lg:w-[50%] mx-auto  grid gap-8 mt-10">
            { errors.name && <span>This field is required</span>}
                <input
                    className={`${props.bgcolor} border-b-2 ${props.borderColor} placeholder:text-[#000000bc] font-semibold placeholder:text-center py-1 focus:outline-none focus:text-black px-2`}
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    {...register("nombre", { required: true })}
                />
                { errors.email && <span>This field is required</span>}
                <input
                    className={`${props.bgcolor} border-b-2 ${props.borderColor} placeholder:text-[#000000bc] font-semibold  placeholder:text-center py-1 focus:outline-none focus:text-black px-2`}
                    type="email"
                    placeholder="correo@correo.com"
                    name="email"
                    {...register("email", { required: true })}
                />
                
                { errors.mensaje && <span>This field is required</span>}
                <textarea
                    className={`${props.bgcolor} focus:text-black border-b-2 ${props.borderColor} placeholder:text-[#000000bc] font-semibold  placeholder:text-center py-1 focus:outline-none px-2`}
                    type="text"
                    placeholder="Escribe tu mensaje"   
                    name="mensaje"
                    {...register("mensaje", { required: true })}
                />

                <button className={`mt-4 border-2  ${props.borderColor} hover:border-white  rounded-lg ${props.color} font-bold cursor-pointer  hover:text-white focus:outline-none px-2`} >Enviar Mensaje</button>
            </form>
        </div>
    );
};
Contact.propTypes = {
    color: PropTypes.string.isRequired,
    bgcolor: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired
};
export default Contact;
