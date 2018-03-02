import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  isPlaying: true,
  musicData: [],
  curTime: 0,
  duration: 0,
  audioDom: null,
  curMusicUrl: null,
  musicDetail: null,
  curIndex: 0
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
