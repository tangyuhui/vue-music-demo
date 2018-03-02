export default {
  getArtist (state) {
    if (state && state.musicDetail && state.musicDetail.ar) {
      let artist = ''
      if (state.musicDetail.ar.length > 0) {
        if (state.musicDetail.ar.length === 1) {
          artist = state.musicDetail.ar[0].name
        } else {
          state.musicDetail.ar.forEach(function (data) {
            artist += data.name + ','
          })
          if (artist.length > 0) {
            artist = artist.substring(0, artist.length - 1)
          }
        }
      }
      return artist
    } else {
      return null
    }
  }
}
