import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchOperatorsRealTime } from '../../../store/actions/actionCreators/operatorActions/'
import { AddSite } from './AddSite'

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

export const AddSiteContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(AddSite)
