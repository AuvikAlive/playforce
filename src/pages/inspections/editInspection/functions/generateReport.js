import { isEmpty } from 'lodash'
// import { makeReportTitle } from '../../../../functions/'

export const generateReport = ({
  inspection,
  closeMenu,
  setFeedback,
  createPdf,
}) => async () => {
  const {
    cover: { location },
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

    pdfDocGenerator.download(
      `${location.name} - Comprehensive Playground Inspection Report.pdf`,
      () => setFeedback({ loading: false })
    )
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
