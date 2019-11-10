import test from 'ava'
import { parse } from '../src/data'

test('parse', async t=>{
  const data = parse('test/assets/discography.txt')
  t.deepEqual(data.length, 10)
})