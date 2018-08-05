export const replacePlaceholders = (
  str,
  name = '<<site>>',
  address = '<<address>>'
) => {
  str = str.replace('<<site>>', name)
  str = str.replace('<<address>>', address)

  return str
}
