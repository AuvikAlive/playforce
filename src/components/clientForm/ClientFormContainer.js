import { connect } from 'react-redux'
import { compose } from 'redux'
import { saveClient } from '../../store/actions/actionCreators/clientActions/'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { ClientForm } from './ClientForm'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = { saveClient }

export const ClientFormContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(ClientForm)
