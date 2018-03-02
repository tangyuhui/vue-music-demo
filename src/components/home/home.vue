<template>
  <div>
   <head-top></head-top>
    <play v-if="musicDetail"></play>
    <div class="tips" v-else> <router-link :to="{ name: 'musicList'}" >当前播放列表为空，查看更多音乐...</router-link></div>
  </div>
</template>

<script>
import headTop from '@/components/common/head'
import play from '@/components/play/play'
import {mapState} from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: {
    play,
    headTop
  },

  computed: {
    ...mapState(['musicDetail'])
  },
  methods: {
    // 点击图标刷新页面
  }
}

</script>

<style lang="scss" scoped>
 .tips{
   padding:10px 0;
   background:#eee;
  a{
    cursor:pointer;
    text-decoration:underline;
  }
 }

</style>
