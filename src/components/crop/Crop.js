import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import NavBar from '../navBar/'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'
import { StyledCrop } from './StyledCrop'

export class Crop extends Component {
  state = {}
  render() {
    const { closeDialog } = this.props

    return (
      <div>
        <NavBar
          title="Edit Images"
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
          <StyledCrop className="StyledCrop">
            <Card className="card">
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
              >
                save changes
              </Button>
            </Card>
          </StyledCrop>
        </StyledMainContent>
      </div>
    )
  }
}
