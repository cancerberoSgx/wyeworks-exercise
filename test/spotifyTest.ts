import test from 'ava'
import {  newBoard,   Board, newList, newCard } from '../src';
import { getConfig } from '../src/config';
import { searchAlbum } from '../src/spotify';
import { writeFileSync } from 'fs';

const config = getConfig().spotify

test('searchAlbum', async t => {
  const album = await searchAlbum('Desire', 'Bob Dylan', config)
  t.deepEqual(album.artists.filter((a:any)=>a.name.toLowerCase()==='bob dylan').map((a:any)=>a.name), ['Bob Dylan'])
  writeFileSync('tmp2.txt',JSON.stringify(album, null, 2))
})