<template>
  <div class="Fmain">
    <div class="social">
      <a href="https://www.facebook.com/Blake-Late-Show-1480994415541825/">Facebook</a>
      <a href="https://www.instagram.com/blakelateshow">Instagram</a>
      <a href="https://twitter.com/BlakeLateShow?lang=en">Twitter</a>
    </div>
    <h3>Powered by: <a href="http://www.screenartstudios.com">ScreenArt Studios&#169;</a></h3>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {}
  }
}
</script>

<style scoped>
.Fmain {
  height: 50px;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #444;
  position: fixed;
}

.social {
  width: 100%;
  height: 1.6em;
  display: grid;
  text-align: center;
  margin-left: 5%;
  grid-template-columns: 1fr 1fr 1fr;
}

h3 {
  height: .9em;
  color: #999;
  font-size: .8em;
  text-align: center;
  line-height: .9em;
}

a {
  color: #999;
  text-decoration: none;
}
</style>
