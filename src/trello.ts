// use cross-fetch so by only fixing the urls browser could easily by supported.

import { Config } from '.'
import { fetchAndRead } from './util';
import { Board, List, Card } from './types';
import { getConfig } from './config';

const trelloConfig: Config['trello'] = getConfig().trello

export async function newBoard(board: Board, config = trelloConfig) {
  const url = `https://api.trello.com/1/boards?name=${encodeURIComponent(board.name)}&key=${config.key}&token=${config.token}`
  return await fetchAndRead(url, 'post')
}

export async function newCard(card: Card, config = trelloConfig) {
  const url = `https://api.trello.com/1/cards?name=${encodeURIComponent(card.name)}&idList=${card.idList}&keepFromSource=all&key=${config.key}&token=${config.token}`
  return await fetchAndRead(url, 'post')
}

export async function newList(list: List, config = trelloConfig) {
  const url = `https://api.trello.com/1/lists?name=${encodeURIComponent(list.name)}&idBoard=${list.idBoard}&key=${config.key}&token=${config.token}`
  return await fetchAndRead(url, 'post')
}

// export async function getBoard(boardId: string, config = trelloConfig) {
//   const url = `https://api.trello.com/1/boards/${boardId}?key=${config.key}&token=${config.token}`
//   return await fetchAndRead(url)
// }
// export async function listBoards(config = trelloConfig) {
//   const url = `https://api.trello.com/1/boards?key=${config.key}&token=${config.token}`
//   return await fetchAndRead(url)
// }
// export async function deleteBoard(boardId: string, config = trelloConfig) {
//   const url = `https://api.trello.com/1/boards/${boardId}?key=${config.key}&token=${config.token}`
//   return await fetchAndRead(url, 'delete')
// }

// export async function getList(listId: string, config = trelloConfig) {
//   const url = `https://api.trello.com/1/lists/${listId}?key=${config.key}&token=${config.token}`
//   return await fetchAndRead(url)
// }
// export async function deleteList(listId: string, config = trelloConfig) {
//   const url = `https://api.trello.com/1/lists/${listId}?key=${config.key}&token=${config.token}`
//   return await fetchAndRead(url, 'delete')
// }

// // https://api.trello.com/1/cards?idList=idList&keepFromSource=all&key=yourApiKey&token=yourApiToken