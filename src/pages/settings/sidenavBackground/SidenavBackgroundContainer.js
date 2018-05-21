import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { SidenavBackground } from './SidenavBackground'

export const SidenavBackgroundContainer = compose(withFeedback, connect())(
  SidenavBackground
)
