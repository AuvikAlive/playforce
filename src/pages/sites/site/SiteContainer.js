import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { Site } from './Site'

export const SiteContainer = compose(withRouter, connect(null))(Site)
