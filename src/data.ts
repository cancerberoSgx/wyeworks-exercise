import { readFileSync } from 'fs';
import { notUndefined } from './util';

export interface Data {
  name: string
  year: number
}

export type Grouped = { [decade: number]: Data[] }

export function parse(path: string) {
  return readFileSync(path).toString().split('\n')
    .map(line => /([\d]+)\s+(.+)/.exec(line))
    .filter(notUndefined)
    .map(r => ({ year: parseInt(r[1]), name: r[2] }))
}

export function group(data: Data[], lapse=10) {
  const grouped: Grouped = {}
  data.forEach(data => {
    const decade = Math.trunc(data.year / lapse) * lapse
    grouped[decade] = grouped[decade] || []
    grouped[decade].push(data)
  })
  Object.values(grouped).forEach(values=>{
    values.sort((a, b)=>a.year===b.year ? a.name.toLowerCase().localeCompare(b.name.toLowerCase()) : a.year<b.year?-1:1)
  })
  return grouped
}

export function parseAndGroup(path: string, lapse=10) {
  return group(parse(path), lapse)
}