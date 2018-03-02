import {SET_MUSIC_LIST,
  PLAY_MUSIC,
  SET_AUDIO_DOM,
  SET_MUSIC_CURTIME,
  SET_MUSIC_DURATION,
  SET_CUR_MUSIC_DETAIL,
  SET_CUR_MUSIC_URL,
  ADD_MUSIC,
  NEXT_MUSIC,
  LAST_MUSIC
} from './mutation-types.js'

export default {
  [LAST_MUSIC] (state) {
    if (state.musicData && state.musicData.length > 0) {
      let curIndex = state.curIndex
      if (curIndex === 0) {
        state.curIndex = state.musicData.length - 1
      } else {
        state.curIndex = curIndex - 1
      }
      state.curMusicUrl = state.musicData[state.curIndex].curMusicUrl
      state.musicDetail = state.musicData[state.curIndex].musicDetail
    }
  },
  [NEXT_MUSIC] (state) {
    if (state.musicData && state.musicData.length > 0) {
      state.curIndex = (state.curIndex + 1) % state.musicData.length
      state.curMusicUrl = state.musicData[state.curIndex].curMusicUrl
      state.musicDetail = state.musicData[state.curIndex].musicDetail
    }
  },
  [SET_MUSIC_LIST] (state, musicData) {
    if (musicData && musicData.length > 0) {
      state.musicData = musicData
      state.musicDetail = state.musicData[state.musicData.length - 1].musicDetail
      state.curMusicUrl = state.musicData[state.musicData.length - 1].curMusicUrl
      state.curIndex = state.musicData.length - 1
    }
  },
  [PLAY_MUSIC] (state, isPlaying) {
    state.isPlaying = isPlaying
  },
  [SET_AUDIO_DOM] (state, dom) {
    state.audioDom = dom
  },
  [SET_MUSIC_CURTIME] (state, curTime) {
    state.curTime = curTime
  },
  [SET_MUSIC_DURATION] (state, duration) {
    state.duration = duration
  },
  [SET_CUR_MUSIC_DETAIL] (state, curMusicDetail) {
    state.musicDetail = curMusicDetail
  },
  [SET_CUR_MUSIC_URL] (state, curMusicUrl) {
    state.curMusicUrl = curMusicUrl
  },
  [ADD_MUSIC] (state, music) {
    let index = state.musicData.findIndex(function (value) {
      return value.musicDetail.id === music.musicDetail.id
    })
    if (index === -1) {
      state.musicData.push(music)
      sessionStorage.setItem('musicData', JSON.stringify(state.musicData))
      state.curIndex = state.musicData.length - 1
    } else {
      state.curIndex = index
    }
  }
}
