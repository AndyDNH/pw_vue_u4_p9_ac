<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Consultar Todos</router-link> |
    <router-link to="/consid">Consulta id</router-link> |
    <router-link to="/guardar">Guardar</router-link> |
    <router-link to="/actualizar">Actualizar</router-link> |
    <router-link to="/parcial">Parcial</router-link> |
    <router-link to="/borrar">Borrar</router-link> |
  </nav>
  <router-view/>
</template>

<script>
import { obtenerTokenFachada } from '@/clients/AuthClient';
export default {
  async mounted() {
    try {
       await obtenerTokenFachada();
       const token = localStorage.getItem("token");
       console.log("Token unico generado: ",token);

    } catch (error) {
      console.error("Error al obtener el token:", error);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
