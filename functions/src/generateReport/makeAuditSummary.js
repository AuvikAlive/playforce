import fetch from 'fetch-base64'
import { compose } from 'ramda'
import { verticalMargin, headerFontSize } from './constants'
import { insertSiteName, insertSiteAddress, formatSiteAddress } from './utils/'

export const makeAuditSummary = async (auditSummary, author, site) => {
  const { signature, name, title } = author
  const siteAddress = formatSiteAddress(site.address)
  const insertPlaceholders = compose(
    insertSiteName(site.name || ''),
    insertSiteAddress(siteAddress || '')
  )

  let signatureImage

  try {
    signatureImage = await fetch.remote(signature)
  } catch (error) {
    signatureImage = null
  }

  return [
    {
      text: 'AUDIT SUMMARY',
      font: 'Oswald',
      fontSize: headerFontSize,
      marginBottom: verticalMargin,
    },
    {
      text: insertPlaceholders(auditSummary),
      marginBottom: verticalMargin * 3,
    },
    signatureImage
      ? {
          image: signatureImage,
          width: 65,
          marginBottom: verticalMargin,
        }
      : null,
    {
      text: name,
      bold: true,
    },
    {
      text: title,
    },
    {
      text: 'Play Force Pty Ltd',
      pageBreak: 'after',
    },
  ]
}
