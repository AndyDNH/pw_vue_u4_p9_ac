<template>
  <button @click="consultarPorId(id)">Consultar por Id</button>
  <input type="text" v-model="id">
  <pre> {{ persona }}</pre>
</template>

<script>
import { consultarPorIdFachada } from '@/clients/MatriculaClient';
export default {
    data(){
        return{
            id:null,
            persona:''
        }
    },
    methods:{
        async consultarPorId(id){
            this.persona =  await consultarPorIdFachada(id);
        },
    }

}
</script>

<style>

</style>