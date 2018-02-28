import {TOGGLE_MUSIC,
  GET_MUSIC_LIST,
  PLAY_MUSIC,
  SET_AUDIO_DOM,
  SET_MUSIC_CURTIME,
  SET_MUSIC_DURATION
} from './mutation-types.js'

export default {
  [TOGGLE_MUSIC] (state, index) {
    if (index < 1) {
      state.curMusic = state.musicData[state.musicData.length - 1]
    } else if (index > state.musicData.length) {
      state.curMusic = state.musicData[0]
    } else {
      state.curMusic = state.musicData.find(function (music) {
        return music.id === parseInt(index)
      })
    }
  },
  [GET_MUSIC_LIST] (state, musicData) {
    state.musicData = musicData
    state.curMusic = state.musicData[0]
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
  }
}
