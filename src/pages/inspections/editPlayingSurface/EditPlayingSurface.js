import React, { Component } from "react"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftRightNavDelete,
  onComponentWillUnmountWithTitleLeftRightNav,
} from "../../../functions/"
import { PlayingSurfaceForm } from "../playingSurfaceForm/PlayingSurfaceForm"
import { deletePlayingSurface, submit } from "./functions/"

export class EditPlayingSurface extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftRightNavDelete(
      this,
      "Edit Playing Surface",
      deletePlayingSurface
    )
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { playingSurface } = this.props

    return (
      <PlayingSurfaceForm
        buttonText="save"
        initialData={playingSurface}
        onSubmit={submit(this)}
      />
    )
  }
}

EditPlayingSurface.contextType = NavContext
