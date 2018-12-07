import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import CheckIcon from '@material-ui/icons/Check'
import Card from '@material-ui/core/Card'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Carousel } from '../../../components/carousel/Carousel'
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { StyledSidenavBackground } from './StyledSidenavBackround'
import { images, state } from './constants/'
import { onSlideChange, onSlidePrev, onSlideNext, onSave } from './functions/'

export class SidenavBackground extends Component {
  state = state

  componentDidMount() {
    const title = 'Select Sidenav Background'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const settings = {
      autoplay: false,
      beforeChange: onSlideChange(this),
    }

    const { error, loading } = this.props

    return (
      <StyledSidenavBackground className="StyledSidenavBackground">
        <Card className="card">
          <Carousel
            images={images}
            settings={settings}
            ref={c => (this.carouselParent = c)}
          />

          {!loading && (
            <div className="actions">
              <IconButton onClick={onSlidePrev(this)}>
                <ArrowBackIcon />
              </IconButton>

              <IconButton onClick={onSlideNext(this)}>
                <ArrowForwardIcon />
              </IconButton>

              <IconButton onClick={onSave(this)}>
                <CheckIcon />
              </IconButton>
            </div>
          )}

          {error && <p className="error">{error}</p>}

          {!error &&
            loading && (
              <div className="loading">
                <CircularProgress />
              </div>
            )}
        </Card>
      </StyledSidenavBackground>
    )
  }
}

SidenavBackground.contextType = NavContext
