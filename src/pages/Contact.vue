<template>
  <div class="Comain">
    <h2>Contact</h2>
    <p>If you would like to have Ron Blake speak at an event, or if you have any connection to the Late Show, please contact him via one of the methods below!</p>
    <h3>Phone: (602) 525 - 8518</h3>
    <h3>Email: Blake@BlakeLateShow.com</h3>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.Comain {
  background-color: #333;
  padding-top: 60px;
  height: 100%;
  width: 100%;
  position: fixed;
}
h2 {
  font-size: 1.8em;
  color: white;
  margin-top: 140px;
  text-align: center;
}
h3 {
  font-size: 1.2em;
  color: white;
  text-align: center;
}
p {
  text-align: center;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
}
a {
  text-align: center;
  color: #fff;
  width: 100%;
  position: absolute;
}
@media only screen and (min-width:700px) {
  p {
    font-size: 1.8em;
  }
  h2 {
    font-size: 2.2em;
  }
  h3 {
    font-size: 1.9em;
  }
  a {
    font-size: 1.8em;
  }
}
@media only screen and (min-width:1000px) {
  p {
    font-size: 2.4em;
  }
  h2 {
    font-size: 2.8em;
  }
  h3 {
    font-size: 2.6em;
  }
  a {
    font-size: 2.4em;
  }
}
</style>
