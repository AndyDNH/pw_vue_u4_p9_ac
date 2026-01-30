<template>
  <button @click="consultarEstudiantes()">Consutltar Todos</button>
  <pre> {{ datosTodos }}</pre>

</template>

<script>
import { facadeConsultarTodos, consultarPorIdFachada } from '@/clients/MatriculaClient';
export default {
    data(){
        return{
            id:null,
            datosTodos:'',
            persona:''
        }
    },
    methods:{
        async consultarEstudiantes(){
            this.datosTodos =  await facadeConsultarTodos();
            console.log(this.datosTodos);
            
        },
        async consultarPorId(id){
            this.persona =  await consultarPorIdFachada(id);
        },
    }

}
</script>

<style>

</style>