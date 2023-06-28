<script>
import Home from './pages/Home.vue';

// import Home from './pages/Home.vue';
export default {
  name: 'App',

  // data(){
  //   return{
  //     posts: [] 
  //   }
  // },

  // components:{
  //       Home
  //     },

  //     methods:{
  //       getApi(){
  //         axios.get(store.apiUrl + 'posts')
  //         .then(results => {
  //           this.posts = results.data;
  //           // console.log(this.posts, 'this.posts');
  //         })
  //       },

  //       formatData(dateString){
  //         const d = new Date(dateString);
  //         return d.toLocaleDateString();
  //       },

  //       consoleLog(){
  //         console.log(this.technologies);
  //       },

  //     },
      
  //     // computed:{
  //     //   technologies(){
  //     //     console.log(this.posts);
  //     //       if(!this.posts.technologies.length) return '- no technology -';
            
  //     //       return this.post.technologies.name;
  //     //     },
  //     // },

  //     mounted(){
  //       this.getApi(),
  //       this.consoleLog();
  //     }
}
</script>


<template>
  <router-view></router-view>
  

</template>


<style lang="scss">

</style>