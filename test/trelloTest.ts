import test from 'ava'
import { getBoard } from '../src/trello';
import { getConfig } from '../src/config';

test('getBoard', async t => {
  const result = await getBoard('560bf4298b3dda300c18d09c', getConfig().trello)
  t.deepEqual(Array.isArray(result), false)
  t.deepEqual(typeof result, 'object')
})
