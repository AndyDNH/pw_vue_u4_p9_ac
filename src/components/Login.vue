<template>
  <div class="login">
    <h1>Login</h1>
    <input type="text" placeholder="Usuario" v-model="usuario" />
    <input type="password" placeholder="Password" v-model="password" />
    <button v-on:click="login()">Entrar</button>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "@/clients/AuthClient";
export default {
  data() {
    return {
      usuario: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await obtenerTokenFachada(this.usuario,this.password)
      const Token = localStorage.getItem("token");
      if (Token !== null) {
        localStorage.setItem("estaAutenticado", true);
        console.log("token no vacio");
        console.log("unTOken",Token);
        const redirectPath = this.$route.query.redirect || {name: 'home'}
        this.$router.push(redirectPath)
      } else {
        console.log("Error de autenticacion");
      }
    },
  },
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  /* margin: 100px; */
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
  text-align: center;
}

input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}
button {
  width: 100%;
  padding: 8px;
  cursor: pointer;
}
</style>