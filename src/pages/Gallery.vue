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
      journeys: [{source: '../statics/journey/1.jpg', full: false},
        {source: '../statics/journey/2.jpg', full: false},
        {source: '../statics/journey/3.jpg', full: false},
        {source: '../statics/journey/4.jpg', full: false},
        {source: '../statics/journey/5.jpg', full: false},
        {source: '../statics/journey/6.jpg', full: false},
        {source: '../statics/journey/7.jpg', full: false},
        {source: '../statics/journey/8.jpg', full: false},
        {source: '../statics/journey/9.jpg', full: false},
        {source: '../statics/journey/10.jpg', full: false},
        {source: '../statics/journey/11.jpg', full: false},
        {source: '../statics/journey/12.jpg', full: false},
        {source: '../statics/journey/13.jpg', full: false}],
      boards: [{source: '../statics/boards/board_1.png', full: false},
        {source: '../statics/boards/board_2.png', full: false},
        {source: '../statics/boards/board_3.png', full: false},
        {source: '../statics/boards/board_4.png', full: false},
        {source: '../statics/boards/board_5.png', full: false},
        {source: '../statics/boards/board_6.png', full: false},
        {source: '../statics/boards/board_7.png', full: false},
        {source: '../statics/boards/board_8.png', full: false},
        {source: '../statics/boards/board_9.png', full: false},
        {source: '../statics/boards/board_10.png', full: false},
        {source: '../statics/boards/board_11.png', full: false},
        {source: '../statics/boards/board_12.png', full: false},
        {source: '../statics/boards/board_13.png', full: false},
        {source: '../statics/boards/board_14.png', full: false},
        {source: '../statics/boards/board_15.png', full: false},
        {source: '../statics/boards/board_16.png', full: false},
        {source: '../statics/boards/board_17.png', full: false},
        {source: '../statics/boards/board_18.png', full: false},
        {source: '../statics/boards/board_19.png', full: false},
        {source: '../statics/boards/board_20.png', full: false},
        {source: '../statics/boards/board_21.png', full: false},
        {source: '../statics/boards/board_22.png', full: false},
        {source: '../statics/boards/board_23.png', full: false},
        {source: '../statics/boards/board_24.png', full: false},
        {source: '../statics/boards/board_25.png', full: false},
        {source: '../statics/boards/board_26.png', full: false},
        {source: '../statics/boards/board_27.png', full: false},
        {source: '../statics/boards/board_28.png', full: false},
        {source: '../statics/boards/board_29.png', full: false},
        {source: '../statics/boards/board_30.png', full: false},
        {source: '../statics/boards/board_31.png', full: false},
        {source: '../statics/boards/board_32.png', full: false},
        {source: '../statics/boards/board_33.png', full: false},
        {source: '../statics/boards/board_34.png', full: false},
        {source: '../statics/boards/board_35.png', full: false},
        {source: '../statics/boards/board_36.png', full: false},
        {source: '../statics/boards/board_37.png', full: false},
        {source: '../statics/boards/board_38.png', full: false},
        {source: '../statics/boards/board_39.png', full: false},
        {source: '../statics/boards/board_40.png', full: false},
        {source: '../statics/boards/board_41.png', full: false},
        {source: '../statics/boards/board_42.png', full: false},
        {source: '../statics/boards/board_43.png', full: false},
        {source: '../statics/boards/board_44.png', full: false},
        {source: '../statics/boards/board_45.png', full: false},
        {source: '../statics/boards/board_46.png', full: false},
        {source: '../statics/boards/board_47.png', full: false},
        {source: '../statics/boards/board_48.png', full: false},
        {source: '../statics/boards/board_49.png', full: false},
        {source: '../statics/boards/board_50.png', full: false},
        {source: '../statics/boards/board_51.png', full: false},
        {source: '../statics/boards/board_52.png', full: false},
        {source: '../statics/boards/board_53.png', full: false},
        {source: '../statics/boards/board_54.png', full: false},
        {source: '../statics/boards/board_55.png', full: false},
        {source: '../statics/boards/board_56.png', full: false},
        {source: '../statics/boards/board_57.png', full: false},
        {source: '../statics/boards/board_58.png', full: false},
        {source: '../statics/boards/board_59.png', full: false},
        {source: '../statics/boards/board_60.png', full: false},
        {source: '../statics/boards/board_61.png', full: false},
        {source: '../statics/boards/board_62.png', full: false},
        {source: '../statics/boards/board_63.png', full: false},
        {source: '../statics/boards/board_64.png', full: false},
        {source: '../statics/boards/board_65.png', full: false},
        {source: '../statics/boards/board_66.png', full: false},
        {source: '../statics/boards/board_67.png', full: false},
        {source: '../statics/boards/board_68.png', full: false},
        {source: '../statics/boards/board_69.png', full: false},
        {source: '../statics/boards/board_70.png', full: false},
        {source: '../statics/boards/board_71.png', full: false},
        {source: '../statics/boards/board_72.png', full: false},
        {source: '../statics/boards/board_73.png', full: false},
        {source: '../statics/boards/board_74.png', full: false},
        {source: '../statics/boards/board_75.png', full: false},
        {source: '../statics/boards/board_76.png', full: false},
        {source: '../statics/boards/board_77.png', full: false},
        {source: '../statics/boards/board_78.png', full: false},
        {source: '../statics/boards/board_79.png', full: false},
        {source: '../statics/boards/board_80.png', full: false},
        {source: '../statics/boards/board_81.png', full: false},
        {source: '../statics/boards/board_82.png', full: false},
        {source: '../statics/boards/board_83.png', full: false},
        {source: '../statics/boards/board_84.png', full: false},
        {source: '../statics/boards/board_85.png', full: false},
        {source: '../statics/boards/board_86.png', full: false},
        {source: '../statics/boards/board_87.png', full: false},
        {source: '../statics/boards/board_88.png', full: false},
        {source: '../statics/boards/board_89.png', full: false},
        {source: '../statics/boards/board_90.png', full: false},
        {source: '../statics/boards/board_91.png', full: false},
        {source: '../statics/boards/board_92.png', full: false},
        {source: '../statics/boards/board_93.png', full: false},
        {source: '../statics/boards/board_94.png', full: false},
        {source: '../statics/boards/board_95.png', full: false},
        {source: '../statics/boards/board_96.png', full: false},
        {source: '../statics/boards/board_97.png', full: false},
        {source: '../statics/boards/board_98.png', full: false},
        {source: '../statics/boards/board_99.png', full: false},
        {source: '../statics/boards/board_100.png', full: false},
        {source: '../statics/boards/board_101.png', full: false},
        {source: '../statics/boards/board_102.png', full: false},
        {source: '../statics/boards/board_103.png', full: false},
        {source: '../statics/boards/board_104.png', full: false},
        {source: '../statics/boards/board_105.png', full: false},
        {source: '../statics/boards/board_106.png', full: false},
        {source: '../statics/boards/board_107.png', full: false},
        {source: '../statics/boards/board_108.png', full: false},
        {source: '../statics/boards/board_109.png', full: false},
        {source: '../statics/boards/board_110.png', full: false},
        {source: '../statics/boards/board_111.png', full: false},
        {source: '../statics/boards/board_112.png', full: false},
        {source: '../statics/boards/board_113.png', full: false},
        {source: '../statics/boards/board_114.png', full: false},
        {source: '../statics/boards/board_115.png', full: false},
        {source: '../statics/boards/board_116.png', full: false},
        {source: '../statics/boards/board_117.png', full: false},
        {source: '../statics/boards/board_118.png', full: false},
        {source: '../statics/boards/board_119.png', full: false},
        {source: '../statics/boards/board_120.png', full: false},
        {source: '../statics/boards/board_121.png', full: false},
        {source: '../statics/boards/board_122.png', full: false},
        {source: '../statics/boards/board_123.png', full: false},
        {source: '../statics/boards/board_124.png', full: false},
        {source: '../statics/boards/board_125.png', full: false},
        {source: '../statics/boards/board_126.png', full: false},
        {source: '../statics/boards/board_127.png', full: false},
        {source: '../statics/boards/board_128.png', full: false},
        {source: '../statics/boards/board_129.png', full: false},
        {source: '../statics/boards/board_130.png', full: false},
        {source: '../statics/boards/board_131.png', full: false},
        {source: '../statics/boards/board_132.png', full: false},
        {source: '../statics/boards/board_133.png', full: false},
        {source: '../statics/boards/board_134.png', full: false},
        {source: '../statics/boards/board_135.png', full: false},
        {source: '../statics/boards/board_136.png', full: false},
        {source: '../statics/boards/board_137.png', full: false},
        {source: '../statics/boards/board_138.png', full: false},
        {source: '../statics/boards/board_139.png', full: false},
        {source: '../statics/boards/board_140.png', full: false},
        {source: '../statics/boards/board_141.png', full: false},
        {source: '../statics/boards/board_142.png', full: false},
        {source: '../statics/boards/board_143.png', full: false},
        {source: '../statics/boards/board_144.png', full: false},
        {source: '../statics/boards/board_145.png', full: false},
        {source: '../statics/boards/board_146.png', full: false},
        {source: '../statics/boards/board_147.png', full: false},
        {source: '../statics/boards/board_148.png', full: false},
        {source: '../statics/boards/board_149.png', full: false},
        {source: '../statics/boards/board_150.png', full: false},
        {source: '../statics/boards/board_151.png', full: false},
        {source: '../statics/boards/board_152.png', full: false},
        {source: '../statics/boards/board_153.png', full: false},
        {source: '../statics/boards/board_154.png', full: false},
        {source: '../statics/boards/board_155.png', full: false},
        {source: '../statics/boards/board_156.png', full: false},
        {source: '../statics/boards/board_157.png', full: false},
        {source: '../statics/boards/board_158.png', full: false},
        {source: '../statics/boards/board_159.png', full: false},
        {source: '../statics/boards/board_160.png', full: false},
        {source: '../statics/boards/board_161.png', full: false},
        {source: '../statics/boards/board_162.png', full: false},
        {source: '../statics/boards/board_163.png', full: false},
        {source: '../statics/boards/board_164.png', full: false},
        {source: '../statics/boards/board_165.png', full: false},
        {source: '../statics/boards/board_166.png', full: false},
        {source: '../statics/boards/board_167.png', full: false},
        {source: '../statics/boards/board_168.png', full: false},
        {source: '../statics/boards/board_169.png', full: false},
        {source: '../statics/boards/board_170.png', full: false},
        {source: '../statics/boards/board_171.png', full: false},
        {source: '../statics/boards/board_172.png', full: false},
        {source: '../statics/boards/board_173.png', full: false},
        {source: '../statics/boards/board_174.png', full: false},
        {source: '../statics/boards/board_175.png', full: false},
        {source: '../statics/boards/board_176.png', full: false},
        {source: '../statics/boards/board_177.png', full: false},
        {source: '../statics/boards/board_178.png', full: false},
        {source: '../statics/boards/board_179.png', full: false},
        {source: '../statics/boards/board_180.png', full: false},
        {source: '../statics/boards/board_181.png', full: false},
        {source: '../statics/boards/board_182.png', full: false},
        {source: '../statics/boards/board_183.png', full: false},
        {source: '../statics/boards/board_184.png', full: false},
        {source: '../statics/boards/board_185.png', full: false},
        {source: '../statics/boards/board_186.png', full: false},
        {source: '../statics/boards/board_187.png', full: false},
        {source: '../statics/boards/board_188.png', full: false},
        {source: '../statics/boards/board_189.png', full: false},
        {source: '../statics/boards/board_190.png', full: false},
        {source: '../statics/boards/board_191.png', full: false},
        {source: '../statics/boards/board_192.png', full: false},
        {source: '../statics/boards/board_193.png', full: false},
        {source: '../statics/boards/board_194.png', full: false},
        {source: '../statics/boards/board_195.png', full: false},
        {source: '../statics/boards/board_196.png', full: false},
        {source: '../statics/boards/board_197.png', full: false},
        {source: '../statics/boards/board_198.png', full: false},
        {source: '../statics/boards/board_199.png', full: false},
        {source: '../statics/boards/board_201.png', full: false},
        {source: '../statics/boards/board_202.png', full: false},
        {source: '../statics/boards/board_203.png', full: false},
        {source: '../statics/boards/board_204.png', full: false},
        {source: '../statics/boards/board_205.png', full: false},
        {source: '../statics/boards/board_206.png', full: false},
        {source: '../statics/boards/board_207.png', full: false},
        {source: '../statics/boards/board_208.png', full: false},
        {source: '../statics/boards/board_209.png', full: false},
        {source: '../statics/boards/board_210.png', full: false},
        {source: '../statics/boards/board_211.png', full: false},
        {source: '../statics/boards/board_212.png', full: false},
        {source: '../statics/boards/board_213.png', full: false},
        {source: '../statics/boards/board_214.png', full: false},
        {source: '../statics/boards/board_215.png', full: false},
        {source: '../statics/boards/board_216.png', full: false},
        {source: '../statics/boards/board_217.png', full: false},
        {source: '../statics/boards/board_218.png', full: false},
        {source: '../statics/boards/board_219.png', full: false},
        {source: '../statics/boards/board_220.png', full: false},
        {source: '../statics/boards/board_221.png', full: false},
        {source: '../statics/boards/board_222.png', full: false},
        {source: '../statics/boards/board_223.png', full: false},
        {source: '../statics/boards/board_224.png', full: false},
        {source: '../statics/boards/board_225.png', full: false},
        {source: '../statics/boards/board_226.png', full: false},
        {source: '../statics/boards/board_227.png', full: false},
        {source: '../statics/boards/board_228.png', full: false},
        {source: '../statics/boards/board_229.png', full: false},
        {source: '../statics/boards/board_230.png', full: false},
        {source: '../statics/boards/board_231.png', full: false},
        {source: '../statics/boards/board_232.png', full: false},
        {source: '../statics/boards/board_233.png', full: false},
        {source: '../statics/boards/board_234.png', full: false},
        {source: '../statics/boards/board_235.png', full: false},
        {source: '../statics/boards/board_236.png', full: false},
        {source: '../statics/boards/board_237.png', full: false},
        {source: '../statics/boards/board_238.png', full: false},
        {source: '../statics/boards/board_239.png', full: false},
        {source: '../statics/boards/board_240.png', full: false},
        {source: '../statics/boards/board_241.png', full: false},
        {source: '../statics/boards/board_242.png', full: false},
        {source: '../statics/boards/board_243.png', full: false},
        {source: '../statics/boards/board_244.png', full: false},
        {source: '../statics/boards/board_245.png', full: false},
        {source: '../statics/boards/board_246.png', full: false},
        {source: '../statics/boards/board_247.png', full: false},
        {source: '../statics/boards/board_248.png', full: false},
        {source: '../statics/boards/board_249.png', full: false},
        {source: '../statics/boards/board_250.png', full: false},
        {source: '../statics/boards/board_251.png', full: false},
        {source: '../statics/boards/board_252.png', full: false},
        {source: '../statics/boards/board_253.png', full: false},
        {source: '../statics/boards/board_254.png', full: false},
        {source: '../statics/boards/board_255.png', full: false},
        {source: '../statics/boards/board_256.png', full: false},
        {source: '../statics/boards/board_257.png', full: false},
        {source: '../statics/boards/board_258.png', full: false},
        {source: '../statics/boards/board_259.png', full: false},
        {source: '../statics/boards/board_260.png', full: false},
        {source: '../statics/boards/board_261.png', full: false},
        {source: '../statics/boards/board_262.png', full: false},
        {source: '../statics/boards/board_263.png', full: false},
        {source: '../statics/boards/board_264.png', full: false},
        {source: '../statics/boards/board_265.png', full: false},
        {source: '../statics/boards/board_266.png', full: false},
        {source: '../statics/boards/board_267.png', full: false},
        {source: '../statics/boards/board_268.png', full: false},
        {source: '../statics/boards/board_269.png', full: false},
        {source: '../statics/boards/board_270.png', full: false},
        {source: '../statics/boards/board_271.png', full: false},
        {source: '../statics/boards/board_272.png', full: false},
        {source: '../statics/boards/board_273.png', full: false},
        {source: '../statics/boards/board_274.png', full: false},
        {source: '../statics/boards/board_275.png', full: false},
        {source: '../statics/boards/board_276.png', full: false},
        {source: '../statics/boards/board_277.png', full: false},
        {source: '../statics/boards/board_278.png', full: false},
        {source: '../statics/boards/board_279.png', full: false},
        {source: '../statics/boards/board_280.png', full: false},
        {source: '../statics/boards/board_281.png', full: false},
        {source: '../statics/boards/board_282.png', full: false},
        {source: '../statics/boards/board_283.png', full: false},
        {source: '../statics/boards/board_284.png', full: false},
        {source: '../statics/boards/board_285.png', full: false},
        {source: '../statics/boards/board_286.png', full: false},
        {source: '../statics/boards/board_287.png', full: false},
        {source: '../statics/boards/board_288.png', full: false},
        {source: '../statics/boards/board_289.png', full: false},
        {source: '../statics/boards/board_290.png', full: false},
        {source: '../statics/boards/board_291.png', full: false},
        {source: '../statics/boards/board_292.png', full: false},
        {source: '../statics/boards/board_293.png', full: false},
        {source: '../statics/boards/board_294.png', full: false},
        {source: '../statics/boards/board_295.png', full: false},
        {source: '../statics/boards/board_296.png', full: false},
        {source: '../statics/boards/board_297.png', full: false},
        {source: '../statics/boards/board_298.png', full: false},
        {source: '../statics/boards/board_299.png', full: false},
        {source: '../statics/boards/board_300.png', full: false},
        {source: '../statics/boards/board_301.png', full: false},
        {source: '../statics/boards/board_302.png', full: false},
        {source: '../statics/boards/board_303.png', full: false},
        {source: '../statics/boards/board_304.png', full: false},
        {source: '../statics/boards/board_305.png', full: false},
        {source: '../statics/boards/board_306.png', full: false},
        {source: '../statics/boards/board_307.png', full: false},
        {source: '../statics/boards/board_308.png', full: false}]
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
 height: 1.2em;
 font-size: 1em;
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
  grid-template-rows: repeat(10, 200px);
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
  overflow: hidden;
  margin-bottom: 20px;
}
.boardGallery {
  width: 100%;
  height: auto;
  margin-bottom: 40px;
  overflow: hidden;
}
.boardFull {
  width: auto;
  height: 40%;
  position: fixed;
  top: 20%;
  left: 0;
  z-index: 3;
  background-color: #333;
  background-position: center;
  background-size: contain;
  overflow: hidden;
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
  overflow: hidden;
}
.boardsModal {
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5%;
  grid-template-rows: repeat(160, 150px);
}

@media only screen and (min-width:700px) {
  .journeyView {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(5, 450px) 200px;
    overflow-y: scroll;
  }
  .boardFull {
    width: auto;
    height: 80%;
    position: fixed;
    top: 10%;
    left: 15%;
    z-index: 3;
    background-color: #333;
    background-position: center;
    background-size: contain;
  }
  .boardsModal {
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8%;
    grid-template-rows: repeat(105, 160px);
  }
  .journeyGallery {
    width: 80%;
    height: auto;
    margin-bottom: 10%;
  }
  .boardGallery {
    width: 80%;
    height: auto;
    margin-bottom: 10%;
  }
  .button {
    height: 2.2em;
    font-size: 2em;
  }
}
</style>
