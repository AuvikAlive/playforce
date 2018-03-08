import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { Routes } from './Routes'

export const RoutesContainer = compose(
  withRouter,
  connect(({ firebase: { auth, profile } }) => ({ auth, profile })),
)(Routes)
