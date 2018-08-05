import { replaceLongDate } from './replaceLongDate'
import { replaceClientName } from './replaceClientName'
import { replaceSiteName } from './replaceSiteName'

export const replaceCertificateTextPlaceholders = (
  str,
  clientName,
  siteName
) => {
  str = replaceLongDate(str)
  str = replaceClientName(str, clientName)
  str = replaceSiteName(str, siteName)

  return str
}
