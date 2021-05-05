export const capitalize = (string = ' ') => {
  if (!string) return ''
  const capitalLetter = string[0].toUpperCase()
  const restOfTheString = string.slice(1, string.length)
  return capitalLetter + restOfTheString
}
