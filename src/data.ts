import { readFileSync } from 'fs';
import { notUndefined } from './util';

export function parse(path: string): Data[] {
  return readFileSync(path).toString().split('\n')
    .map(line => /([\d]+)\s+(.+)/.exec(line))
    .filter(notUndefined)
    .map(r => ({ year: parseInt(r[1]), name: r[2] }))
}

export interface Data {
  name: string
  year: number
}
export type Grouped = { [decade: number]: Data[] }

export function group(data: Data[]) {
  const grouped: Grouped = {}
  data.forEach(data => {
    const decade = Math.trunc(data.year / 10) * 10
    grouped[decade] = grouped[decade] || []
    grouped[decade].push(data)
  })
  return grouped
}
