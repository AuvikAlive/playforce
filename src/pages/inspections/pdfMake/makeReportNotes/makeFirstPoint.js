import { verticalMargin } from '../globals'

export const makeFirstPoint = () => ({
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
})
