import React, { Component } from "react"
import IconButton from "@material-ui/core/IconButton"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { NavContext } from "components/NavContextProvider/"
import NavBar from "../navBar/"
import { StyledMainContent } from "../styledMainContent/StyledMainContent"
import { ClientForm } from "../clientForm/ClientForm"
import { submit, afterSubmit } from "./functions/"

export class ClientsDialog extends Component {
  render() {
    const { closeDialog } = this.props

    return (
      <div>
        <NavBar
          title="Add a client"
          leftComponent={
            <IconButton
              color="inherit"
              aria-label="close"
              onClick={closeDialog}
            >
              <ArrowBackIcon />
            </IconButton>
          }
        />
        <StyledMainContent className="StyledMainContent">
          <ClientForm onSubmit={submit(this)} afterSubmit={afterSubmit(this)} />
        </StyledMainContent>
      </div>
    )
  }
}

ClientsDialog.contextType = NavContext
