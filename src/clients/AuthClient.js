import axios from "axios";

const body = {
    "username": "andres",
    "password": "root"
};

// const obtenerToken = async () => {
//     try {

//         const response = await axios.post('http://localhost:8082/auth/login', body);
//         return response.data; 
//     } catch (error) {
//         console.error("Error al obtener token:", error);
//         return null;
//     }
// }


//indicar en ciertas paginas, no hay un unico tipo de autenticacion (
//uso de guardianes, como se implementa
//redirigir a una pagina de login
//a usuarios no autorizados



const obtenerToken = async () => {
    const username = "andres";
    const password = "root";
    
    try {
        const response = await axios.get(`http://localhost:8082/autorizacion/token?username=${username}&password=${password}`).then(response => {
            return response.data;
        });
        const token = response.accessToken;
        localStorage.setItem("token", token);
    } catch (error) {
        console.error("Error al obtener token:", error);
    }
}


export const obtenerTokenFachada = async() => {
    return await obtenerToken();
}