import axios from "axios";

const body = {
    "username": "andres",
    "password": "root"
};

const obtenerToken = async () => {
    try {

        const response = await axios.post('http://localhost:8082/auth/login', body);
        
        return response.data; 
    } catch (error) {
        console.error("Error al obtener token:", error);
        return null;
    }
}


export const obtenerTokenFachada = async() => {
    return await obtenerToken();
}