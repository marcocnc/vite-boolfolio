
<script>
import { store } from '../data/store';
import axios from 'axios';
import Card from '../components/Card.vue';
import Header from './partials/Header.vue';
export default {
    name: 'Posts',

    data(){
    return{
      posts: [] 
    }
  },

  components:{
        store,
        Card,
        Header
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
      
      // computed:{
      //   technologies(){
      //     console.log(this.posts);
      //       if(!this.posts.technologies.length) return '- no technology -';
            
      //       return this.post.technologies.name;
      //     },
      // },

      mounted(){
        this.getApi(),
        this.consoleLog();
      }
}
</script>


<template>
    <Header/>
    <h1 class="text-center">Posts</h1>
  <div class="container d-flex flex-wrap">
    <Card v-for="post in posts" :key="post.id" 
      :name="post.name"
      :date="post.start"
      :type="post.type.name"
      :technologies="post.technologies"
    />
  </div>
</template>


<style lang="scss" scoped>

</style>