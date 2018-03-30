import { verticalMargin, headerFontSize, subHeaderFontSize } from './globals'

export const makeAreasAssessed = () => [
  {
    text: 'AREAS ASSESSED FOR COMPLIANCE',
    font: 'Oswald',
    // bold: true,
    fontSize: headerFontSize,
    marginBottom: verticalMargin * 2,
  },
  {
    text: 'Non-compliances have been detailed in the preceding pages, if any.',
    marginBottom: verticalMargin,
  },
  {
    text: [
      {
        text: 'NOTE: ',
        bold: true,
      },
      'While some items may be identified as non-compliant, a low level of risk may not require any action to be undertaken. Other items may be generally compliant but still require attention. Any issues have been addressed in the previous pages.',
    ],
    marginBottom: verticalMargin,
  },
  {
    text: 'SURROUNDS',
    font: 'Oswald',
    // bold: true,
    fontSize: subHeaderFontSize,
    marginBottom: verticalMargin / 2,
  },
  {
    marginBottom: verticalMargin,
    table: {
      widths: ['*'],
      body: [
        [
          'Are pathways around playground free of trip hazards (from cracks, etc.)?',
        ],
        ['Is access from car park appropriate for users of all abilities?'],
        [
          'Is the area free of dead overhanging branches that may potentially fall onto the playground?',
        ],
        [
          'Are ancillary items (tables, seats, shade structures, fences, gates, etc.) in good repair?',
        ],
      ],
    },
  },
  {
    text: 'SURFACING',
    font: 'Oswald',
    // bold: true,
    fontSize: subHeaderFontSize,
    marginBottom: verticalMargin / 2,
  },
  {
    marginBottom: verticalMargin,
    table: {
      widths: ['*'],
      body: [
        ['Is the depth of loose-fill surfacing adequate?'],
        ['Is the surface of unitary surfaces in good repair?'],
        ['Is the surface free of any trip hazards?'],
        [
          'Is the surface and surrounding area free of objects that may cause injury (e.g. broken glass)?',
        ],
      ],
    },
  },
  {
    text: 'EQUIPMENT (general)',
    font: 'Oswald',
    // bold: true,
    fontSize: subHeaderFontSize,
    marginBottom: verticalMargin / 2,
  },
  {
    marginBottom: verticalMargin,
    table: {
      widths: ['*'],
      body: [
        ['Are the footings adequately covered?'],
        ['Are the foundations stable and free of movement?'],
        [
          'Is the equipment free of protrusions or sharp edges that may be hazardous?',
        ],
        ['Are all components present and secure?'],
        [
          'Is the equipment in good repair (i.e. free from excessive rust, cracked welds, splintering timber, etc.)?',
        ],
        [
          'Are all items of equipment within the maximum free height of fall (<3.0m; upper body <2.2m; SECS <1.8m)',
        ],
      ],
    },
  },
  {
    text: 'PROTECTION AGAINST FALLING',
    font: 'Oswald',
    // bold: true,
    fontSize: subHeaderFontSize,
    marginBottom: verticalMargin / 2,
  },
  {
    marginBottom: verticalMargin,
    table: {
      widths: ['*'],
      body: [
        ['Is the impact area adequate for the free height of fall?'],
        ['Is the falling space free of obstacles that could cause injury?'],
        [
          'Are barriers, guardrails and handrails appropriate and at the correct heights?',
        ],
        [
          'Are openings in the barriers or guardrails less than 800mm in width?',
        ],
      ],
    },
  },
  {
    text: 'PROTECTION AGAINST ENTRAPMENT',
    font: 'Oswald',
    // bold: true,
    fontSize: subHeaderFontSize,
    marginBottom: verticalMargin / 2,
  },
  {
    marginBottom: verticalMargin,
    table: {
      widths: ['*'],
      body: [
        ['Is the equipment free of head and neck entrapments?'],
        ['Is the equipment free of finger entrapments?'],
        ['Is the equipment free of clothing entrapments?'],
        ['Is the equipment free of whole body entrapments?'],
        ['Is the equipment free of foot or leg entrapments?'],
      ],
    },
  },
  {
    text: 'MOVING PARTS',
    font: 'Oswald',
    // bold: true,
    fontSize: subHeaderFontSize,
    marginBottom: verticalMargin / 2,
  },
  {
    pageBreak: 'after',
    table: {
      widths: ['*'],
      body: [
        ['Is the free space adequate for forced movement items?'],
        ['Is the equipment free of crush or shear points?'],
        ['Are the chains and connectors free of excessive wear (<40%)'],
        ["Are moving and 'sealed for life' parts moving freely?"],
      ],
    },
  },
]
