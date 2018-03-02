
import {
  SET_MUSIC_LIST,
  SET_CUR_MUSIC_DETAIL,
  SET_CUR_MUSIC_URL
} from './mutation-types.js'
import api from '../api'
export default {
  async getMusicList ({
    commit,
    state
  }) {
    let musicList = JSON.parse(sessionStorage.getItem('musicData'))
    if (musicList && musicList.length > 0) {
      commit(SET_MUSIC_LIST, musicList)
    }
  },
  getMusicById ({commit, state}, id) {
    let pro1 = api.getMusicDetailResource(id).then(res => {
      if (res && res.data && res.data.songs && res.data.songs.length > 0) {
        commit(SET_CUR_MUSIC_DETAIL, res.data.songs[0])
        return res.data.songs[0]
      }
    }).catch((error) => { // 错误处理
      console.log(error)
    })
    let pro2 = api.getMusicUrlResource(id).then(res => {
      commit(SET_CUR_MUSIC_URL, res.data.data[0].url)
      return res.data.data[0].url
    })
    return Promise.all([pro1, pro2])
  }
}
