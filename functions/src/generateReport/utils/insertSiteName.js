import { curry } from 'ramda'

export const insertSiteName = curry((siteName, str) => {
  return str.replace('<<Insert Site>>', siteName)
})
