<template>
  <div class="container">
    <div class="formulario">
      <h2 class="titulo">Registro de Estudiante</h2>
      
      <p type="Nombre">
        <input type="text" v-model="nombre" />
      </p>

      <p type="Apellido">
        <input type="text" v-model="apellido" />
      </p>

      <p type="Fecha de Nacimiento">
        <input type="date" v-model="fNacimiento" />
      </p>

      <p type="Provincia">
        <input type="text" v-model="provincia" />
      </p>

      <p type="Genero">
        <input type="text" v-model="genero" />
      </p>

      <div class="boton-seccion">
        <button @click="guardarEstudiante()">Guardar Estudiante</button>
      </div>
    </div>
  </div>
</template>

<script>
import { guardarFachada } from "@/clients/MatriculaClient";

export default {
  data() {
    return {
      exito:false,
      nombre: '',
      apellido: '',
      fNacimiento: '',
      provincia: '',
      genero: '',
    };
  },
  methods: {
    async guardarEstudiante() {
      const cuerpoEstu = {
          nombre: this.nombre,
          apellido: this.apellido,
          fechaNacimiento: this.fNacimiento ? this.fNacimiento + "T00:00:00" : null,
          provincia: this.provincia,
          genero: this.genero,
      }
      await guardarFachada(cuerpoEstu);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.formulario {
  background-color: #ffffff;
  width: 400px;
  padding: 40px;
  border: 1px solid #b3cde0; 
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 48, 73, 0.15);
}

.titulo {
  color: #005b96;
  text-align: center;
  margin-bottom: 25px;
  font-size: 24px;
  margin-top: 0;
}

p {
  margin-bottom: 18px;
  text-align: left;
}

p::before {
  content: attr(type);
  display: block;
  font-weight: 600;
  color: #011f4b; 
  margin-bottom: 6px;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1.5px solid #6497b1;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 15px;
  outline: none;
  transition: border-color 0.3s;
  font-family: inherit;
}

input:focus {
  border-color: #005b96;
  background-color: #f0f7fa; 
}

.boton-seccion {
  text-align: center;
  margin-top: 30px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #005b96; 
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #011f4b; 
}

button:active {
  background-color: #002244;
}
</style>