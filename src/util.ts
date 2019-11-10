let util;
/**
 * Useful for filtering out undefined values without casting. like `array.filter(notUndefined)`.
 */
export function notUndefined<T>(n: T): n is NotUndefined<T> {
  return n !== undefined && n !== null;
}
export type NotUndefined<T> = Exclude<Exclude<T, undefined>, null>;
