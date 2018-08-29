import { connect } from 'react-redux'
import { compose } from 'redux'
import { StandardsList } from './StandardsList'
import { fetchStandardsRealTime } from '../../../store/actions/actionCreators/standardActions/'

const mapStateToProps = ({ firebase, standard }) => {
  const { standardsLoaded, standards } = standard

  return {
    userId: firebase.auth.uid,
    standardsLoaded,
    standards,
  }
}

const mapDispatchToProps = { fetchStandardsRealTime }

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const StandardsListContainer = enhance(StandardsList)
