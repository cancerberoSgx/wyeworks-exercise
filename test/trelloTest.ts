import test from 'ava'
import { newBoard, newList, newCard, getConfig } from '../src/';

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
