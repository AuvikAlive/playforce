import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirestore } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { GeneralTab } from './GeneralTab'

const mapStateToProps = (
  {
    firestore: {
      data: { users },
    },
    firebase: {
      auth: { uid },
    },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  siteId: id,
  site: users && users[uid].sites && users[uid].sites[id],
})

export const GeneralTabContainer = compose(
  withErrorLoadingSubmit,
  withRouter,
  withFirestore,
  connect(mapStateToProps)
)(GeneralTab)
