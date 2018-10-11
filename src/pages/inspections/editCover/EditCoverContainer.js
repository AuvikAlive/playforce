import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { updateCover } from '../../../store/actions/actionCreators/inspectionActions/'
import { EditCover } from './EditCover'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { id, cover } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    cover,
  }
}

const mapDispatchToProps = {
  updateCover,
}

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditCoverContainer = enhance(EditCover)
