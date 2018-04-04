import { format } from 'date-fns/esm'
import {
  verticalMargin,
  logoOffset,
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
  const { name, street, suburb, state, postcode, country } = location
  const address = `${street} , ${suburb} ${state} ${postcode}, ${country}`

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
    },
  )

  return [
    {
      marginTop: -logoOffset + pageMarginVertical,
      // columnGap: 200,
      columns: [
        {
          image: logo,
          width: 208,
          // marginTop: pageMarginHorizontal,
          // marginLeft: pageMarginHorizontal,
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
        // {
        //   columnGap: 0,
        //   columns: [
        //     [
        //       [
        //         {
        //           text: 'POSTAL ADDRESS',
        //           bold: true,
        //         },
        //         {
        //           text: '34-36 Calcium Court',
        //         },
        //         {
        //           text: 'Crestmead QLD 4132',
        //         },
        //         {
        //           text: [
        //             {
        //               text: 'ABN: ',
        //               bold: true,
        //             },
        //             {
        //               text: '69 106 457 176',
        //             },
        //           ],
        //         },
        //       ],
        //     ],
        //     [
        //       [
        //         {
        //           text: [
        //             {
        //               text: 'Phone: ',
        //               bold: true,
        //             },
        //             {
        //               text: '(07) 3803 1788',
        //             },
        //           ],
        //         },
        //         {
        //           text: [
        //             {
        //               text: 'Mobile: ',
        //               bold: true,
        //             },
        //             {
        //               text: '0411 796 281',
        //             },
        //           ],
        //         },
        //         {
        //           text: [
        //             {
        //               text: 'Email: ',
        //               bold: true,
        //             },
        //             {
        //               text: 'admin@play-force.com.au',
        //             },
        //           ],
        //         },
        //         {
        //           text: [
        //             {
        //               text: 'Web: ',
        //               bold: true,
        //             },
        //             {
        //               text: 'www.play-force.com.au',
        //             },
        //           ],
        //         },
        //       ],
        //     ],
        //   ],
        // },
      ],
    },
    {
      text: 'COMPREHENSIVE PLAYGROUND INSPECTION REPORT',
      font: 'Oswald',
      fontSize: headerFontSize * 1.5,
      // bold: true,
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
        columns: [
          { text: 'LOCATION', bold: true, width: 'auto' },
          [
            { text: name, width: '*', marginLeft: 90 },
            { text: address, marginLeft: 90 },
          ],
        ],
        marginTop: verticalMargin * 5,
      },
      {
        columns: [
          { text: 'CLIENT', bold: true, width: 'auto' },
          { text: client, width: '*', marginLeft: 106 },
        ],
        marginTop: verticalMargin * 2,
      },
      {
        columns: [
          { text: 'INSPECTION DATE', bold: true, width: 'auto' },
          {
            text: format(inspectionDate, 'DD MMMM YYYY'),
            width: '*',
            marginLeft: 45,
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
        marginTop: 150 - standardItems.length * headerFontSize / 1.5,
      },
      standardItems,
    ],
  ]
}
