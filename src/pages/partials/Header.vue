
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
            <li> <router-link :to="{name:'home'}">Home</router-link> </li>
            <li><router-link :to="{name:'posts'}">Posts</router-link></li>
            <li>Contatti</li>
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