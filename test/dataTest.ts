import test from 'ava'
import { parse, parseAndGroup } from '../src/data'

test('parse', async t => {
  const data = parse('test/assets/discography.txt')
  t.deepEqual(data.length, 47)
})

test('parseAndGroup', async t => {
  const grouped = parseAndGroup('test/assets/discography.txt')
  t.deepEqual(Object.keys(grouped).sort(), ['1960', '1970', '1980', '1990', '2000', '2010'])
  t.deepEqual(grouped[1990], [
    { year: 1990, name: 'Under the Red Sky' },
    { year: 1992, name: 'Good as I Been to You' },
    { year: 1993, name: 'The 30th Anniversary Concert Celebration' },
    { year: 1993, name: 'World Gone Wrong' },
    { year: 1995, name: 'MTV Unplugged' },
    { year: 1997, name: 'Time Out of Mind' }
  ])
  // console.log(grouped);

})