<template>
    <div class="Navmain">
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
.Navmain {
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
  height: 50px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  background: none;
  border: none;
  -webkit-animation-duration: .25s;
  animation-duration: .25s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
button:hover {
  animation-name: bounce;
  -moz-animation-name: bounce;
}

@keyframes bounce {
  0%, 100% {
      -webkit-transform: translateY(0);
      -ms-transform:     translateY(0);
      transform:         translateY(0)
    }

    100% {
      -webkit-transform: translateY(-5px);
      -ms-transform:     translateY(-5px);
      transform:         translateY(-5px)
    }
  }
</style>
