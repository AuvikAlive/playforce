import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { StandardForm } from './StandardForm'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'

export const StandardFormContainer = compose(
  withFeedback,
  withRouter,
  connect(null)
)(StandardForm)
