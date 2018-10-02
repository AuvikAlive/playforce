import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { fetchDatabaseRootRealTime } from '../../store/actions/actionCreators/dbActions/'
import { Routes } from './Routes'

const mapStateToProps = ({ firebase, databaseRoot }) => {
  const { auth, profile } = firebase
  const { rootLoaded, root } = databaseRoot

  return {
    userId: auth.uid,
    profile,
    rootLoaded,
    root,
  }
}

const mapDispatchToProps = {
  fetchDatabaseRootRealTime,
}

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const RoutesContainer = enhance(Routes)
