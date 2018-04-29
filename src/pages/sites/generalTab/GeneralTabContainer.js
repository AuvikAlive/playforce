import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchSite,
  updateSite,
} from '../../../store/actions/actionCreators/siteActions/'
import { GeneralTab } from './GeneralTab'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    site: { sitesLoaded, sites, site },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  siteId: id,
  site: (sitesLoaded && sites.find(item => item.id === id)) || site,
})

const mapDispatchToProps = { fetchSite, updateSite }

export const GeneralTabContainer = compose(
  withFeedback,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(GeneralTab)
