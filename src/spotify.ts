import { Config } from './types'
var Spotify = require('node-spotify-api')

export async function searchAlbum(albumName: string, artistName: string, config: Config['spotify']) {
  var spotify = new Spotify(config);
  const data = await spotify.search({ type: 'album', query: albumName })
  const albums = (data.albums.items as any[])
    .filter(album => album.artists.find((artist:any) => artist.name.toLowerCase().includes(artistName.toLowerCase())))
    .filter(album => album.images.length)
  return albums.length ? albums[0] : undefined
}

// export async function test() {
//   var spotify = new Spotify({
//     id: 'c99ae28759d8432ebb2695896e454b7d',
//     secret: '2e925119b92a428d99180d3d937bd1aa'
//   });
//   spotify.search({ type: 'album', query: 'desire' }, function (err: any, data: any) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
//     console.log(data);
//     writeFileSync('tmp.txt', JSON.stringify(data, null, 2))
//   });
// }

// test()