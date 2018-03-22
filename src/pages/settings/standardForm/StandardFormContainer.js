import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { StandardForm } from './StandardForm'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'

export const StandardFormContainer = compose(
  withErrorLoadingSubmit,
  withRouter,
  connect(null),
)(StandardForm)
