import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import CheckIcon from '@material-ui/icons/Check'
import Card from '@material-ui/core/Card'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Carousel } from '../../../components/carousel/Carousel'
import { StyledSidenavBackground } from './StyledSidenavBackround'
import { background1 } from './images/background1'
import { background2 } from './images/background2'
import { background3 } from './images/background3'

const images = [
  { image: background1 },
  { image: background2 },
  { image: background3 },
]

export class SidenavBackground extends Component {
  state = { currentSlide: 0 }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Select Sidenav Background')
    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onSlideChange = (current, next) => {
    if (next !== current) {
      this.setState({ currentSlide: next })
    }
  }

  onPrev = () => {
    this.carouselParent.carousel.slickPrev()
  }

  onNext = () => {
    this.carouselParent.carousel.slickNext()
  }

  onSave = async () => {
    const { currentSlide } = this.state
    const { updateProfile, setFeedback } = this.props
    const image = images[currentSlide].image

    setFeedback({ error: '', loading: true })

    try {
      await updateProfile({ background: image })
      setFeedback({ success: 'Background updated!', loading: false })
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  }

  render() {
    const settings = {
      autoplay: false,
      beforeChange: this.onSlideChange,
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
              <IconButton onClick={this.onPrev}>
                <ArrowBackIcon />
              </IconButton>

              <IconButton onClick={this.onNext}>
                <ArrowForwardIcon />
              </IconButton>

              <IconButton onClick={this.onSave}>
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

SidenavBackground.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
