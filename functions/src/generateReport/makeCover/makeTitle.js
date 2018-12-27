import { verticalMargin } from '../constants'

export const makeTitle = ({ wording, font, size, color }) => {
  return {
    text: wording.toUpperCase(),
    font,
    fontSize: Number(size),
    color,
    marginTop: verticalMargin * 4,
    marginBottom: verticalMargin * 4,
    alignment: 'center',
  }
}
