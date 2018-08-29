import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { StandardForm } from './StandardForm'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'

const enhance = compose(
  withFeedback,
  withRouter,
  connect(null)
)

export const StandardFormContainer = enhance(StandardForm)
