import React, { Component } from "react"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from "../../../functions/"
import { CoverFormContainer } from "../coverForm/CoverFormContainer"
import { submit } from "./submit"

export class EditCover extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, "Cover")
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { cover } = this.props

    return (
      <CoverFormContainer
        buttonText="save"
        onSubmit={submit(this)}
        initialData={cover}
      />
    )
  }
}

EditCover.contextType = NavContext
