<template>
  <div>
    <div>
      <div class="coverBox"
           style="background-image: url(&quot;http://p4.music.126.net/YFz7JOGYtid5MoecLO6Otw==/3412884134806295.jpg?param=550y550&quot;);"></div>
      <div class="coverBg"></div>
    </div>
    <div class="player-page">
      <h1 class="caption"><a href="#/list">我的私人音乐坊</a></h1>
      <div class="mt20 row">
        <div class="controll-wrapper"><h2 class="music-title">FXXK IT</h2>
          <h3 class="music-artist mt10">bigbang</h3>
          <div class="row mt20">
            <div class="volume-container"><i class="icon-volume rt" style="top: 5px; left: -5px;"></i>
              <div class="volume-wrapper">
                <div class="components-progress">
                  <div class="progress" style="width: 80%; background: red;"></div>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 10px; line-height: 10px;">
            <div class="components-progress">
              <div class="progress" style="width: 0.627137%;"></div>
            </div>
            <div class="left-time -col-auto"></div>
          </div>
          <div class="mt35 row">
            <div><i class="icon prev"></i><i class="icon ml20 play"></i><i class="icon next ml20"></i></div>
            <div class="-col-auto"><i class="icon repeat-cycle"></i></div>
          </div>
        </div>
        <div class="-col-auto cover"><img class="pause"
                                          src="http://p4.music.126.net/YFz7JOGYtid5MoecLO6Otw==/3412884134806295.jpg?param=130y130"
                                          alt="FXXK IT"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {}

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
    color: #999;
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
    width: 20%;
    height: 3px;
    background: #2f9842;
    margin-top: 40px;
    transition: all .1s;
    border-radius: 2px;
  }
</style>
