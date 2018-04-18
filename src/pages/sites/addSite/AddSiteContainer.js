import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { fetchOperators } from '../../../store/actions/actionCreators/operatorActions/'
import { saveSite } from '../../../store/actions/actionCreators/siteActions/'
import { AddSite } from './AddSite'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  firestore: {
    ordered: { users = [] },
  },
  operator: { operatorsLoaded, operators },
}) => ({
  userId: uid,
  operatorsLoaded,
  operators,
})

const mapDispatchToProps = { fetchOperators, saveSite }

export const AddSiteContainer = compose(
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(AddSite)
