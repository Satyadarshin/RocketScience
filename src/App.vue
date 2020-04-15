<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/authors">Authors</router-link> |
      <router-link to="/awards">Awards</router-link>
    </div>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    appFooter: footer
  }
}
</script>

<style lang="scss">


#nav {
  padding: 30px;
  a { 
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
