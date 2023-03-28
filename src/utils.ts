export function deepSortObject<T>(obj: T): T {
  if (typeof obj !== 'object') return obj
  if (obj === null) return obj
  if (Array.isArray(obj)) return obj.map(deepSortObject) as T
  return Object.keys(obj).sort().reduce((result, key) => {
    result[key] = deepSortObject(obj[key])
    return result
  }, {}) as T
}

export function stableStringify<T>(obj: T) {
  return JSON.stringify(deepSortObject(obj))
}