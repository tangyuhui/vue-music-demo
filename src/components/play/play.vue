<template>
  <div>
    <div>
      <div class="coverBox"
           :style="{backgroundImage: 'url('+curMusic.cover+')'}"></div>
      <div class="coverBg"></div>
    </div>
    <div class="player-page">
      <h1 class="caption"><router-link to="musicList">Home</router-link></h1>
      <div class="mt20 row">
        <div class="controll-wrapper"><h2 class="music-title">{{curMusic.title}}</h2>
          <h3 class="music-artist mt10">{{curMusic.artist}}</h3>
          <div class="row mt20">
            <div class="volume-container"><i class="icon-volume rt" style="top: 5px; left: -5px;"></i>
              <div class="volume-wrapper">
                <div class="components-progress" >
                  <div class="progress" :style="volumeProgressStyle" ></div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10px; line-height: 10px;">
            <div class="components-progress" @click="dragProgress" ref="musicProgress">
              <div class="progress" :style="musicProgressStyle"></div>
            </div>
            <div class="left-time -col-auto">{{formatCurTime}}</div>
          </div>
          <div class="mt35 row">
            <div><i class="icon prev" @click="prevClickEvent" ></i><i class="icon ml20" :class="[isPlaying? 'pause':'play']" @click="playClickEvent"></i><i class="icon next ml20" @click="nextClickEvent"></i></div>
            <div class="-col-auto"><i class="icon repeat-cycle"></i></div>
          </div>
        </div>
        <div class="-col-auto cover"><img class="pause"  :src="curMusic.cover"
                                          :alt="curMusic.title"></div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      volumeProgressStyle: {width: '80%'}
    }
  },
  mounted () {

  },
  computed: {
    ...mapState(['isPlaying', 'curMusic', 'musicData', 'curTime', 'duration', 'audioDom']),
    formatCurTime: function () {
      return this.transformTime(this.curTime)
    },
    musicProgressStyle: function () {
      var width = '0%'
      if (this.duration) {
        width = (this.curTime / this.duration) * 100 + '%'
      }
      return {
        width: width
      }
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_MUSIC', 'PLAY_MUSIC', 'SET_MUSIC_CURTIME', 'SET_MUSIC_DURATION']),
    // 点击图标刷新页面
    playClickEvent: function (event) {
      this.PLAY_MUSIC(!this.isPlaying)
      if (this.audioDom.paused) {
        this.audioDom.play()
      } else {
        this.audioDom.pause()
      }
    },
    prevClickEvent: function () {
      this.TOGGLE_MUSIC(parseInt(this.curMusic.id - 1))
    },
    nextClickEvent: function () {
      /* 播放下一首歌 */
      this.TOGGLE_MUSIC(parseInt(this.curMusic.id + 1))
    },
    dragProgress (event) {
      var proBlock = this.$refs.musicProgress && this.$refs.musicProgress.getBoundingClientRect()
      var start = proBlock.left
      var end = event.clientX
      var width = proBlock.width
      var length = parseFloat(end) - parseFloat(start)
      var percent = parseFloat(length / width)
      this.audioDom.currentTime = this.audioDom.duration * percent
      this.SET_MUSIC_CURTIME(this.audioDom.currentTime)
    },
    transformTime (seconds) {
      let m, s
      m = Math.floor(seconds / 60)
      m = m.toString().length === 1 ? ('0' + m) : m
      s = Math.floor(seconds - 60 * m)
      s = s.toString().length === 1 ? ('0' + s) : s
      return m + ':' + s
    }
  }
}

</script>

<style lang="scss" scoped>
  .icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url(../../images/icons.png) no-repeat;
    background-size: 32px auto;
  }

  .icon.prev {
    background-position: 0 0;
  }

  .icon.next {
    background-position: 0 -32px;
  }

  .icon.pause {
    background-position: 0 -64px;
  }

  .icon.play {
    background-position: 0 -96px;
  }

  .icon.repeat-once {
    background-position: 0 -128px;
  }

  .icon.repeat-cycle {
    background-position: 0 -160px;
  }

  .icon.repeat-random {
    background-position: 0 -192px;
  }
  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .player-page {
    width: 700px;
    margin: auto;
    margin-top: 120px;
  }
  .player-page .caption {
    font-size: 16px;
    color: #31c27c;
  }
  .player-page .cover {
    width: 180px;
    height: 180px;
    margin-left: 20px;
  }
  .player-page .cover img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    box-shadow: 0 0 14px #000000;
    animation: rotate 25s linear infinite;
  }
  .player-page img.pause {
    animation-play-state: paused;
  }
  .player-page .volume-container {
    position: relative;
    left: 20px;
    top: -3px;
  }
  .player-page .volume-container .volume-wrapper {
    opacity: 0;
    transition: opacity .5s linear;
  }
  .player-page .volume-container:hover .volume-wrapper {
    opacity: 1;
  }
  .player-page .music-title {
    font-size: 25px;
    font-weight: 400;
    color: rgba(225, 225, 225, 0.8);
    height: 36px;
    line-height: 36px;
  }
  .player-page .music-artist {
    font-size: 15px;
    font-weight: 400;
    color: rgba(225, 225, 225, 0.8);
  }
  .player-page .left-time {
    font-size: 14px;
    color: #FFF;
    font-weight: 400;
    width: 60px;
    margin-top: 10px;
  }
  .player-page .icon {
    cursor: pointer;
  }
  .player-page .ml20 {
    margin-left: 20px;
  }
  .player-page .mt35 {
    margin-top: 35px;
  }
  .player-page .volume-wrapper {
    width: 60px;
    display: inline-block;
  }.components-listitem {
     height: 36px;
     line-height: 36px;
     border-bottom: 1px solid #ddd;
     text-indent: 10px;
     cursor: pointer;
   }
  .components-listitem .delete {
    cursor: pointer;
    height: 30px;
    width: 30px;
    top: 3px;
    position: relative;
    transform: rotate(45deg);
    margin-right: 15px;
  }
  .components-listitem .delete::before,
  .components-listitem .delete::after {
    content: '';
    display: block;
    background: #666;
    position: absolute;
  }
  .components-listitem .delete::before {
    width: 100%;
    height: 1px;
    top: 14px;
    left: 0;
  }
  .components-listitem .delete::after {
    height: 100%;
    width: 1px;
    left: 15px;
    top: 0;
  }
  .components-listitem.focus {
    color: #2f9842;
  }
  .components-listitem:hover {
    background: #eee;
  }

  .icon-volume {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(../../images/icons.png) no-repeat;
    background-size: 16px auto;
    background-position: 0 -112px;
  }
  .coverBox {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    filter: blur(65px);
    -webkit-filter: blur(65px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    opacity: .6;
    overflow: hidden;
    z-index: -999;
  }
  .coverBg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -998;
    background-color: rgba(0, 0, 0, 0.35);
  }
  .components-header {
    box-sizing: border-box;
    padding: 15px 25px;
  }
  .components-header .caption {
    font-size: 20px;
    text-indent: 20px;
  }
  .components-progress {
    width: 100%;
    height: 3px;
    background: #ddd;
    cursor: pointer;
  }
  .components-progress:hover {
    box-shadow: 0 1px 13px #272727;
    transition: all .3s;
  }
  .components-progress .progress {
    height: 3px;
    background: #2f9842;
    margin-top: 40px;
    transition: all .1s;
    border-radius: 2px;
  }
</style>
