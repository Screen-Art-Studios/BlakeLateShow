<template>
  <div class="Abmain">
    <h2>The Ron Blake Story</h2>
     <p>
       A moment of laughter from a Stephen Colbert joke on a suicidal night two years
       ago changed everything for Blake. He began a journey of re-engaging society by
       meeting complete strangers each day as a form of personal therapy. This was also
       a mission to get on The Late Show with Stephen Colbert, serving as a symbolic goal
       that was sparked from that moment of laughter. He has gone out for 905 days in a row which is
       over 7,000 hours of effort, and has met with 25,051 strangers (As of May 5th) in his
       quest to overcome his trauma and raise awareness for both PTSD and sexual assault.
     </p>
     <p>
       These strangers have all shared with him their amazing messages of support and
       hope in 86 languages with 26 Sharpie marker colors on over 3,100 square feet of poster boards.
     </p>
     <p>
       This cross country journey has created this incredible participatory art project that
       has become a collective story of hope and support. These 377 giant foam poster boards
       have colorful messages that include artwork, poetry, short stories, jokes, bible verses,
       and much more.
    </p>
    <p>
     This journey has been featured on Inside Edition in New York, CBS 5 News Phoenix,
     and over 30 other news outlets around the states. An Emmy-nominated documentary was
     produced about his journey by a group of journalism students at Arizona State
     University.
    </p>
    <p>
      Blake also has a big goal of becoming a guest on The Late Show with Stephen Colbert.
      He explained the significance of this show (on that suicidal night) in his TEDx talk at Grand
      Canyon University. He wants to deliver his message, and the messages of all of his
      supporters, to the show and provide hope and support for many others overcoming their traumas.
    </p>
    <p>
      Blake was born in Gary, IN, lived in Los Angeles, San Diego, and England however
      he has resided in Phoenix for the last 13 years. Ron Blake graduated with an
      MPA in Public Affairs from Indiana University, was elected as a city councilman
      in suburban Chicago at a young age, was a high school physics teacher, and was
      honored for his work with students as a high school cross country and track coach for 15 seasons.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.Abmain {
  background-color: #333;
  height: 100%;
  width: 100%;
  bottom: 0;
  top: 0;
  position: absolute;
  overflow-y: scroll;
  padding-bottom: 100px;
}
.Abmain::-webkit-scrollbar {
display: none;
}
h2 {
  text-align: center;
  font-size: 2em;
  color: white;
  margin-top: 200px;
  font-family: 'Open Sans';
}
p {
  color: white;
  width: 80%;
  margin-left: 10%;
  text-rendering: optimizeLegibility;
  text-align: left;
  font-family: sans-serif;
}
@media only screen and (min-width:700px) {
  p {
    font-size: 1.6em;
    width: 60%;
    margin-left: 20%;
  }
  h2 {
    font-size: 2.4em;
  }
}
@media only screen and (min-width:1000px) {
  p {
    font-size: 2em;
    width: 60%;
    margin-left: 20%;
  }
  h2 {
    font-size: 2.9em;
  }
}
</style>
