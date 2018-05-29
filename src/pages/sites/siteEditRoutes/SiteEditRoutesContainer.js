import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { SiteEditRoutes } from './SiteEditRoutes'

export const SiteEditRoutesContainer = compose(withRouter, connect(null))(
  SiteEditRoutes
)
