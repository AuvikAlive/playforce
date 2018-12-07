import React, { Component } from "react"
import { NavContext } from "components/NavContextProvider/"
import { onComponentWillUnmountWithTitleLeftRightNav } from "../../../functions/"
import ComplianceIssueForm from "../complianceIssueForm/"
import { submit, setNav } from "./functions/"

export class EditComplianceIssue extends Component {
  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { complianceIssue, playingSurfaces } = this.props

    return (
      <ComplianceIssueForm
        buttonText="save"
        initialData={complianceIssue}
        onSubmit={submit(this)}
        setNav={setNav(this)}
        {...{ playingSurfaces }}
      />
    )
  }
}

EditComplianceIssue.contextType = NavContext
