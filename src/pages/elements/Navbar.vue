<template>
    <div class="main">
      <div class="header">
        <h1 v-on:click="navToggle(); $router.push('/')">Blake Late Show</h1>
      </div>
      <div class="buttonbox">
        <button class="About" v-on:click="navToggle(); $router.push('/About')">About</button>
        <button class="Gallery" v-on:click="navToggle(); $router.push('/Gallery')">Gallery</button>
        <button class="Contact" v-on:click="navToggle(); $router.push('/Contact')">Contact</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      toggled: false,
      isToggled: false,
      first: true
    }
  },
  methods: {
    navToggle: function () {
      // Nav button functionality
      if (window.innerWidth < 700) {
        if (this.toggled === false) {
          this.toggled = true
          this.isToggled = true
          this.first = false
        } else if (this.toggled === true) {
          this.toggled = false
          this.isToggled = false
        }
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 140px;
  background-color: #333;
  position: fixed;
}

.header {
  height: 60px;
}
h1 {
  text-align: center;
  font-size: 2.5em;
  color: white;
  font-family: 'Mr Dafoe', cursive;
  text-shadow: 2px 2px 8px black;
}
.buttonbox {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
button {
  color: white;
  font-family: 'Open Sans', sans-serif;
}
</style>
