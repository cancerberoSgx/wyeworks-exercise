import test from 'ava'
import { getConfig, searchAlbum } from '../src';
import { writeFileSync } from 'fs';

const config = getConfig().spotify

test('searchAlbum', async t => {
  const album = await searchAlbum('Desire', 'Bob Dylan', config)
  t.deepEqual(album.artists.filter((a: any) => a.name.toLowerCase() === 'bob dylan').map((a: any) => a.name), ['Bob Dylan'])
  writeFileSync('tmp2.txt', JSON.stringify(album, null, 2))
})