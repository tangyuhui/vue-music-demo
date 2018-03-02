<template>
  <div>
    <head-top></head-top>
    <ul id="example-1">
      <li  v-for="(data, index) in topList"  :key="index">
        <div class="music-item row">
          <div class="music-item-index -col-auto">{{index+1}}</div>
          <div class="-col8"><img :src="data.al.picUrl" width="55px" height="55px" style="vertical-align: middle"> <span><a @click="addToMusicList(data.id)">{{data.name}}</a></span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import headTop from '@/components/common/head'
import api from '../../api/index'
import {mapActions, mapMutations} from 'vuex'
export default {
  data () {
    return {
      topList: null
    }
  },
  created () {
    this.getTopPlaylistResource()
  },
  components: {
    headTop
  },

  computed: {
  },
  methods: {
    ...mapMutations(['ADD_MUSIC']),
    ...mapActions(['getMusicById']),
    getTopPlaylistResource () {
      api.getTopListResource('0').then((response) => {
        this.topList = response.data.playlist.tracks
      })
    },
    addToMusicList (id) {
      let self = this
      this.getMusicById(id).then(function (results) {
        console.log(results)
        if (results[1] == null) {
          alert('音乐资源不存在')
        } else {
          let musicMessage = {
            curMusicUrl: results[1],
            musicDetail: results[0]
          }
          self.ADD_MUSIC(musicMessage)
          self.$router.push({ name: 'home' })
        }
      })
    }
  }
}

</script>

<style lang="scss" scoped>
  @import '../../style/common.scss';
.music-item{
  border:1px solid #eee;
  padding:8px;
  .music-item-index{
    width:35px;
  }
}
a{
  cursor:pointer;
}
</style>
