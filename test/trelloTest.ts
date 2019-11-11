import test from 'ava'
import {  newBoard,   Board, newList, newCard } from '../src/';
import { getConfig } from '../src/config';

const config = getConfig().trello

test('newBoard', async t => {
  const name = 'test' + Date.now()
  const result = await newBoard({ name }, config)
  t.deepEqual(result.name, name)
})
test('newList and newCard', async t => {
  const boardName = 'test_' + Date.now()
  let result = await newBoard({ name: boardName }, config)
  t.deepEqual(result.name, boardName)
  const listName = 'test_' + Date.now()
  result = await newList({ name: listName, idBoard: result.id }, config)
  t.deepEqual(result.name, listName)
  const cardName = 'test_' + Date.now()
  result = await newCard({ name: cardName, idList: result.id }, config)
  t.deepEqual(result.name, cardName)
})
// test('getBoard', async t => {
//   const result = await getBoard('560bf4298b3dda300c18d09c', config)
//   t.deepEqual(Array.isArray(result), false)
//   t.deepEqual(typeof result, 'object')
// })
// test.skip('listBoards', async t => {
//   const name = 'test' + Date.now()
//   const a = await listBoards(config) as Board[]
//   console.log(a);
//   t.deepEqual(a.filter(a => a.name === name), [])
//   // const result = await newBoard({name},config)
//   //  t.deepEqual(result.name, name)
//   //  console.log(result);
// })