import axios from "axios";

const consultarTodos = async() => {
    const data = axios.get('http://localhost:8081/matricula/api/v1.0/estudiantes').then(res => res.data);
    return data;
}

const consultarPorId = async(id) => {
    const data = axios.get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(res => res.data);
    return data;
}

const guardar = async(body) => {
    const data = axios.post('http://localhost:8081/matricula/api/v1.0/estudiantes',body).then(res=>res.data);
    console.log(data);
    return data;
}

const actualizar = async(id,body) => {
    const data = axios.put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,body).then(res=>res.data);
    console.log(data);
    return data;
    
}

const actualizarParcial = async(id,body) => {
    const data = axios.patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,body).then(res=>res.data);
    console.log(data);
    return data;
}

const borrar = async(id) => {
    axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(res=>res.data);
}

export const facadeConsultarTodos = async () => {
    return await consultarTodos();
}

export const consultarPorIdFachada = async(id) => {
    return await consultarPorId(id);
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

