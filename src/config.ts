import { existsSync, readFileSync } from 'fs';
import { Config } from './types';

export function getConfig(path='config.json'): Config{
  if(!existsSync(path)){
    throw new Error('Expected file '+path+' to exist')
  }
  return JSON.parse(readFileSync(path).toString())
}