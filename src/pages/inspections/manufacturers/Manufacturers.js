import React, { Component } from "react"
import IconButton from "@material-ui/core/IconButton"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import Card from "@material-ui/core/Card"
import NavBar from "../../../components/navBar/"
import { StyledMainContent } from "../../../components/shell/StyledMainContent"
import { NavContext } from "components/NavContextProvider/"
import { showContentWhenLoaded } from "../../../functions/"
import { ManufacturerList } from "../../settings/manufacturers/ManufacturerList"
import { FormContainer } from "../../settings/manufacturers/FormContainer"
import { StyledManufacturers } from "../../settings/manufacturers/StyledManufacturers"
import { onComponentDidMount, deleteManufacturer } from "./functions/"

export class Manufacturers extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { manufacturersLoaded, manufacturers, closeDialog } = this.props

    return showContentWhenLoaded(
      manufacturersLoaded,
      <div>
        <NavBar
          title="Manufacturers"
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
          <StyledManufacturers className="StyledManufacturers">
            <Card className="card">
              <ManufacturerList
                manufacturers={manufacturers}
                deletePrompt={deleteManufacturer(this)}
              />

              <FormContainer />
            </Card>
          </StyledManufacturers>
        </StyledMainContent>
      </div>
    )
  }
}

Manufacturers.contextType = NavContext
