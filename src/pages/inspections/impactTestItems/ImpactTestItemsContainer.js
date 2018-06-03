import { connect } from 'react-redux'
import { compose } from 'redux'
import { ImpactTestItems } from './ImpactTestItems'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { id, impactTests },
}) => ({
  userId: uid,
  inspectionId: id,
  impactTests,
})

export const ImpactTestItemsContainer = compose(connect(mapStateToProps))(
  ImpactTestItems
)
