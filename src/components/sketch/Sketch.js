import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Card from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import ArrowForwardIcon from 'material-ui-icons/ArrowForward'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import SaveIcon from 'material-ui-icons/Save'
import { Carousel } from '../carousel/Carousel'
import { SketchPad } from './SketchPad'
import { StyledSketch } from './StyledSketch'

export class Sketch extends Component {
  state = { images: [], currentSlide: 0 }

  componentDidMount() {
    const { images } = this.props

    this.setState({ images })
  }

  onSlideChange = (current, next) => {
    if (next !== current) {
      this.setState({ currentSlide: next })
    }
  }

  onSave = () => {
    const { currentSlide, images } = this.state
    const image = this.carouselParent.sketchParent._sketch.toDataURL()
    const newImages = [...images]

    newImages[currentSlide].image = image

    this.setState({ images: newImages })
  }

  onSubmit = () => {
    const { onSubmit } = this.props
    const { images } = this.state

    onSubmit(images)
  }

  render() {
    const { images } = this.state
    const settings = {
      infinite: false,
      autoplay: false,
      draggable: false,
      beforeChange: this.onSlideChange,
    }

    return (
      <StyledSketch className="StyledSketch">
        <Card className="card">
          <Carousel
            images={images}
            settings={settings}
            ref={c => (this.carouselParent = c)}
            SlideComponent={SketchPad}
          />

          <div className="sketch-actions">
            <IconButton
              onClick={() => this.carouselParent.carousel.slickPrev()}
            >
              <ArrowBackIcon />
            </IconButton>

            <IconButton
              onClick={() => this.carouselParent.carousel.slickNext()}
            >
              <ArrowForwardIcon />
            </IconButton>
            <IconButton onClick={this.onSave}>
              <SaveIcon />
            </IconButton>
          </div>

          <Button
            fullWidth
            variant="raised"
            color="primary"
            className="submit-button"
            onClick={this.onSubmit}
          >
            save changes
          </Button>
        </Card>
      </StyledSketch>
    )
  }
}
