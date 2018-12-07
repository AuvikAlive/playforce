import React, { Component } from "react"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentWillUnmountWithTitleRightNav,
  showContentWhenLoaded,
} from "../../../functions/"
import EquipmentForm from "../equipmentForm/"
import { onComponentDidMount, submit } from "./functions/"

export class EditEquipment extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleRightNav(this)
  }

  render() {
    const { equipment } = this.props

    return showContentWhenLoaded(
      equipment,
      <EquipmentForm
        buttonText="update"
        initialData={equipment}
        onSubmit={submit(this)}
      />
    )
  }
}

EditEquipment.contextType = NavContext
