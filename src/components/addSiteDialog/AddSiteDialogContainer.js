import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchOperatorsRealTime } from '../../store/actions/actionCreators/operatorActions/'
import { AddSiteDialog } from './AddSiteDialog'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  operator: { operatorsLoaded, operators },
}) => ({
  userId: uid,
  operatorsLoaded,
  operators,
})

const mapDispatchToProps = { fetchOperatorsRealTime }

export const AddSiteDialogContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(AddSiteDialog)
