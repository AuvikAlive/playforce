import { isEmpty } from 'lodash'
import { makeReportTitle } from '../../../../functions/'

export const generateReport = ({
  inspection,
  closeMenu,
  setFeedback,
  createPdf,
}) => async () => {
  const {
    cover: { location, inspectionType },
    auditSummary,
    conditionRatingsAdded,
  } = inspection

  closeMenu()

  if (!isEmpty(auditSummary) && conditionRatingsAdded) {
    setFeedback({ error: '', loading: true })

    const pdfDocGenerator = await createPdf(inspection)

    pdfDocGenerator.download(
      `${location.name} - ${makeReportTitle(inspectionType)}.pdf`,
      () => setFeedback({ loading: false })
    )
  } else {
    setFeedback({
      error: 'Please add audit summary & condition rating to generate report!',
      loading: false,
    })
  }
}
