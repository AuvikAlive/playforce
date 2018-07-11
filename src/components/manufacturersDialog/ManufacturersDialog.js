import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Card from '@material-ui/core/Card'
import { showContentWhenLoaded } from '../../functions/'
import NavBar from '../navBar/'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'
import { Content } from '../content/Content'
import { ManufacturerList } from '../manufacturerList/ManufacturerList'
import { ManufacturerFormContainer } from '../manufacturerForm/ManufacturerFormContainer'
import { onComponentDidMount, deleteManufacturer } from './functions/'

export class ManufacturersDialog extends Component {
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
          <Content>
            <Card className="card">
              <ManufacturerList
                manufacturers={manufacturers}
                deletePrompt={deleteManufacturer(this)}
              />

              <ManufacturerFormContainer />
            </Card>
          </Content>
        </StyledMainContent>
      </div>
    )
  }
}
