import { format } from 'date-fns/esm'
import {
  verticalMargin,
  logoOffset,
  fontSize,
  headerFontSize,
  pageMarginVertical,
} from './globals'
import { logo } from './logo'
import { trimImage } from '../../../utilities/trimImage'

export const makeCertificate = async ({
  inspectionNumber,
  cover,
  auditSummary,
  conditionRatings,
}) => {
  const {
    location,
    client,
    inspectionDate,
    displayName,
    appliedStandards,
  } = cover
  const { signature, title, company } = auditSummary
  const pageFontSize = fontSize + 2
  const firstColumnWidth = 150
  const { name, street, suburb, state, postcode, country } = location
  const address = `${street} , ${suburb} ${state} ${postcode}, ${country}`
  const trimmedSignature = await trimImage(signature)

  const standardItems = appliedStandards.map(
    ({ code, title }, index, array) => {
      const item = {
        text: `${code}`,
        width: '*',
      }

      return item
    },
  )

  const conditionRatingItems = conditionRatings.map(
    ({ equipment, manufacturer }) => ({
      text: `${equipment} - ${manufacturer}`,
      width: '*',
    }),
  )

  return [
    {
      marginTop: -logoOffset + pageMarginVertical,
      columns: [
        {
          image: logo,
          width: 208,
        },
        {
          layout: 'noBorders',
          marginLeft: 110,
          table: {
            body: [
              [
                { text: 'POSTAL ADDRESS', bold: true },
                {
                  text: [
                    {
                      text: 'Phone: ',
                      bold: true,
                    },
                    {
                      text: '(07) 3803 1788',
                    },
                  ],
                },
              ],
              [
                '34-36 Calcium Court',
                {
                  text: [
                    {
                      text: 'Mobile: ',
                      bold: true,
                    },
                    {
                      text: '0411 796 281',
                    },
                  ],
                },
              ],
              [
                'Crestmead QLD 4132',
                {
                  text: [
                    {
                      text: 'Email: ',
                      bold: true,
                    },
                    {
                      text: 'admin@play-force.com.au',
                    },
                  ],
                },
              ],
              [
                {
                  text: [
                    {
                      text: 'ABN: ',
                      bold: true,
                    },
                    {
                      text: '69 106 457 176',
                    },
                  ],
                },
                {
                  text: [
                    {
                      text: 'Web: ',
                      bold: true,
                    },
                    {
                      text: 'www.play-force.com.au',
                    },
                  ],
                },
              ],
            ],
          },
        },
      ],
    },
    {
      text: 'CERTIFICATE OF COMPLIANCE',
      font: 'Oswald',
      fontSize: headerFontSize * 1.5,
      marginTop: verticalMargin * 4,
      marginBottom: verticalMargin * 2,
      alignment: 'center',
    },
    {
      text: 'Australian Playground Standards',
      fontSize: pageFontSize,
      marginBottom: verticalMargin * 4,
      alignment: 'center',
    },
    {
      text: `Certificate No.: ${inspectionNumber}`,
      fontSize: pageFontSize,
      marginBottom: verticalMargin * 3,
      alignment: 'center',
    },
    [
      {
        fontSize: pageFontSize,
        marginBottom: verticalMargin * 3,
        columns: [
          {
            text: 'Site Location',
            bold: true,
            italics: true,
            width: firstColumnWidth,
          },
          { text: ':', width: firstColumnWidth / 2 },
          [{ text: name, width: '*' }, { text: address }],
        ],
      },
      {
        fontSize: pageFontSize,
        marginBottom: verticalMargin * 3,
        columns: [
          {
            text: 'CLIENT',
            bold: true,
            italics: true,
            width: firstColumnWidth,
          },
          { text: ':', width: firstColumnWidth / 2 },
          { text: client, width: '*' },
        ],
      },
      {
        fontSize: pageFontSize,
        marginBottom: verticalMargin * 3,
        columns: [
          {
            text: 'Items(s)',
            bold: true,
            italics: true,
            width: firstColumnWidth,
          },
          { text: ':', width: firstColumnWidth / 2 },
          conditionRatingItems,
        ],
      },
      {
        fontSize: pageFontSize,
        marginBottom: verticalMargin * 3,
        columns: [
          {
            text: 'Standard(s) applied',
            bold: true,
            italics: true,
            width: firstColumnWidth,
          },
          { text: ':', width: firstColumnWidth / 2 },
          standardItems,
        ],
      },
      {
        fontSize: pageFontSize,
        marginBottom: verticalMargin * 3,
        columns: [
          {
            text: 'Inspection Report',
            bold: true,
            italics: true,
            width: firstColumnWidth,
          },
          { text: ':', width: firstColumnWidth / 2 },
          { text: inspectionNumber, width: '*' },
        ],
      },
      {
        fontSize: pageFontSize,
        marginBottom: verticalMargin * 3,
        text: `Based on our on-site assessment conducted on the ${format(
          inspectionDate,
          'DD MMMM YYYY',
        )}, Play Force Pty Ltd hereby certify that the items listed above were installed to meet the requirements of the applied standard(s). The certificate holder is authorized to use the certificate in connection with the attached report.`,
      },
      {
        image: trimmedSignature,
        width: 65,
        marginBottom: verticalMargin,
      },
      {
        fontSize: pageFontSize,
        text: displayName,
        bold: true,
      },
      {
        fontSize: pageFontSize,
        text: title,
      },
      {
        fontSize: pageFontSize,
        text: company,
        pageBreak: 'after',
      },
    ],
  ]
}
