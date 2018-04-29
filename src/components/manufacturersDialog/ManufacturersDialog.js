import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card from 'material-ui/Card'
import NavBar from '../navBar/'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'
import { Content } from '../content/Content'
import { ManufacturerList } from '../manufacturerList/ManufacturerList'
import { ManufacturerFormContainer } from '../manufacturerForm/ManufacturerFormContainer'

export class ManufacturersDialog extends Component {
  componentDidMount() {
    const {
      manufacturersLoaded,
      fetchManufacturersRealTime,
      userId,
    } = this.props

    !manufacturersLoaded && fetchManufacturersRealTime(userId)
  }

  delete = async id => {
    const { openDialog, deleteManufacturer, userId } = this.props
    openDialog(() => deleteManufacturer(userId, id))
  }

  render() {
    const { manufacturersLoaded, manufacturers, closeDialog } = this.props

    return manufacturersLoaded ? (
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
                deletePrompt={this.delete}
              />

              <ManufacturerFormContainer />
            </Card>
          </Content>
        </StyledMainContent>
      </div>
    ) : (
      <LinearProgress />
    )
  }
}
