import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchSite,
  updateSite,
} from '../../../store/actions/actionCreators/siteActions/'
import { GeneralTab } from './GeneralTab'

const mapStateToProps = ({ firebase, site }, { match }) => {
  const { sitesLoaded, sites } = site
  const siteId = match.params.id

  return {
    userId: firebase.auth.uid,
    siteId,
    site: (sitesLoaded && sites.find(item => item.id === siteId)) || site.site,
  }
}

const mapDispatchToProps = { fetchSite, updateSite }

const enhance = compose(
  withFeedback,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const GeneralTabContainer = enhance(GeneralTab)
