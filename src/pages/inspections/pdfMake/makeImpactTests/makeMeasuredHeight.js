import { verticalMargin } from '../constants'

export const makeMeasuredHeight = () => [
  {
    text: 'Measured fall height (hm)',
    bold: true,
  },
  {
    marginBottom: verticalMargin,
    text:
      'The height from which a single drop is conducted (being the hf with a minimum additional 10% allowance) to determine the HIC, gmax and HIC duration of the surface under test at a particular location. At the measured fall height the HIC and the gmax will be less than or equal to 1000, less than or equal to 200g, and greater than 3 ms respectively, for a satisfactory result.',
  },
]
