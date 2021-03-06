import test from 'ava'
import { getConfig, MainOptions, main } from '../src'
import { readFileSync } from 'fs'

test('main', async t => {
  const artistName = 'Bob Dylan'
  const options: MainOptions = {
    ...getConfig(),
    input: readFileSync('test/assets/discography.txt').toString(),
    artistName
  }
  const result = await main(options)
  // writeFileSync('tmp1.txt', JSON.stringify(result, null, 2))
  t.deepEqual(result.board.name, artistName)
  t.deepEqual(result.lists.length, 6)
})