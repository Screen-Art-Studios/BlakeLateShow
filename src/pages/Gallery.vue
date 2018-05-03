<template>
  <div class="Gamain">
    <h2>Gallery</h2>
    <button class="journeyButton button" v-on:click="modal='jn'">The Journey</button>
    <button class="boardsButton button" v-on:click="modal='bd'">Blake's Boards</button>
    <div class="journeyView modal" v-if="modal==='jn'">
      <img v-on:click="journey.full = !journey.full" v-bind:class="{'journeyGallery': !journey.full, 'boardFull': journey.full}" v-for="journey in journeys" v-bind:key="journey.source" v-bind:src="journey.source"/>
    </div>
    <div class="boardsModal modal" v-if="modal==='bd'">
      <img v-on:click="board.full = !board.full" v-bind:class="{'boardGallery': !board.full, 'boardFull': board.full}" v-for="board in boards" v-bind:key="board.source" v-bind:src="board.source"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      modal: 'jn',
      journeys: [{source: '../assets/journey/1.jpg', full: false},
        {source: '../assets/journey/2.jpg', full: false},
        {source: '../assets/journey/3.jpg', full: false},
        {source: '../assets/journey/4.jpg', full: false},
        {source: '../assets/journey/5.jpg', full: false},
        {source: '../assets/journey/6.jpg', full: false},
        {source: '../assets/journey/7.jpg', full: false}],
      boards: [{source: '../assets/journey/1.jpg', full: false},
        {source: '../assets/journey/2.jpg', full: false},
        {source: '../assets/journey/3.jpg', full: false},
        {source: '../assets/journey/4.jpg', full: false},
        {source: '../assets/journey/5.jpg', full: false},
        {source: '../assets/journey/6.jpg', full: false},
        {source: '../assets/journey/7.jpg', full: false}]
    }
  }
}
</script>

<style>
.Gamain {
  background-color: #333;
  height: 100%;
  width: 100%;
  position: fixed;
  text-align: center;
  overflow-y: scroll;
}
h2 {
  font-size: 2em;
  color: white;
  margin-top: 200px;
}
.modal {
  display: grid;
  grid-template-rows: 90px repeat(4, 80px);
  background-color: #333;
}
.button {
 background: none;
 border: none;
 color: white;
 width: 49%;
 height: 30px;
}
.back {
  background: none;
  border: none;
  height: 40px;
  color: white;
  margin-top: 20px;
}
.journeyView {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 200px);
  grid-gap: 5%;
  background-color: #333;
}
img {
  width: 90%;
  height: 100%;
  margin-top: 5%;
  padding: 5%;
}
.journeyGallery {
  width: 90%;
  height: auto;
}
.boardGallery {
  width: 80%;
  height: auto;
}
.boardFull {
  width: 100%;
  height: auto;
  position: fixed;
  top: 220px;
  z-index: 3;
  background: #333 100% 100%;
}
.boardsModal {
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: repeat(50, 150px);
}

@media only screen and (min-width:700px) {
  .journeyView {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 300px);
    overflow-y: scroll;
    height: 800px;
  }
}
</style>
