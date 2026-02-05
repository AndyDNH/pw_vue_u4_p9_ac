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


const guardar = async(body,token) => {
    const data = axios.post('http://localhost:8081/matricula/api/v1.0/estudiantes',body,{headers:{Authorization:`Bearer ${token}`}}).then(res=>res.data);
    console.log(data);
    return data;
}

const actualizar = async(id,body,token) => {
    const data = axios.put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,body, {headers:{Authorization:`Bearer ${token}`}}).then(res=>res.data);
    console.log(data);
    return data;
    
}

const actualizarParcial = async(id,body,token) => {
    const data = axios.patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,body, {headers:{Authorization:`Bearer ${token}`}}).then(res=>res.data);
    console.log(data);
    return data;
}

const borrar = async(id,token) => {
    axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, {headers:{Authorization:`Bearer ${token}`}}).then(res=>res.data);
}

export const facadeConsultarTodos = async (token) => {
    return await consultarTodos(token);
}

export const consultarPorIdFachada = async(id,token) => {
    return await consultarPorId(id,token);
}

export const guardarFachada = async (body,token) => {
    return await guardar(body,token);
}

export const actualizarFachada = async(id,body,token) => {
    return await actualizar(id,body,token);
    
}

export const actualizarParcialFachada = async(id,body,token) => {
    await actualizarParcial(id,body,token);
}

export const borrarFachada = async (id,token) => {
    await borrar(id,token);
}

