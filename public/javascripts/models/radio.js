// Copyright (c) 2018 Nathaniel Wroblewski
//
// I am making my contributions/submissions to this project solely in my
// personal capacity and am not conveying any rights to any intellectual
// property of any third parties.

const PLAYLIST = [
  {
    title: 'Lethal infection',
    artist: 'Powerdong',
    src: 'https://powerdongassets.blob.core.windows.net/songs/Lethal%20infection.mp3'
  },
  {
    title: 'The Friar who brewed himself to death',
    artist: 'Powerdong',
    src: 'https://powerdongassets.blob.core.windows.net/songs/demosong.m4a'
  }
]

class Radio {
  constructor () {
    this.index = 0
  }

  next () {
    this.index = (this.index + 1) % PLAYLIST.length
  }

  get track () {
    return PLAYLIST[this.index]
  }
}

export default Radio
