<template>
  <div id="app">
    <h1>This is my Cool PWA</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <button v-if="updateAvailable">Click to Update App</button>
    <p>
      This site is created by Nico De Witte
    </p>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
    },
    // Actual update
    update(){
      this.updateAvailable = false;
      // Lazy evaluation
      if (this.registration || this.registration.waiting) {
        this.registration.waiting.postMessage({type:'SKIP_WAITING'});
      }
    },
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
