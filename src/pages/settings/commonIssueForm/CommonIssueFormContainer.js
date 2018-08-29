import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { CommonIssueForm } from './CommonIssueForm'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'

const enhance = compose(
  withFeedback,
  withRouter,
  connect(null)
)

export const CommonIssueFormContainer = enhance(CommonIssueForm)
