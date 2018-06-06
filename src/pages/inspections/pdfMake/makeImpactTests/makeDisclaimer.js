import { fontSize, verticalMargin } from '../globals'

export const makeDisclaimer = () => ({
  text:
    '*The results of this on-site test report are not to be considered comparable to those of a laboratory test.',
  fontSize: fontSize / 1.5,
  marginTop: verticalMargin,
  italics: true,
  marginLeft: 85,
  pageBreak: 'after',
})
