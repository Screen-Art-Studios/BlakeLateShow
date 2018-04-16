<template>
    <div class="main">
      <iframe width="90%" height="30%" src="https://www.youtube.com/embed/NNftPKFKhDQ" frameborder="0"  allowfullscreen></iframe>
      <h2>Activist Ron Blake has been inspiring thousands of people around the country. Giving support and hope to victims of PTSD through his incredible story of survival and perseverance. <span v-on:click="$router.push('/About')">Learn more about his story here.</span></h2>
    </div>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
    }
  },
  methods: {
    openURL
  }
}
</script>

<style scoped>

.main {
  background-color: #333;
  height: 100%;
  width: 100%;
  margin-top: 140px;
  position: fixed;
}

h2 {
  font-size: 1.5em;
  margin-left: 5%;
  margin-top: 0;
  width: 90%;
  color: white;
  font-family: 'Open Sans', sans-serif;
}
span {
  color: #999;
  text-decoration: underline;
}
iframe {
  margin-left: 5%;
}
</style>
