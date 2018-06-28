import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  deleteInspectionType,
  fetchInspectionTypesRealTime,
} from '../../../store/actions/actionCreators/inspectionTypeActions/'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { InspectionTypes } from './InspectionTypes'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspectionType: { inspectionTypesLoaded, inspectionTypes },
}) => ({
  userId: uid,
  inspectionTypesLoaded,
  inspectionTypes,
})

const mapDispatchToProps = {
  deleteInspectionType,
  fetchInspectionTypesRealTime,
}

export const InspectionTypesContainer = compose(
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(InspectionTypes)