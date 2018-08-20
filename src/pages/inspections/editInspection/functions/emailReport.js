import { isEmpty } from 'lodash'
import { makeReportTitle } from '../../../../functions/'

export const emailReport = ({
  inspection,
  closeMenu,
  setFeedback,
  createPdf,
  email,
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
    const url =
      'https://us-central1-inspection-app-49829.cloudfunctions.net/sendEmail'

    pdfDocGenerator.getDataUrl(async dataUrl => {
      const data = {
        filename: `${location.name} - ${makeReportTitle(inspectionType)}.pdf`,
        dataUrl,
        email,
      }

      try {
        await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
        })

        setFeedback({ loading: false, success: 'Report sent as email!' })
      } catch (error) {
        setFeedback({ loading: false, error: 'Sorry, something went wrong!' })
        console.log(error)
      }
    })
  } else {
    setFeedback({
      error: 'Please add audit summary & condition rating to generate report!',
      loading: false,
    })
  }
}
