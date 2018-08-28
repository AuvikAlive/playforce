import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addGroup } from '../../../store/actions/actionCreators/groupActions/'
import { AddGroup } from './AddGroup'

const mapDispatchToProps = { addGroup }

const enhance = compose(
  withFeedback,
  connect(
    null,
    mapDispatchToProps
  )
)

export const AddGroupContainer = enhance(AddGroup)
