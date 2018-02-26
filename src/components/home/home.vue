<template>
  <div>
    <div class="head">
      <img src="../../images/common/logo.png" class="logo"/>
       <span class="logo-txt">React Music Player</span>
    </div>
    <play class=""></play>
  </div>
</template>

<script>
import play from '@/components/common/play'
export default {
  data () {
    return {
    }
  },
  components: {
    play
  },

  computed: {
  },
  methods: {
    // 点击图标刷新页面
  }
}

</script>

<style lang="scss" scoped>
  .head{
    padding-top:10px;
    .logo{
      width:40px;
      height:40px;
      vertical-align:middle;
    }
    .logo-txt{
      margin-left:20px;
      font-size:20px;
      text-indent: 20px;
      vertical-align:text-top;
    }
  }
</style>
