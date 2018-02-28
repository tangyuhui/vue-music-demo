import {MUSIC_LIST} from '@/data/data'
import {
  GET_MUSIC_LIST
} from './mutation-types.js'

export default {

  async getMusicList ({
    commit,
    state
  }) {
    commit(GET_MUSIC_LIST, MUSIC_LIST)
  }

}
