import React, { Component } from "react"
import EquipmentForm from "../equipmentForm/"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitle,
  onComponentWillUnmountWithTitle,
  showActionGo,
} from "../../../functions/"
import { submit } from "./submit"

export class AddEquipment extends Component {
  componentDidMount() {
    onComponentDidMountWithTitle(this, "Add Equipment")
  }

  componentWillMount() {
    onComponentWillUnmountWithTitle(this)
  }

  render() {
    return (
      <EquipmentForm
        onSubmit={submit(this)}
        afterSubmit={showActionGo(this, "Equipment published!", "edit/")}
      />
    )
  }
}

AddEquipment.contextType = NavContext
