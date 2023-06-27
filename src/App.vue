<script>
import {store} from './data/store';
import axios from 'axios';
import Card from './components/Card.vue';
export default {
  name: 'Home',

  data(){
    return{
      posts: [] 
    }
  },

  components:{
        store,
        Card
      },

      methods:{
        getApi(){
          axios.get(store.apiUrl + 'posts')
          .then(results => {
            this.posts = results.data;
            // console.log(this.posts, 'this.posts');
          })
        },

        formatData(dateString){
          const d = new Date(dateString);
          return d.toLocaleDateString();
        },

        consoleLog(){
          console.log(this.technologies);
        },

      },
      
      computed:{
        technologies(){
            if(!this.posts.technologies) return '- no technology -';
            
            return this.post.technologies.name;
          },
      },

      mounted(){
        this.getApi(),
        this.consoleLog();
      }
}
</script>


<template>

  <div class="container d-flex flex-wrap">
    <Card v-for="post in posts" :key="post.id" 
      :name="post.name"
      :date="post.start"
      :type="post.type.name"
      :technologies="technologies"
    />
  </div>

</template>


<style lang="scss">

</style>