import {  Options, Grouped, Data } from "./types";
import { notUndefined } from './util';


export function parseAndGroup(options: Options) {
  return group(parse(options.input), options.lapse)
}

export function parse(content: string) {
  return content.split('\n')
    .map(line => /([\d]+)\s+(.+)/.exec(line))
    .filter(notUndefined)
    .map(r => ({ year: parseInt(r[1]), name: r[2] }))
}

// export function parseFile(path: string) {
//   return parse(readFileSync(path).toString())
// }

export function group(data: Data[], lapse = 10) {
  const grouped: Grouped = {}
  data.forEach(data => {
    const decade = Math.trunc(data.year / lapse) * lapse
    grouped[decade] = grouped[decade] || []
    grouped[decade].push(data)
  })
  Object.values(grouped).forEach(values => {
    values.sort((a, b) => a.year === b.year ? a.name.toLowerCase().localeCompare(b.name.toLowerCase()) : a.year < b.year ? -1 : 1)
  })
  return grouped
}
