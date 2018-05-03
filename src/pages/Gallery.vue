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
      boards: [{source: '../assets/boards/1.jpg', full: false},
        {source: '../assets/boards/2.jpg', full: false},
        {source: '../assets/boards/3.jpg', full: false},
        {source: '../assets/boards/4.jpg', full: false},
        {source: '../assets/boards/5.jpg', full: false},
        {source: '../assets/boards/6.jpg', full: false},
        {source: '../assets/boards/7.jpg', full: false},
        {source: '../assets/boards/8.jpg', full: false},
        {source: '../assets/boards/9.jpg', full: false},
        {source: '../assets/boards/10.jpg', full: false},
        {source: '../assets/boards/11.jpg', full: false},
        {source: '../assets/boards/12.jpg', full: false},
        {source: '../assets/boards/13.jpg', full: false},
        {source: '../assets/boards/14.jpg', full: false},
        {source: '../assets/boards/15.jpg', full: false},
        {source: '../assets/boards/16.jpg', full: false},
        {source: '../assets/boards/17.jpg', full: false},
        {source: '../assets/boards/18.jpg', full: false},
        {source: '../assets/boards/19.jpg', full: false},
        {source: '../assets/boards/20.jpg', full: false},
        {source: '../assets/boards/21.jpg', full: false},
        {source: '../assets/boards/22.jpg', full: false},
        {source: '../assets/boards/23.jpg', full: false},
        {source: '../assets/boards/24.jpg', full: false},
        {source: '../assets/boards/25.jpg', full: false},
        {source: '../assets/boards/26.jpg', full: false},
        {source: '../assets/boards/27.jpg', full: false},
        {source: '../assets/boards/28.jpg', full: false},
        {source: '../assets/boards/29.jpg', full: false},
        {source: '../assets/boards/30.jpg', full: false},
        {source: '../assets/boards/31.jpg', full: false},
        {source: '../assets/boards/32.jpg', full: false},
        {source: '../assets/boards/33.jpg', full: false},
        {source: '../assets/boards/34.jpg', full: false},
        {source: '../assets/boards/35.jpg', full: false},
        {source: '../assets/boards/36.jpg', full: false},
        {source: '../assets/boards/37.jpg', full: false},
        {source: '../assets/boards/38.jpg', full: false},
        {source: '../assets/boards/39.jpg', full: false},
        {source: '../assets/boards/40.jpg', full: false},
        {source: '../assets/boards/41.jpg', full: false},
        {source: '../assets/boards/42.jpg', full: false},
        {source: '../assets/boards/43.jpg', full: false},
        {source: '../assets/boards/44.jpg', full: false},
        {source: '../assets/boards/45.jpg', full: false},
        {source: '../assets/boards/46.jpg', full: false},
        {source: '../assets/boards/47.jpg', full: false},
        {source: '../assets/boards/48.jpg', full: false},
        {source: '../assets/boards/49.jpg', full: false},
        {source: '../assets/boards/50.jpg', full: false},
        {source: '../assets/boards/51.jpg', full: false},
        {source: '../assets/boards/52.jpg', full: false},
        {source: '../assets/boards/53.jpg', full: false},
        {source: '../assets/boards/54.jpg', full: false},
        {source: '../assets/boards/55.jpg', full: false},
        {source: '../assets/boards/56.jpg', full: false},
        {source: '../assets/boards/57.jpg', full: false},
        {source: '../assets/boards/58.jpg', full: false},
        {source: '../assets/boards/59.jpg', full: false},
        {source: '../assets/boards/60.jpg', full: false},
        {source: '../assets/boards/61.jpg', full: false},
        {source: '../assets/boards/62.jpg', full: false},
        {source: '../assets/boards/63.jpg', full: false},
        {source: '../assets/boards/64.jpg', full: false},
        {source: '../assets/boards/65.jpg', full: false},
        {source: '../assets/boards/66.jpg', full: false},
        {source: '../assets/boards/67.jpg', full: false},
        {source: '../assets/boards/68.jpg', full: false},
        {source: '../assets/boards/69.jpg', full: false},
        {source: '../assets/boards/70.jpg', full: false},
        {source: '../assets/boards/71.jpg', full: false},
        {source: '../assets/boards/72.jpg', full: false},
        {source: '../assets/boards/73.jpg', full: false},
        {source: '../assets/boards/74.jpg', full: false},
        {source: '../assets/boards/75.jpg', full: false},
        {source: '../assets/boards/76.jpg', full: false},
        {source: '../assets/boards/77.jpg', full: false},
        {source: '../assets/boards/78.jpg', full: false},
        {source: '../assets/boards/79.jpg', full: false},
        {source: '../assets/boards/80.jpg', full: false},
        {source: '../assets/boards/81.jpg', full: false},
        {source: '../assets/boards/82.jpg', full: false},
        {source: '../assets/boards/83.jpg', full: false},
        {source: '../assets/boards/84.jpg', full: false},
        {source: '../assets/boards/85.jpg', full: false},
        {source: '../assets/boards/86.jpg', full: false},
        {source: '../assets/boards/87.jpg', full: false},
        {source: '../assets/boards/88.jpg', full: false},
        {source: '../assets/boards/89.jpg', full: false},
        {source: '../assets/boards/90.jpg', full: false},
        {source: '../assets/boards/91.jpg', full: false},
        {source: '../assets/boards/92.jpg', full: false},
        {source: '../assets/boards/93.jpg', full: false},
        {source: '../assets/boards/94.jpg', full: false},
        {source: '../assets/boards/95.jpg', full: false},
        {source: '../assets/boards/96.jpg', full: false},
        {source: '../assets/boards/97.jpg', full: false},
        {source: '../assets/boards/98.jpg', full: false},
        {source: '../assets/boards/99.jpg', full: false},
        {source: '../assets/boards/100.jpg', full: false},
        {source: '../assets/boards/101.jpg', full: false},
        {source: '../assets/boards/102.jpg', full: false},
        {source: '../assets/boards/103.jpg', full: false},
        {source: '../assets/boards/104.jpg', full: false},
        {source: '../assets/boards/105.jpg', full: false},
        {source: '../assets/boards/106.jpg', full: false},
        {source: '../assets/boards/107.jpg', full: false},
        {source: '../assets/boards/108.jpg', full: false},
        {source: '../assets/boards/109.jpg', full: false},
        {source: '../assets/boards/110.jpg', full: false},
        {source: '../assets/boards/111.jpg', full: false},
        {source: '../assets/boards/112.jpg', full: false},
        {source: '../assets/boards/113.jpg', full: false},
        {source: '../assets/boards/114.jpg', full: false},
        {source: '../assets/boards/115.jpg', full: false},
        {source: '../assets/boards/116.jpg', full: false},
        {source: '../assets/boards/117.jpg', full: false},
        {source: '../assets/boards/118.jpg', full: false},
        {source: '../assets/boards/119.jpg', full: false},
        {source: '../assets/boards/120.jpg', full: false},
        {source: '../assets/boards/121.jpg', full: false},
        {source: '../assets/boards/122.jpg', full: false},
        {source: '../assets/boards/123.jpg', full: false},
        {source: '../assets/boards/124.jpg', full: false},
        {source: '../assets/boards/125.jpg', full: false},
        {source: '../assets/boards/126.jpg', full: false},
        {source: '../assets/boards/127.jpg', full: false},
        {source: '../assets/boards/128.jpg', full: false},
        {source: '../assets/boards/129.jpg', full: false},
        {source: '../assets/boards/130.jpg', full: false},
        {source: '../assets/boards/131.jpg', full: false},
        {source: '../assets/boards/132.jpg', full: false},
        {source: '../assets/boards/133.jpg', full: false},
        {source: '../assets/boards/134.jpg', full: false},
        {source: '../assets/boards/135.jpg', full: false},
        {source: '../assets/boards/136.jpg', full: false},
        {source: '../assets/boards/137.jpg', full: false},
        {source: '../assets/boards/138.jpg', full: false},
        {source: '../assets/boards/139.jpg', full: false},
        {source: '../assets/boards/140.jpg', full: false},
        {source: '../assets/boards/141.jpg', full: false},
        {source: '../assets/boards/142.jpg', full: false},
        {source: '../assets/boards/143.jpg', full: false},
        {source: '../assets/boards/144.jpg', full: false},
        {source: '../assets/boards/145.jpg', full: false},
        {source: '../assets/boards/146.jpg', full: false},
        {source: '../assets/boards/147.jpg', full: false},
        {source: '../assets/boards/148.jpg', full: false},
        {source: '../assets/boards/149.jpg', full: false},
        {source: '../assets/boards/150.jpg', full: false},
        {source: '../assets/boards/151.jpg', full: false},
        {source: '../assets/boards/152.jpg', full: false},
        {source: '../assets/boards/153.jpg', full: false},
        {source: '../assets/boards/154.jpg', full: false},
        {source: '../assets/boards/155.jpg', full: false},
        {source: '../assets/boards/156.jpg', full: false},
        {source: '../assets/boards/157.jpg', full: false},
        {source: '../assets/boards/158.jpg', full: false},
        {source: '../assets/boards/159.jpg', full: false},
        {source: '../assets/boards/160.jpg', full: false},
        {source: '../assets/boards/161.jpg', full: false},
        {source: '../assets/boards/162.jpg', full: false},
        {source: '../assets/boards/163.jpg', full: false},
        {source: '../assets/boards/164.jpg', full: false},
        {source: '../assets/boards/165.jpg', full: false},
        {source: '../assets/boards/166.jpg', full: false},
        {source: '../assets/boards/167.jpg', full: false},
        {source: '../assets/boards/168.jpg', full: false},
        {source: '../assets/boards/169.jpg', full: false}]
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
