import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { CommonIssueForm } from './CommonIssueForm'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'

export const CommonIssueFormContainer = compose(
  withFeedback,
  withRouter,
  connect(null)
)(CommonIssueForm)
