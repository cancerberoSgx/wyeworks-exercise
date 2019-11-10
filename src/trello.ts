import fetch from 'cross-fetch';
import {Config} from '.'

export interface Board {
  name:string
}

export async function newBoard(board: Board , config  : Config['trello']) {
  const url = `https://api.trello.com/1/boards?name=${board.name}&defaultLabels=true&defaultLists=true&keepFromSource=none&prefs_permissionLevel=private&prefs_voting=disabled&prefs_comments=members&prefs_invitations=members&prefs_selfJoin=true&prefs_cardCovers=true&prefs_background=blue&prefs_cardAging=regular&key=${config.key}&token=${config.token}`
  const response = await fetch(url, {
        method: 'post',
        body: '{}',
        headers: { 'Content-Type': 'application/json' },
    })
  return await response.json()
}

export async function getBoard(board: string , config  : Config['trello']) {
  const url = `https://api.trello.com/1/boards/${board}?fields=name,url&key=${config.key}&token=${config.token}`
  const response = await fetch(url)
  return await response.json()
}
