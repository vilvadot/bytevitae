export const prettifyNumber = (number) => {
  const value = number.toString()
  if (value.length >= 4) {
    const starsString = value.split('')
    starsString.splice(starsString.length - 3, 0, '.').join('')
    return starsString
  }
  return value
}
