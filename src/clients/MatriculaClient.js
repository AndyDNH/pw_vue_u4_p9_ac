import axios from "axios";
const URL = "http://localhost:8081/matricula/api/v1.0/estudiantes";

const consultarTodos = async(token) => {
    const data = axios.get('http://localhost:8081/matricula/api/v1.0/estudiantes',{headers:{Authorization:`Bearer ${token}`}}).then(res => res.data);
    return data;
}

const consultarPorId = async(id,token) => {
    const data = axios.get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,{headers:{Authorization:`Bearer ${token}`}}).then(res => res.data);
    return data;
}


const guardar = async(body) => {
    const data = axios.post('http://localhost:8081/matricula/api/v1.0/estudiantes',body,{headers:{Authorization:`Bearer ${TOKEN}`}}).then(res=>res.data);
    console.log(data);
    return data;
}

const actualizar = async(id,body) => {
    const data = axios.put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,body, {headers:{Authorization:`Bearer ${TOKEN}`}}).then(res=>res.data);
    console.log(data);
    return data;
    
}

const actualizarParcial = async(id,body) => {
    const data = axios.patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,body, {headers:{Authorization:`Bearer ${TOKEN}`}}).then(res=>res.data);
    console.log(data);
    return data;
}

const borrar = async(id) => {
    axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, {headers:{Authorization:`Bearer ${TOKEN}`}}).then(res=>res.data);
}

export const facadeConsultarTodos = async (token) => {
    return await consultarTodos(token);
}

export const consultarPorIdFachada = async(id,token) => {
    return await consultarPorId(id,token);
}

export const guardarFachada = async (body) => {
    return await guardar(body);
}

export const actualizarFachada = async(id,body) => {
    return await actualizar(id,body);
    
}

export const actualizarParcialFachada = async(id,body) => {
    await actualizarParcial(id,body);
}

export const borrarFachada = async (id) => {
    await borrar(id);
}

