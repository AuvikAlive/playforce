import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { saveStandard } from '../../../store/actions/actionCreators/standardActions/'
import { AddStandard } from './AddStandard'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = { saveStandard }

export const AddStandardContainer = compose(
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(AddStandard)
