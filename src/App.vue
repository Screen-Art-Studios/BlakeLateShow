<template>
  <div id="q-app">
    <router-view/>
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './pages/elements/Navbar'
export default {
  name: 'App',
  components: {
    'Navbar': Navbar
  }
}
</script>

<style>
</style>
