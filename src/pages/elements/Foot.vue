<template>
  <div class="Fmain">
    <div class="social">
      <div class="fb"></div>
      <div class="tw"></div>
    </div>
    <h3>Powered by: ScreenArt Studios&#169;</h3>
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

<style>
.Fmain {
  height: 100px;
  width: 100%;
  bottom: 0;
  background-color: #444;
  position: fixed;
}
.social {
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.fb {
  background-image: url('../assets/face.svg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
}
h3 {
  color: #999;
  font-size: .8em;
  text-align: center;
  line-height: 20px;
}

</style>
