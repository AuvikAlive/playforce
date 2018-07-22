import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import NavBar from '../navBar/'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'
import { StyledCrop } from './StyledCrop'
import { onComponentDidMount, submit } from './functions/'

export class Crop extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { closeDialog, image } = this.props

    return (
      <div>
        <NavBar
          title="Crop Image"
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
              <div>{image && <img src={image} id="image" alt="to crop" />}</div>

              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={submit(this)}
              >
                save crop
              </Button>
            </Card>
          </StyledCrop>
        </StyledMainContent>
      </div>
    )
  }
}
