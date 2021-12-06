<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-if="updateAvailable">Click to Update App</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    document.addEventListener(
      'swupdatefound', this.updateTheApp, { once: true }
    );
  },
  data: function() {
    return {
      registration: null,
      updateAvailable: false
    }
  },
  methods: {
    updateTheApp(e) {
      this.registration = e.detail
      this.updateAvailable = true;
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
