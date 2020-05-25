<template>
  <div id="app">
    <md-tabs class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
      <md-tab id="tab-about" md-label="About" to="/about"></md-tab>
      <md-tab id="tab-authors" md-label="Authors" to="/authors"></md-tab>
      <md-tab id="tab-awards" md-label="Awards" to="/awards"></md-tab>
      <md-tab id="tab-masterworks" md-label="Masterworks" to="/masterworks"></md-tab>
    </md-tabs>
    <main id="content">
      <router-view/>
    </main>
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

@import url("https://fonts.googleapis.com/css?family=Material+Icons");
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
