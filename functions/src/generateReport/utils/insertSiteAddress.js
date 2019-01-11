import { curry } from 'ramda'

export const insertSiteAddress = curry((siteAdress, str) =>
  str.replace('<<Insert Address>>', siteAdress)
)
