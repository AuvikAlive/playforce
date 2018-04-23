import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { saveSite } from '../../../store/actions/actionCreators/siteActions/'
import { Form } from './Form'

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

const mapDispatchToProps = { saveSite }

export const FormContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(Form)
