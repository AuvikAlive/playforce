import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { ImpactTestDetailItems } from './ImpactTestDetailItems'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id, impactTests },
  },
  { impactTestId }
) => ({
  userId: uid,
  inspectionId: id,
  impactTests,
  impactTest: impactTests.find(({ id }) => id === impactTestId),
})

export const ImpactTestDetailItemsContainer = compose(
  withRouter,
  connect(mapStateToProps)
)(ImpactTestDetailItems)
