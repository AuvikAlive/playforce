import React, { Component } from "react"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentWillUnmountWithTitleLeftRightNav,
  showContentWhenLoaded,
} from "../../../functions/"
import StandardForm from "../standardForm/"
import { onComponentDidMount, submit } from "./functions/"

export class EditStandard extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { standard } = this.props

    return showContentWhenLoaded(
      standard,
      <StandardForm
        initialData={standard}
        buttonText="Update"
        onSubmit={submit(this)}
      />
    )
  }
}

EditStandard.contextType = NavContext
