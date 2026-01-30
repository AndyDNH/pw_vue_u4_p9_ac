<template>
  <div class="container">

    <div class="formulario">
      <h2 class="titulo">Listado de Estudiantes</h2>

      <button @click="consultarEstudiantes">Consultar Todos</button>

      <table v-if="datosTodos.length" class="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha Nacimiento</th>
            <th>Provincia</th>
            <th>Género</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="est in datosTodos" :key="est.id">
            <td>{{ est.id }}</td>
            <td>{{ est.nombre }}</td>
            <td>{{ est.apellido }}</td>
            <td>{{ est.fechaNacimiento.substring(0,10) }}</td>
            <td>{{ est.provincia }}</td>
            <td>{{ est.genero }}</td>
          </tr>
        </tbody>
      </table>

      <p v-if="!datosTodos.length && cargado" class="mensaje">
        No existen estudiantes registrados
      </p>

    </div>

  </div>
</template>

<script>
import { facadeConsultarTodos } from '@/clients/MatriculaClient';

export default {
  data() {
    return {
      datosTodos: [],
      cargado: false
    };
  },
  methods: {
    async consultarEstudiantes() {
      this.datosTodos = await facadeConsultarTodos();
      this.cargado = true;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
  margin-top: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.formulario {
  background-color: #ffffff;
  width: 90%;
  max-width: 900px;
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
  margin-bottom: 25px;
}

button:hover {
  background-color: #011f4b;
}

/* TABLA */
.tabla {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.tabla thead {
  background-color: #005b96;
  color: white;
}

.tabla th,
.tabla td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #b3cde0;
}

.tabla tbody tr:nth-child(even) {
  background-color: #f2f8fc;
}

.tabla tbody tr:hover {
  background-color: #e6f2fa;
}

.mensaje {
  text-align: center;
  color: #555;
  font-weight: 600;
}
</style>
