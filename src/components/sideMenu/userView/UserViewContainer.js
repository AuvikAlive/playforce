import { connect } from 'react-redux'
import { compose } from 'redux'
import { UserView } from './UserView'

const mapStateToProps = ({ firebase: { profile } }) => ({ profile })

export const UserViewContainer = compose(connect(mapStateToProps))(UserView)
