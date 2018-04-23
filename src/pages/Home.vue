<template>
    <div class="Homain">
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

.Homain {
  background-color: #333;
  height: 100%;
  width: 100%;
  margin-top: 140px;
  position: fixed;
  overflow-y: visible;
  margin-bottom: 200px;
}

h2 {
  text-align: left;
  font-size: 1em;
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

@media only screen and (min-width:700px) {
  iframe {
    margin-top: 50px;
  }
  .Homain {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  h2 {
    margin-top: 50px;
  }
}
</style>
