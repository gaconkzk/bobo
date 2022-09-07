export function removeUndefined<T extends Record<string, unknown>>(
  object: T
): T {
  const a = Object.keys(object)
  return Object.keys(object).reduce((newObject, key) => {
    if (typeof object[key] !== 'undefined') {
      return {
        ...newObject,
        [key]: object[key],
      }
    }
    return newObject
  }, {} as T)
}
