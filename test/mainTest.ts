import test from 'ava'
import {  newBoard,   Board, newList, newCard, MainOptions } from '../src';
import { getConfig } from '../src/config';
import { readFileSync, writeFileSync } from 'fs';
import { main } from '../src/main';

const config = getConfig().trello

test('main', async t => {
  const boardName='Bob Dylan'
   const options: MainOptions = {
     ...getConfig(), 
     input: readFileSync('test/assets/discography.txt').toString(), 
     boardName
    }
  const result = await main(options)
  // console.log(result)
  writeFileSync('tmp.txt', JSON.stringify(result))
  t.deepEqual(result.board.name, boardName)
  t.deepEqual(result.lists.length, 6)
  t.true(!!result.lists.find((l:any)=>l.name==='2000'))

})