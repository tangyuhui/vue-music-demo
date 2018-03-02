<template>
  <div id="app">
    <router-view />
    <!-- 隐藏的audio标签 -->
    <audio v-bind:src="curMusicUrl?curMusicUrl:''" v-bind:autoplay="isPlaying" ref="audio" @timeupdate="updateTime"></audio>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
export default {
  name: 'App',
  created () {
    this.getMusicList()
  },
  mounted () {
    this.audio = this.$refs.audio
    this.SET_AUDIO_DOM(this.audio)
    this.audio.addEventListener('loadedmetadata', () => {
      this.SET_MUSIC_CURTIME(parseInt(this.audio.currentTime))
      this.SET_MUSIC_DURATION(parseInt(this.audio.duration))
    })
    this.audio.addEventListener('ended', () => {
      /* 播放下一首歌 */
      this.TOGGLE_MUSIC(parseInt(this.curMusic.id + 1))
    })
  },
  methods: {
    ...mapActions(['getMusicList']),
    ...mapMutations(['TOGGLE_MUSIC', 'SET_AUDIO_DOM', 'SET_MUSIC_CURTIME', 'SET_MUSIC_DURATION', 'NEXT_MUSIC']),
    updateTime () {
      this.SET_MUSIC_CURTIME(this.audio.currentTime)
    }
  },
  computed: {
    ...mapState(['isPlaying', 'musicData', 'curTime', 'duration', 'curMusicUrl']),
    ...mapGetters(['curMusic'])
  }
}
</script>

<style>
  @import './style/common.scss';
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
