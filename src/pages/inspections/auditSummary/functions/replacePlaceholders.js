import { replaceSiteName } from '../../../../functions/'

export const replacePlaceholders = (str, name, address = '<<address>>') => {
  str = replaceSiteName(str, name)
  str = str.replace('<<address>>', address)

  return str
}
