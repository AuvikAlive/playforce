import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import ComplianceIssuesList from '../complianceIssuesList'
import { onComponentDidMount } from './onComponentDidMount'

const AddComplianceIssue = Loadable({
  loader: () => import('../addComplianceIssue'),
})

const EditComplianceIssue = Loadable({
  loader: () => import('../editComplianceIssue'),
})

AddComplianceIssue.preload()
EditComplianceIssue.preload()

export class ComplianceIssueRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { inspectionLoaded, complianceIssuesLoaded, match } = this.props
    const isLoaded = inspectionLoaded && complianceIssuesLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route path={`${match.url}/add`} component={AddComplianceIssue} />
        <Route path={`${match.url}/edit/:id`} component={EditComplianceIssue} />
        <Route path={match.url} component={ComplianceIssuesList} />
      </Switch>
    )
  }
}

ComplianceIssueRoutes.contextTypes = contextTypesUnsubscriber
