<template>
  <div class="container">
    <div class="formulario">
      <h2 class="titulo">Consultar Estudiante</h2>

      <p type="Id">
        <input type="number" v-model="id" />
      </p>

      <p type="Nombre" v-if="mostrar">
        <input type="text" v-model="nombre" />
      </p>

      <p type="Apellido" v-if="mostrar">
        <input type="text" v-model="apellido" />
      </p>

      <p type="Fecha de Nacimiento" v-if="mostrar">
        <input type="date" v-model="fNacimiento" />
      </p>

      <p type="Provincia" v-if="mostrar">
        <input type="text" v-model="provincia" />
      </p>

      <p type="Genero" v-if="mostrar">
        <input type="text" v-model="genero" />
      </p>

      <div class="boton-seccion">
        <button @click="consultarPorId(id)">Buscar Estudiante</button>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarPorIdFachada } from "@/clients/MatriculaClient";
import { obtenerTokenFachada } from "@/clients/AuthClient";
export default {
  data() {
    return {
      mostrar: false,
      id: null,
      persona: "",
      nombre: "",
      apellido: "",
      fNacimiento: "",
      provincia: "",
      genero: "",
      token:null
    };
  },
  async mounted() {
    try {
      const res = await obtenerTokenFachada();
      // Prueba esto: si 'res' es un objeto, busca la propiedad (ej. res.token o res.jwt)
      this.token = typeof res === "object" ? res.token : res;

      console.log("Token procesado:", this.token);
    } catch (error) {
      console.error("Error al obtener el token:", error);
    }
  },

  methods: {
    async consultarPorId(id) {
      this.persona = await consultarPorIdFachada(id,this.token);
      this.nombre = this.persona.nombre;
      this.apellido = this.persona.apellido;
      this.fNacimiento = this.persona.fechaNacimiento.substring(0, 10);
      this.provincia = this.persona.provincia;
      this.genero = this.persona.genero;
      if ((this.persona = !"")) {
        this.mostrar = true;
      }
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
  margin-bottom: 10px;
}

button:hover {
  background-color: #011f4b;
}

button:active {
  background-color: #002244;
}
</style>