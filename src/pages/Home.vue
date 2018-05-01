<template>
    <div class="Homain">
      <iframe width="90%" height="30%" src="https://www.youtube.com/embed/NNftPKFKhDQ" frameborder="0"  allowfullscreen></iframe>
      <h2>Activist Ron Blake has been inspiring thousands of people around the country. Giving support and hope to victims of PTSD through his incredible story of survival and perseverance. <span v-on:click="$router.push('/About')">Learn more about his story here.</span></h2>
      <h4>More Links Below</h4>
      <div class="links">
      <a class="BP" href="https://www.youtube.com/watch?v=V0LMlFDIbgQ&t=4s">"The Blake Project"</a>
      <a class="IP" href="https://www.youtube.com/watch?v=F5yO4tRIXTA&t=101s">"Ignite Phoenix 18"</a>
      <a class="FA" href="https://soundcloud.com/finding-arizona-podcast/podcast-118">"Finding Arizona Podcast"</a>
      <a class="IE" href="https://www.insideedition.com/headlines/22863-man-with-ptsd-says-stephen-colbert-saved-his-life-and-now-hes-on-a-mission">"Inside Edition Article"</a>
      <a class="EM" href="https://www.edgemedianetwork.com/news/national//258319">"Edge Media Network Article"</a>
      <a class="MB" href="https://www.youtube.com/watch?v=GaIs_8JSWuA">"Martin Becerra Video"</a>
      <a class="JC" href="http://www.jackcentral.org/culture/a-journey-of-hope-getting-on-the-late-show/article_7ab642da-13de-11e6-addd-8bbac2cac3c8.html">"Jack Central Article"</a>
      <a class="AT" href="http://latalkradio.com/sites/default/files/audio/Therapy-020818.mp3">"All Things Therapy Interview"</a>
    </div>
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
  overflow-y: scroll;
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
h4 {
  margin-left: 5%;
  color: grey;
}
a {
  height: 300px;
  text-align: left;
  margin-left: 5%;
}
.IP {
  margin-top: 30px;
}
.FA {
  margin-top: 60px;
}
.IE {
  margin-top: 90px;
}
.EM {
  margin-top: 120px;
}
.MB {
  margin-top: 150px;
}
.JC {
  margin-top: 180px;
}
.AT {
  margin-top: 210px;
}
@media only screen and (min-width:700px) {
  iframe {
    margin-top: 50px;
    height: 200px;
  }
  .Homain {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  h2 {
    margin-top: 50px;
    font-size:
  }
  h4 {
    display: none;
  }
  a {
    grid-column: 1;
  }
}
@media only screen and (min-width:1000px) {
  h2 {
    font-size: 1.5em;
  }

  iframe {
    height: 300px;
  }
}
</style>
