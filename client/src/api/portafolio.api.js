import axios from 'axios'

export const getPortafolio = () => {
    return axios.get('http://localhost:8000/portafolio/')
}

export const postPortafolio = (data) => {
    return axios.post('http://127.0.0.1:8000/portafolio/contacto/', data)
}