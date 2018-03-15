import { connect } from 'react-redux'
import { compose } from 'redux'
import { StandardsList } from './StandardsList'

const mapStateToProps = ({ firebase: { profile } }) => ({
  profile,
})

export const StandardsListContainer = compose(connect(mapStateToProps))(
  StandardsList,
)
