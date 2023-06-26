<script>
import {store} from './data/store';
import axios from 'axios';
export default {
  name: 'Home',
  components:{
        store
      },

      methods:{
        getApi(){
          axios.get(store.apiUrl + 'posts')
          .then(results => {
            console.log(results);
          })
        }
      },

      mounted(){
        this.getApi()
      }
}
</script>


<template>
  <div class="container bg-dark">
    <h1 class="text-white">test</h1>
  </div>
</template>


<style lang="scss">

</style>