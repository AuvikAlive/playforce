import React, { Component } from "react"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftRightNav,
  showActionGoBack,
} from "../../../functions/"
import ComplianceIssueForm from "../complianceIssueForm/"

export class AddComplianceIssue extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, "Add Compliance Issue")
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { props, context } = this
    const { addComplianceIssue, playingSurfaces } = props

    return (
      <ComplianceIssueForm
        afterSubmit={showActionGoBack(this, "Issue published!")}
        onSubmit={data => addComplianceIssue(data)}
        setNav={context.setRightNavComponent}
        {...{ playingSurfaces }}
      />
    )
  }
}

AddComplianceIssue.contextType = NavContext
