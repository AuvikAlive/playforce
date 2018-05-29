import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { LinearProgress } from 'material-ui/Progress'
import Loadable from '../../../components/loadable/LoadableLinear'
import ComplianceIssuesList from '../complianceIssuesList'

const AddComplianceIssue = Loadable({
  loader: () => import('../addComplianceIssue'),
})

const EditComplianceIssue = Loadable({
  loader: () => import('../editComplianceIssue'),
})

AddComplianceIssue.preload()
EditComplianceIssue.preload()

export class ComplianceIssueRoutes extends Component {
  async componentDidMount() {
    const {
      inspectionLoaded,
      complianceIssuesLoaded,
      userId,
      inspectionId,
      fetchInspectionRealTime,
      fetchComplianceIssues,
    } = this.props

    const { addUnsubscriber } = this.context

    !inspectionLoaded &&
      addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
    !complianceIssuesLoaded && fetchComplianceIssues(userId, inspectionId)
  }
  render() {
    const { inspectionLoaded, complianceIssuesLoaded, match } = this.props

    return inspectionLoaded && complianceIssuesLoaded ? (
      <Switch>
        <Route path={`${match.url}/add`} component={AddComplianceIssue} />
        <Route path={`${match.url}/edit/:id`} component={EditComplianceIssue} />
        <Route path={match.url} component={ComplianceIssuesList} />
      </Switch>
    ) : (
      <LinearProgress />
    )
  }
}

ComplianceIssueRoutes.contextTypes = {
  addUnsubscriber: PropTypes.func,
}
