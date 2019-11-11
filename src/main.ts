import { Config, ParseAndGroupOptions, MainOptions } from './types';
import { parseAndGroup } from './data';
import { getConfig } from './config';
import { newBoard, newList, newCard } from './trello';
import { serial } from './util';

const defaultOptions = {
  ...getConfig(),
  boardName: `board_${Date.now()}`
}

export async function main(options: MainOptions) {
  options = { ...defaultOptions, ...options }
  const grouped = parseAndGroup(options)
  const board = await newBoard({ name: options.boardName }, options.trello)
  const lists = await serial(Object.keys(grouped).sort().map(lapse => async () => {
    const list = await newList({ idBoard: board.id, name: lapse }, options.trello)
    const cards = await serial(grouped[parseInt(lapse)].map(song => async () => 
       newCard({ idList: list.id, name: song.name }, options.trello)
    ))
    return {list, cards}
  }))
  return {board, lists}
}