import { existsSync, readFileSync } from 'fs';

export function getConfig(path='config.json'){
  if(!existsSync(path)){
    throw new Error('Expected file '+path+' to exist')
  }
  return JSON.parse(readFileSync(path).toString())
}