import { verticalMargin, headerFontSize } from './globals'

export const makeReportNotes = ({ appliedStandards }) => {
  const standardItems = appliedStandards.map((standard, index, array) => {
    const split = standard.split(' ')
    const title = split[0]
    const code = split[1]

    const item = `${code} ${title}`

    return item
  })

  return [
    {
      text: 'REPORT NOTES',
      bold: true,
      fontSize: headerFontSize,
      marginBottom: verticalMargin * 2,
    },
    {
      text: 'The following notes apply to this inspection report.',
      marginBottom: verticalMargin,
    },
    {
      columnGap: 20,
      columns: [
        {
          width: 'auto',
          text: '1',
        },
        [
          {
            width: '*',
            text: 'Play Force Comprehensive Playground Inspection Service',
            bold: true,
            marginBottom: verticalMargin / 2,
          },
          {
            text:
              'A Play Force comprehensive playground inspection helps ensure that a playground meets the requirements of the relevant playground standards and that is has been installed correctly. Aspects of the Standards that are relevant to underground works, equipment materials and some other aspects that require load testing (structural integrity), dismantling or destructive testing are not assessed.',
            marginBottom: verticalMargin,
          },
          {
            text:
              'Impact attenuation testing to provide evidence of the impact absorption performance of the playground surfacing is only provided as an add-on service at an additional cost to the client.',
            marginBottom: verticalMargin,
          },
        ],
      ],
    },
    {
      columnGap: 20,
      columns: [
        {
          width: 'auto',
          text: '2',
        },
        [
          {
            width: '*',
            text: 'Applicable Standards & Compliance',
            bold: true,
            marginBottom: verticalMargin / 2,
          },
          {
            text: `The equipment in this report has been assessed, were applicable, in accordance with ${standardItems.join(
              ' ',
            )}`,
            marginBottom: verticalMargin,
          },
          {
            text:
              "Whilst compliance with standards is not mandatory in Australia, it is recommended. Compliance with Standards does not remove the operator's responsibility to ensure that equipment is safe and failure to comply does not necessarily mean that equipment is dangerous.",
            marginBottom: verticalMargin,
          },
        ],
      ],
    },
    {
      columnGap: 20,
      columns: [
        {
          width: 'auto',
          text: '3',
        },
        [
          {
            width: '*',
            text: 'Current State of Equipment',
            bold: true,
            marginBottom: verticalMargin / 2,
          },
          {
            text:
              'This report is based on the equipment as found at the time of inspection. Events following the inspection may lead to site conditions changing. Where subsequent major changes have been identified, it may be appropriate to inspect the site again.',
            marginBottom: verticalMargin,
          },
        ],
      ],
    },
    {
      columnGap: 20,
      columns: [
        {
          width: 'auto',
          text: '4',
        },
        [
          {
            width: '*',
            text: 'Room for Varying Interpretation within the Standards',
            bold: true,
            marginBottom: verticalMargin / 2,
          },
          {
            text:
              "Within the relevant Standards there is some room for varying interpretations. This may result in conflict of interpretation by different parties. The findings in this report are based on the author's interpretation. This can lead to an item meeting the standard in the opinion of one inspector and failing in the opinion of another. It is therefore advised that the playground operator use the Risk Assessments provided to determine if an items needs rectifying.",
            marginBottom: verticalMargin,
          },
        ],
      ],
    },
    {
      columnGap: 20,
      columns: [
        {
          width: 'auto',
          text: '5',
        },
        [
          {
            width: '*',
            text: 'Duty of Care',
            bold: true,
            marginBottom: verticalMargin / 2,
          },
          {
            text:
              'Play Force have a duty of care to report all issues that might affect safety regardless of whether they are the responsibility of the client or not.',
            marginBottom: verticalMargin,
          },
        ],
      ],
    },
    {
      columnGap: 20,
      columns: [
        {
          width: 'auto',
          text: '6',
        },
        [
          {
            width: '*',
            text: `${standardItems.join(' ')} Inspection Frequencies`,
            bold: true,
            marginBottom: verticalMargin / 2,
          },
          {
            columnGap: 0,
            columns: [
              {
                width: 50,
                text: '-',
                alignment: 'center',
              },
              {
                width: '*',
                text:
                  'Comprehensive post-installation inspection - Prior to opening the playground',
              },
            ],
          },
          {
            columnGap: 0,
            columns: [
              {
                width: 50,
                text: '-',
                alignment: 'center',
              },
              {
                width: '*',
                text:
                  'Routine inspection - Regularly, depending on site specific factors',
              },
            ],
          },
          {
            columnGap: 0,
            columns: [
              {
                width: 50,
                text: '-',
                alignment: 'center',
              },
              {
                width: '*',
                text:
                  'Operational inspection - Regularly on a monthly or quarterly basis',
              },
            ],
          },
          {
            columnGap: 0,
            columns: [
              {
                width: 50,
                text: '-',
                alignment: 'center',
              },
              {
                width: '*',
                text: 'Comprehensive annual inspection - Annually',
              },
            ],
          },
        ],
      ],
    },
    {
      text:
        'The copyright in this report is shared between Play Force Pty Ltd and the client requesting the report. The client is free to share the contents of this report, but it must be shared in full.',
      marginTop: verticalMargin * 3,
    },
  ]
}
