import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentWillUnmountWithTitleLeftNav,
  showContentWhenLoaded,
} from "../../../functions/"
import { InspectionTypeList } from "../inspectionTypeList/InspectionTypeList"
import { InspectionTypeFormContainer } from "../inspectionTypeForm/InspectionTypeFormContainer"
import { StyledInspectionTypes } from "./StyledInspectionTypes"
import { onComponentDidMount, deleteInspectionType } from "./functions/"

export class InspectionTypes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { inspectionTypes, inspectionTypesLoaded } = this.props

    return showContentWhenLoaded(
      inspectionTypesLoaded,
      <StyledInspectionTypes className="StyledInspectionTypes">
        <Card className="card">
          <InspectionTypeList
            inspectionTypes={inspectionTypes}
            deletePrompt={deleteInspectionType(this)}
          />

          <InspectionTypeFormContainer />
        </Card>
      </StyledInspectionTypes>
    )
  }
}

InspectionTypes.contextType = NavContext
