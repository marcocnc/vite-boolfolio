<script>
import {store} from './data/store';
import axios from 'axios';
export default {
  name: 'Home',

  data(){
    return{
      posts: [] 
    }
  },

  components:{
        store
      },

      methods:{
        getApi(){
          axios.get(store.apiUrl + 'posts')
          .then(results => {
            this.posts = results.data.data;
            // console.log(results.data);
            console.log(results.data);
          })
        },

        formatData(dateString){
          const d = new Date(dateString);
          return d.toLocaleDateString();
        }
      },

      mounted(){
        this.getApi()
      }
}
</script>


<template>
  <div class="container bg-dark">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        
        <tr
        v-for="post in posts" 
        :key="post.id">
          <td>
            {{ post.name }} - 
            <span> {{ formatData(post.start) }} </span>
          </td>
        </tr>
        
      </tbody>
</table>
  </div>
</template>


<style lang="scss">

</style>