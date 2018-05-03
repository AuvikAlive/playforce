import { format } from 'date-fns/esm'
import {
  verticalMargin,
  logoOffset,
  fontSize,
  headerFontSize,
  pageMarginHorizontal,
  pageMarginVertical,
  pageWidth,
} from './globals'
import { logo } from './logo'

export const makeCover = ({
  image,
  location,
  client,
  inspectionDate,
  displayName,
  appliedStandards,
}) => {
  const middleSectionFontSize = fontSize + 2
  const middleSectionFirstColumnWidth = 150
  const { name, street, suburb, state, postcode, country } = location
  const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`

  const standardItems = appliedStandards.map(
    ({ code, title }, index, array) => {
      const item = {
        text: `${code}: ${title}`,
        alignment: 'center',
      }

      if (index + 1 === array.length) {
        item.pageBreak = 'after'
      }

      return item
    }
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
      text: `${name.toUpperCase()} - COMPREHENSIVE PLAYGROUND INSPECTION REPORT`,
      font: 'Oswald',
      fontSize: headerFontSize * 1.5,
      marginTop: verticalMargin * 4,
      marginBottom: verticalMargin * 4,
      alignment: 'center',
    },
    {
      image,
      width: pageWidth,
      marginLeft: -pageMarginHorizontal,
      height: 432,
    },
    [
      {
        fontSize: middleSectionFontSize,
        columns: [
          {
            text: 'LOCATION',
            bold: true,
            width: middleSectionFirstColumnWidth,
          },
          [{ text: name, width: '*' }, { text: address }],
        ],
        marginTop: verticalMargin * 5,
      },
      {
        fontSize: middleSectionFontSize,
        columns: [
          { text: 'CLIENT', bold: true, width: middleSectionFirstColumnWidth },
          { text: client, width: '*' },
        ],
        marginTop: verticalMargin * 2,
      },
      {
        fontSize: middleSectionFontSize,
        columns: [
          {
            text: 'INSPECTION DATE',
            bold: true,
            width: middleSectionFirstColumnWidth,
          },
          {
            text: format(inspectionDate, 'DD MMMM YYYY'),
            width: '*',
          },
          { text: 'INSPECTED BY', bold: true, width: 'auto' },
          {
            text: displayName,
            width: '*',
            marginLeft: 45,
          },
        ],
        marginTop: verticalMargin * 2,
      },
      {
        text:
          'This playground has been assessed against the requirements of the following Standards:',
        bold: true,
        alignment: 'center',
        marginTop: 110 - standardItems.length * headerFontSize / 1.5,
      },
      standardItems,
    ],
  ]
}
