import React, { Component } from "react"
import { SiteFormContainer } from "../../../components/siteForm/SiteFormContainer"
import { NavContext } from "components/NavContextProvider/"
import { showContentWhenLoaded } from "../../../functions/"
import { state } from "./state"
import { onComponentDidMount, submit } from "./functions/"

export class GeneralTab extends Component {
  state = state

  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { site } = this.props

    return showContentWhenLoaded(
      site,
      <SiteFormContainer
        buttonText="update"
        initialData={site}
        onSubmit={submit(this)}
      />
    )
  }
}

GeneralTab.contextType = NavContext
