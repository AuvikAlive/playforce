import { connect } from 'react-redux'
import { compose } from 'redux'
import { addClient } from '../../../store/actions/actionCreators/clientActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { AddClient } from './AddClient'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = { addClient }

export const AddClientContainer = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddClient)
