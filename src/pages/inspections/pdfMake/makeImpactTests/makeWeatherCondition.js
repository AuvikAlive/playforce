import { fontSize, verticalMargin } from '../globals'

export const makeWeatherCondition = (
  firstColumnWidth,
  { temperature, humidity, rain }
) => ({
  marginBottom: verticalMargin,
  columns: [
    {
      text: 'Weather Conditions:',
      decoration: 'underline',
      bold: true,
      width: firstColumnWidth,
    },
    [
      {
        text: `${temperature}° C | ${humidity}% humidity | ${rain}`,
      },
      {
        text: '*Conditions taken from the Australian Bureau of Meteorology',
        fontSize: fontSize / 1.5,
        italics: true,
      },
    ],
  ],
})
