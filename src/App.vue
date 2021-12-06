<template>
  <div id="app">
    <h1>This is my Cool PWA</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <button v-if="updateAvailable" @click="update">Click to Update App</button>
    <p>
      This site is created by Nico De Witte @ VIVES
    </p>
    <p>
      This was a demo for mobile Apps.
    </p>
    <p>
      Will this trigger update? Or will this?
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

    navigator.serviceWorker.addEventListener(
      'controllerchange', () => {
        if (this.isRefreshing) return;
        this.isRefreshing = true;
        window.location.reload();
      }
    );
  },
  data: function() {
    return {
      registration: null,
      updateAvailable: false,
      isRefreshing: false
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
