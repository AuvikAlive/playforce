import { connect } from 'react-redux'
import { compose } from 'redux'
import { addClient } from '../../store/actions/actionCreators/clientActions/'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { ClientsDialog } from './ClientsDialog'

const mapStateToProps = ({ firebase }) => ({
  userId: firebase.auth.uid,
})

const mapDispatchToProps = { addClient }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ClientsDialogContainer = enhance(ClientsDialog)
