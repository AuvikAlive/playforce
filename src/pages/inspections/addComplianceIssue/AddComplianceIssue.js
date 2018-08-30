import React, { Component } from 'react'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftRightNav,
  showActionGoBack,
} from '../../../functions/'
import ComplianceIssueForm from '../complianceIssueForm/'

export class AddComplianceIssue extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Compliance Issue')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { props, context } = this

    return (
      <ComplianceIssueForm
        afterSubmit={showActionGoBack(this, 'Issue published!')}
        onSubmit={data => props.addComplianceIssue(data)}
        setNav={context.setRightNavComponent}
      />
    )
  }
}

AddComplianceIssue.contextTypes = contextTypesTitleLeftRightNav
