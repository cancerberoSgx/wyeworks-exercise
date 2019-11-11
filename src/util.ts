import fetch from 'cross-fetch';

/**
 * Useful for filtering out undefined values without casting. like `array.filter(notUndefined)`.
 */
export function notUndefined<T>(n: T): n is NotUndefined<T> {
  return n !== undefined && n !== null;
}

export type NotUndefined<T> = Exclude<Exclude<T, undefined>, null>;

export async function fetchAndRead(url: string, method = 'get', body = method === 'post' ? '{}' : undefined) {
  let response
  if (method === 'get') {
    response = await fetch(url)
  }
  else {
    response = await fetch(url, { method, body, headers: { 'Content-Type': 'application/json' } })
  }
  return await response.json()
}

/**
 * Execute given functions returning promises serially. Returns a promise that resolves when all finish with they results as array.
 */
export function serial<T = any>(p: (() => Promise<T>)[]): Promise<T[]> {
  return new Promise(resolve => {
    p.reduce((promiseChain: any, currentTask: () => Promise<T>) => {
      return promiseChain.then((chainResults: T[]) =>
        currentTask().then(currentResult => [...chainResults, currentResult])
      )
    }, Promise.resolve([])).then((arrayOfResults: T[]) => {
      resolve(arrayOfResults)
    })
  })
}