import { connect } from 'react-redux'
import { compose } from 'redux'
import { Sites } from './Sites'

const mapStateToProps = ({ firebase: { profile: { email } } }) => ({
  email,
})

export const SitesContainer = compose(connect(mapStateToProps))(Sites)
