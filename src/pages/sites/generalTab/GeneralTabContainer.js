import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirestore } from 'react-redux-firebase'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { fetchOperatorsRealTime } from '../../../store/actions/actionCreators/operatorActions/'
import {
  fetchSite,
  saveSite,
} from '../../../store/actions/actionCreators/siteActions/'
import { GeneralTab } from './GeneralTab'

const mapStateToProps = (
  {
    firestore: {
      data: { users },
    },
    firebase: {
      auth: { uid },
    },
    site: { sitesLoaded, sites, site },
    operator: { operatorsLoaded, operators },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  siteId: id,
  operatorsLoaded,
  operators,
  site: (sitesLoaded && sites.find(item => item.id === id)) || site,
})

const mapDispatchToProps = { fetchOperatorsRealTime, fetchSite, saveSite }

export const GeneralTabContainer = compose(
  withFeedback,
  withRouter,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(GeneralTab)
