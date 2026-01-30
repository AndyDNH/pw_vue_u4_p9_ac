<template>
  <button>Guardar</button>
  <label for="">Nombre</label>
  <input type="text" />
  <label for="">Apellido</label>
  <input type="text" />
  <label for="">Fecha Nacimiento</label>
  <input type="text" />
  <label for="">Genero</label>
  <input type="text" />
  <label for="">Provincia</label>
  <input type="text" />

  <button>Actualizar</button>
  <button>Actualizar Parcial</button>
  <button>Borrar</button>
</template>

<script>
import {
  facadeConsultarTodos,
  consultarPorIdFachada,
} from "@/clients/MatriculaClient";
export default {
  data() {
    return {
      id: null,
      datosTodos: "",
      persona: "",
    };
  },
  methods: {
    async consultarEstudiantes() {
      this.datosTodos = await facadeConsultarTodos();
      console.log(this.datosTodos);
    },
    async consultarPorId(id) {
      this.persona = await consultarPorIdFachada(id);
    },
  },
};
</script>

<style>
</style>