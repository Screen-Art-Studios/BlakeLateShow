<template>
  <div id="q-app">
    <transition name="fade">
    <router-view/>
    </transition>
    <navbar></navbar>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from './pages/elements/Navbar'
import Foot from './pages/elements/Foot'
export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'foot': Foot
  }
}
</script>

<style>
#q-app {
  background-color: #333;
  overflow-y: scroll;
}
.fade-enter-active, .fade-leave-active {
  transition: all .25s ease;
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateY(20px);
}

</style>
