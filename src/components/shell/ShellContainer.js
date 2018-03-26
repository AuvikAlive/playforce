import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { Shell } from './Shell'

export const ShellContainer = compose(
  withRouter,
  connect(({ firebase: { auth, profile } }) => ({ auth, profile })),
)(Shell)
