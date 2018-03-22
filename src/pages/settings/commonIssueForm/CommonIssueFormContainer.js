import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { CommonIssueForm } from './CommonIssueForm'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'

export const CommonIssueFormContainer = compose(
  withErrorLoadingSubmit,
  withRouter,
  connect(null),
)(CommonIssueForm)
