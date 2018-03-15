import { connect } from 'react-redux'
import { compose } from 'redux'
import { AddStandard } from './AddStandard'

const mapStateToProps = ({ firebase: { profile } }) => ({
  profile,
})

export const AddStandardContainer = compose(connect(mapStateToProps))(
  AddStandard,
)
