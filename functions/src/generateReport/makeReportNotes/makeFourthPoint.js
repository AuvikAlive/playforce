import { verticalMargin } from '../constants'

export const makeFourthPoint = () => ({
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
})
