import { connect } from 'react-redux'
import { compose } from 'redux'
import { Cover } from './Cover'

export const CoverContainer = compose(
  connect(({ firebase: { profile: { displayName } } }) => ({ displayName })),
)(Cover)
