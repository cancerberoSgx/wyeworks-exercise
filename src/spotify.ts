import { Config } from './types'
var Spotify = require('node-spotify-api')

export async function searchAlbum(albumName: string, artistName: string, config: Config['spotify']) {
  var spotify = new Spotify(config);
  const data = await spotify.search({ type: 'album', query: albumName })
  const albums = (data.albums.items as any[])
    .filter(album => album.artists.find((artist: any) => artist.name.toLowerCase().includes(artistName.toLowerCase())))
    .filter(album => album.images.length)
  return albums.length ? albums[0] : undefined
}

export async function searchAlbumCover(albumName: string, artistName: string, config: Config['spotify']): Promise<string | undefined> {
  const album = await searchAlbum(albumName, artistName, config)
  if (album && album.images && album.images.length) {
    const small = album.images.find((i: any) => i.width === 64)
    return small ? small.url : album.images[0].url
  }
}
