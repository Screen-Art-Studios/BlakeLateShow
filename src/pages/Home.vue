<template>
    <div class="Homain">
      <iframe width="90%" height="100%" src="https://www.youtube.com/embed/NNftPKFKhDQ" frameborder="0"  allowfullscreen></iframe>
      <h2>Activist Ron Blake has been inspiring thousands of people around the country. Giving support and hope to victims of PTSD and sexual assault through his incredible story of survival and perseverance. <span v-on:click="$router.push('/About')">Learn more about his story here.</span></h2>
      <div class="links">
        <a href="https://www.youtube.com/watch?v=V0LMlFDIbgQ&t=4s">"The Blake Project"</a>
        <a href="https://www.youtube.com/watch?v=F5yO4tRIXTA&t=101s">"Ignite Phoenix 18"</a>
        <a href="https://soundcloud.com/finding-arizona-podcast/podcast-118">"Finding Arizona Podcast"</a>
        <a href="https://www.insideedition.com/headlines/22863-man-with-ptsd-says-stephen-colbert-saved-his-life-and-now-hes-on-a-mission">"Inside Edition Article"</a>
        <a href="https://www.edgemedianetwork.com/news/national//258319">"Edge Media Network Article"</a>
        <a href="https://www.youtube.com/watch?v=GaIs_8JSWuA">"Martin Becerra Video"</a>
        <a href="http://latalkradio.com/sites/default/files/audio/Therapy-020818.mp3">"All Things Therapy Interview"</a>
        <a href="http://www.therainbowtimesmass.com/from-trauma-to-triumph-a-gay-mans-mission-to-overcome-ptsd-educate-others-on-sexual-assault/">Rainbow Times Article</a>
        <a href="http://www.nwitimes.com/niche/get-healthy/mental-health/hobart-native-travels-country-raising-awareness-about-ptsd/article_c0427ae9-5564-5e9f-8e9f-38921ce614e2.html">NWI.com's Article</a>
        <a href="https://pridesource.com/article/sexual-assault-survivor-collects-and-spreads-messages-of-support/">Pride Source Article</a>
        <a href="https://www.domesticshelters.org/domestic-violence-articles-information/survivor-story-ron-blake#.Wu3J-4jwbIU">Domestic Shelters Article</a>
        <a href="http://www.jackcentral.org/culture/a-journey-of-hope-getting-on-the-late-show/article_7ab642da-13de-11e6-addd-8bbac2cac3c8.html">Jack Central Article</a>
        <a href="https://www.theprospectordaily.com/2016/09/27/coping-with-sexual-assault-through-comedy/">The Prospector Article</a>
        <a href="http://ktar.com/category/podcast_player/?a=339594">KTAR podcast</a>
        <a href="http://southfloridagaynews.com/National/ron-blake-was-raped-in-2015-now-he-s-on-a-mission-to-share-his-story-and-get-on-the-the-late-show.html">South Florida Gay News Article</a>
        <a href="http://www.iun.edu/news/2018/blake-sexual-assault-awareness.htm">Indiana University article</a>
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

<style scoped lang="less">
.Homain {
  background-color: #333;
  height: 100%;
  width: 100%;
  padding-top: 140px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding-bottom: 200px;
  display: grid;
  grid-template-rows: 200px 150px 150px;
  overflow-y: scroll;
}

h2 {
  grid-row: 2;
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
  grid-row: 1;
  margin-left: 5%;
}
.links {
  grid-row: 3;
  font-size: .8em;
  text-align: left;
  display: grid;
  grid-template-rows: repeat(16, 1.6em);
  overflow-y: auto;
  height: 32em;
}
a {
  height: 20px;
  margin-left: 5%;
  color: #fff;
}

@media only screen and (min-width:700px) {
  iframe {
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: 50px;
    height: 300px;
  }
  .Homain {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px 150px 200px;
  }
  h2 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 2;
    font-size: 1em;
  }
  .links {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}

@media only screen and (min-width:1000px) {
  .Homain {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 580px 200px 300px;
  }
  h2 {
    font-size: 1.5em;
  }
  iframe {
    height: 500px;
  }
  .links {
    font-size: 1.4em;
    line-height: 1.6em;
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>
