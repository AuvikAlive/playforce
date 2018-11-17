import { isEmpty } from 'lodash'
// import { makeReportTitle } from '../../../../functions/'

export const generateReport = ({
  inspection,
  closeMenu,
  setFeedback,
  createPdf,
}) => async () => {
  const {
    cover,
    customInspectionNumber,
    auditSummary,
    playgroundsAdded,
    playgroundsCompleted,
    conditionRatingsAdded,
  } = inspection

  closeMenu()

  if (
    !isEmpty(auditSummary) &&
    (playgroundsCompleted || conditionRatingsAdded)
  ) {
    setFeedback({ error: '', loading: true })

    const pdfDocGenerator = await createPdf(inspection)

    const fileName = `${
      customInspectionNumber ? `${customInspectionNumber} - ` : ''
    }${cover.location.name} - Comprehensive Playground Inspection Report.pdf`

    pdfDocGenerator.download(fileName, () => setFeedback({ loading: false }))
  } else {
    setFeedback({
      error: `Please add audit summary & ${
        playgroundsAdded && !playgroundsCompleted
          ? 'complete each playground inspection'
          : 'condition rating'
      } to generate report!`,
      loading: false,
    })
  }
}
