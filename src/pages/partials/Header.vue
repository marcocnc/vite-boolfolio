
<script>
export default {
    name: 'Header'
}
</script>

<template>
    <div class="container py-4">
      <header>
        <nav>
          <ul class="d-flex justify-content-center">
            <li> <router-link :to="{name:'home'}">HOME</router-link> </li>
            <li><router-link :to="{name:'posts'}">POSTS</router-link></li>
            <li><router-link :to="{name:'contacts'}">CONTATTI</router-link></li>
          </ul>
        </nav>
      </header>
    </div>
</template>

<style lang="scss" scoped>
  li{
    list-style: none;
    padding: 0 50px;
  }
</style>