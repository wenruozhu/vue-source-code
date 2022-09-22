/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
/* 
制作一个地图并返回一个函数来检查一个键是否在该地图中。
  重要提示：此函数的所有调用都必须以
 \/\*#\_\_PURE\_\_\*\/
   因此，如有必要，该汇总可以对它们进行摇树。
 */

export function makeMap(
  str: string,
  expectsLowerCase?: boolean
): (key: string) => boolean {
  // Object.create(null)是最纯净的对象，不会有任何的东西，比如constructor,hasOwnProperty等等
  const map: Record<string, boolean> = Object.create(null)
  const list: Array<string> = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val]
}
