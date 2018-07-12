import { isEmpty } from 'lodash'
import { createPdf } from './createPdf'

export const renderPdf = async (component, inspection) => {
  const { auditSummary, conditionRatingsAdded } = inspection

  if (!isEmpty(auditSummary) && conditionRatingsAdded) {
    const pdfDocGenerator = await createPdf(component)(inspection)

    pdfDocGenerator.getDataUrl(dataUrl => {
      component.setState({ src: dataUrl })
    })
  }
}
