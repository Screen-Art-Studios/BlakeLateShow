<template>
  <div class="Gamain">
    <h2>Gallery</h2>
    <button class="journeyButton button" v-on:click="modal='jn'">The Journey</button>
    <button class="boardsButton button" v-on:click="modal='bd'">Blake's Boards</button>
    <div class="journeyView modal" v-if="modal==='jn'">
      <div v-on:click="journey.full = !journey.full" v-for="journey in journeys" v-bind:key="journey.source">
        <img v-bind:class="{'journeyGallery': !journey.full, 'boardFull': journey.full}" v-bind:src="journey.source"/>
        <div class="backgroundDiv" v-if="journey.full"></div>
      </div>
    </div>
    <div class="boardsModal modal" v-if="modal==='bd'">
      <div v-on:click="board.full = !board.full" v-for="board in boards" v-bind:key="board.source">
        <img v-bind:class="{'boardGallery': !board.full, 'boardFull': board.full}" v-bind:src="board.source"/>
        <div class="backgroundDiv" v-if="board.full"></div>
      </div>
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
      boards: [{source: '../assets/boards/1.png', full: false},
        {source: '../assets/boards/2.png', full: false},
        {source: '../assets/boards/3.png', full: false},
        {source: '../assets/boards/4.png', full: false},
        {source: '../assets/boards/5.png', full: false},
        {source: '../assets/boards/6.png', full: false},
        {source: '../assets/boards/7.png', full: false},
        {source: '../assets/boards/8.png', full: false},
        {source: '../assets/boards/9.png', full: false},
        {source: '../assets/boards/10.png', full: false},
        {source: '../assets/boards/11.png', full: false},
        {source: '../assets/boards/12.png', full: false},
        {source: '../assets/boards/13.png', full: false},
        {source: '../assets/boards/14.png', full: false},
        {source: '../assets/boards/15.png', full: false},
        {source: '../assets/boards/16.png', full: false},
        {source: '../assets/boards/17.png', full: false},
        {source: '../assets/boards/18.png', full: false},
        {source: '../assets/boards/19.png', full: false},
        {source: '../assets/boards/20.png', full: false},
        {source: '../assets/boards/21.png', full: false},
        {source: '../assets/boards/22.png', full: false},
        {source: '../assets/boards/23.png', full: false},
        {source: '../assets/boards/24.png', full: false},
        {source: '../assets/boards/25.png', full: false},
        {source: '../assets/boards/26.png', full: false},
        {source: '../assets/boards/27.png', full: false},
        {source: '../assets/boards/28.png', full: false},
        {source: '../assets/boards/29.png', full: false},
        {source: '../assets/boards/30.png', full: false},
        {source: '../assets/boards/31.png', full: false},
        {source: '../assets/boards/32.png', full: false},
        {source: '../assets/boards/33.png', full: false},
        {source: '../assets/boards/34.png', full: false},
        {source: '../assets/boards/35.png', full: false},
        {source: '../assets/boards/36.png', full: false},
        {source: '../assets/boards/37.png', full: false},
        {source: '../assets/boards/38.png', full: false},
        {source: '../assets/boards/39.png', full: false},
        {source: '../assets/boards/40.png', full: false},
        {source: '../assets/boards/41.png', full: false},
        {source: '../assets/boards/42.png', full: false},
        {source: '../assets/boards/43.png', full: false},
        {source: '../assets/boards/44.png', full: false},
        {source: '../assets/boards/45.png', full: false},
        {source: '../assets/boards/46.png', full: false},
        {source: '../assets/boards/47.png', full: false},
        {source: '../assets/boards/48.png', full: false},
        {source: '../assets/boards/49.png', full: false},
        {source: '../assets/boards/50.png', full: false},
        {source: '../assets/boards/51.png', full: false},
        {source: '../assets/boards/52.png', full: false},
        {source: '../assets/boards/53.png', full: false},
        {source: '../assets/boards/54.png', full: false},
        {source: '../assets/boards/55.png', full: false},
        {source: '../assets/boards/56.png', full: false},
        {source: '../assets/boards/57.png', full: false},
        {source: '../assets/boards/58.png', full: false},
        {source: '../assets/boards/59.png', full: false},
        {source: '../assets/boards/60.png', full: false},
        {source: '../assets/boards/61.png', full: false},
        {source: '../assets/boards/62.png', full: false},
        {source: '../assets/boards/63.png', full: false},
        {source: '../assets/boards/64.png', full: false},
        {source: '../assets/boards/65.png', full: false},
        {source: '../assets/boards/66.png', full: false},
        {source: '../assets/boards/67.png', full: false},
        {source: '../assets/boards/68.png', full: false},
        {source: '../assets/boards/69.png', full: false},
        {source: '../assets/boards/70.png', full: false},
        {source: '../assets/boards/71.png', full: false},
        {source: '../assets/boards/72.png', full: false},
        {source: '../assets/boards/73.png', full: false},
        {source: '../assets/boards/74.png', full: false},
        {source: '../assets/boards/75.png', full: false},
        {source: '../assets/boards/76.png', full: false},
        {source: '../assets/boards/77.png', full: false},
        {source: '../assets/boards/78.png', full: false},
        {source: '../assets/boards/79.png', full: false},
        {source: '../assets/boards/80.png', full: false},
        {source: '../assets/boards/81.png', full: false},
        {source: '../assets/boards/82.png', full: false},
        {source: '../assets/boards/83.png', full: false},
        {source: '../assets/boards/84.png', full: false},
        {source: '../assets/boards/85.png', full: false},
        {source: '../assets/boards/86.png', full: false},
        {source: '../assets/boards/87.png', full: false},
        {source: '../assets/boards/88.png', full: false},
        {source: '../assets/boards/89.png', full: false},
        {source: '../assets/boards/90.png', full: false},
        {source: '../assets/boards/91.png', full: false},
        {source: '../assets/boards/92.png', full: false},
        {source: '../assets/boards/93.png', full: false},
        {source: '../assets/boards/94.png', full: false},
        {source: '../assets/boards/95.png', full: false},
        {source: '../assets/boards/96.png', full: false},
        {source: '../assets/boards/97.png', full: false},
        {source: '../assets/boards/98.png', full: false},
        {source: '../assets/boards/99.png', full: false},
        {source: '../assets/boards/100.png', full: false},
        {source: '../assets/boards/101.png', full: false},
        {source: '../assets/boards/102.png', full: false},
        {source: '../assets/boards/103.png', full: false},
        {source: '../assets/boards/104.png', full: false},
        {source: '../assets/boards/105.png', full: false},
        {source: '../assets/boards/106.png', full: false},
        {source: '../assets/boards/107.png', full: false},
        {source: '../assets/boards/108.png', full: false},
        {source: '../assets/boards/109.png', full: false},
        {source: '../assets/boards/110.png', full: false},
        {source: '../assets/boards/111.png', full: false},
        {source: '../assets/boards/112.png', full: false},
        {source: '../assets/boards/113.png', full: false},
        {source: '../assets/boards/114.png', full: false},
        {source: '../assets/boards/115.png', full: false},
        {source: '../assets/boards/116.png', full: false},
        {source: '../assets/boards/117.png', full: false},
        {source: '../assets/boards/118.png', full: false},
        {source: '../assets/boards/119.png', full: false},
        {source: '../assets/boards/120.png', full: false},
        {source: '../assets/boards/121.png', full: false},
        {source: '../assets/boards/122.png', full: false},
        {source: '../assets/boards/123.png', full: false},
        {source: '../assets/boards/124.png', full: false},
        {source: '../assets/boards/125.png', full: false},
        {source: '../assets/boards/126.png', full: false},
        {source: '../assets/boards/127.png', full: false},
        {source: '../assets/boards/128.png', full: false},
        {source: '../assets/boards/129.png', full: false},
        {source: '../assets/boards/130.png', full: false},
        {source: '../assets/boards/131.png', full: false},
        {source: '../assets/boards/132.png', full: false},
        {source: '../assets/boards/133.png', full: false},
        {source: '../assets/boards/134.png', full: false},
        {source: '../assets/boards/135.png', full: false},
        {source: '../assets/boards/136.png', full: false},
        {source: '../assets/boards/137.png', full: false},
        {source: '../assets/boards/138.png', full: false},
        {source: '../assets/boards/139.png', full: false},
        {source: '../assets/boards/140.png', full: false},
        {source: '../assets/boards/141.png', full: false},
        {source: '../assets/boards/142.png', full: false},
        {source: '../assets/boards/143.png', full: false},
        {source: '../assets/boards/144.png', full: false},
        {source: '../assets/boards/145.png', full: false},
        {source: '../assets/boards/146.png', full: false},
        {source: '../assets/boards/147.png', full: false},
        {source: '../assets/boards/148.png', full: false},
        {source: '../assets/boards/149.png', full: false},
        {source: '../assets/boards/150.png', full: false},
        {source: '../assets/boards/151.png', full: false},
        {source: '../assets/boards/152.png', full: false},
        {source: '../assets/boards/153.png', full: false},
        {source: '../assets/boards/154.png', full: false},
        {source: '../assets/boards/155.png', full: false},
        {source: '../assets/boards/156.png', full: false},
        {source: '../assets/boards/157.png', full: false},
        {source: '../assets/boards/158.png', full: false},
        {source: '../assets/boards/159.png', full: false},
        {source: '../assets/boards/160.png', full: false},
        {source: '../assets/boards/161.png', full: false},
        {source: '../assets/boards/162.png', full: false},
        {source: '../assets/boards/163.png', full: false},
        {source: '../assets/boards/164.png', full: false},
        {source: '../assets/boards/165.png', full: false},
        {source: '../assets/boards/166.png', full: false},
        {source: '../assets/boards/167.png', full: false},
        {source: '../assets/boards/168.png', full: false},
        {source: '../assets/boards/169.png', full: false}]
    }
  }
}
</script>

<style scoped lang="less">
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
  width: 100%;
  height: auto;
}
.boardFull {
  width: auto;
  height: 40%;
  position: fixed;
  top: 20%;
  left: 10%;
  z-index: 3;
  background-color: #333;
  background-position: center;
  background-size: contain;
}
.backgroundDiv {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center;
  background-color: #333;
  background-size: contain;
  width: 100000px;
  height: 100000px;
}
.boardsModal {
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5%;
  grid-template-rows: repeat(86, 150px);
}

@media only screen and (min-width:700px) {
  .journeyView {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 450px) 200px;
    overflow-y: scroll;
    height: 2000px;
  }
  .boardFull {
    width: auto;
    height: 80%;
    position: fixed;
    top: 10%;
    left: 5%;
    z-index: 3;
    background-color: #333;
    background-position: center;
    background-size: contain;
  }
  .boardsModal {
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8%;
    grid-template-rows: repeat(86, 150px);
  }
  .journeyGallery {
    width: 80%;
    height: auto;
    margin-bottom: 6%;
  }
  .boardGallery {
    width: 80%;
    height: auto;
    margin-bottom: 6%;
  }
}
</style>
