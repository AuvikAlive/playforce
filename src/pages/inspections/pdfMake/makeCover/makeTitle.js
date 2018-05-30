import { headerFontSize, verticalMargin } from '../globals'

export const makeTitle = inspectionType => ({
  text: `${inspectionType.toUpperCase() ||
    'COMPREHENSIVE'} PLAYGROUND INSPECTION REPORT`,
  font: 'Oswald',
  fontSize: headerFontSize * 1.5,
  marginTop: verticalMargin * 4,
  marginBottom: verticalMargin * 4,
  alignment: 'center',
})
