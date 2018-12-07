import React, { Component } from "react"
import { ClientForm } from "../../../components/clientForm/ClientForm"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentWillUnmountWithTitleLeftRightNav,
  showContentWhenLoaded,
} from "../../../functions/"
import { onComponentDidMount, submit } from "./functions/"

export class EditClient extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { client } = this.props

    return showContentWhenLoaded(
      client,
      <ClientForm
        initialData={client}
        buttonText="Update"
        onSubmit={submit(this)}
      />
    )
  }
}

EditClient.contextType = NavContext
