import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { saveManufacturer } from '../../store/actions/actionCreators/manufacturerActions/'
import { ManufacturerForm } from './ManufacturerForm'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
}) => ({
  userId: uid,
})

const mapDispatchToProps = { saveManufacturer }

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ManufacturerFormContainer = enhance(ManufacturerForm)
