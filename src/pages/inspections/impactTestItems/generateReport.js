import { closeMenu } from '../../../functions/'

export const generateReport = component => async () => {
  closeMenu(component)()

  const { generateImpactTestReport, setFeedback } = component.props

  setFeedback({ error: '', loading: true })

  try {
    await generateImpactTestReport(setFeedback)
    // setFeedback({ loading: false })
  } catch (error) {
    setFeedback({ error: error.message, loading: false })
  }
}
