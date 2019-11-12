import { Config, ParseAndGroupOptions, MainOptions } from './types';
import { parseAndGroup } from './data';
import { getConfig } from './config';
import { newBoard, newList, newCard, addCardAttachment } from './trello';
import { serial } from './util';
import { searchAlbum, searchAlbumCover } from './spotify';

const defaultOptions = {
  ...getConfig(),
  artistName: `board_${Date.now()}`
}

export async function main(options: MainOptions) {
  options = { ...defaultOptions, ...options }
  const grouped = parseAndGroup(options)
  const board = await newBoard({ name: options.artistName }, options.trello)
  const lists = await serial(Object.keys(grouped).sort().map(lapse => async () => {
    const list = await newList({ idBoard: board.id, name: lapse }, options.trello)
    const cards = await serial(grouped[parseInt(lapse)].map(album => async () => {
       const card = await newCard({ idList: list.id, name: album.name }, options.trello)
       const cover = await searchAlbumCover(album.name, options.artistName, options.spotify)
       if(cover){
        await addCardAttachment(card.id, cover, options.trello)
       }
       return card 
    }))
    return {list, cards}
  }))
  return {board, lists}
}