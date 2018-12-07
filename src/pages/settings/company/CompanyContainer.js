import { connect } from "react-redux"
import { compose } from "redux"
import { withFeedback } from "../../../hocs/withFeedback/withFeedback"
import { Company } from "./Company"

const mapStateToProps = ({ firebase }) => ({
  companyInfo: firebase.profile.companyInfo,
})

const enhance = compose(
  withFeedback,
  connect(mapStateToProps)
)

export const CompanyContainer = enhance(Company)
