import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Card from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import ArrowForwardIcon from 'material-ui-icons/ArrowForward'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import SaveIcon from 'material-ui-icons/Save'
import UndoIcon from 'material-ui-icons/Undo'
import RedoIcon from 'material-ui-icons/Redo'
import { CompactPicker } from 'react-color'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { Carousel } from '../carousel/Carousel'
import { SketchPad } from './SketchPad'
import { StyledSketch } from './StyledSketch'

const tools = ['Pencil', 'Line', 'Rectangle', 'Circle']

export class Sketch extends Component {
  state = {
    images: [],
    imagesLength: undefined,
    currentSlide: 0,
    tool: tools[0],
  }

  componentDidMount() {
    const { images } = this.props

    this.setState({ images, imagesLength: images.length })
  }

  onSlideChange = (current, next) => {
    if (next !== current) {
      this.setState({ currentSlide: next })
    }
  }

  onPrev = () => {
    const { currentSlide } = this.state
    currentSlide > 0 && this.carouselParent.carousel.slickPrev()
  }

  onNext = () => {
    const { imagesLength, currentSlide } = this.state
    currentSlide + 1 < imagesLength && this.carouselParent.carousel.slickNext()
  }

  onToolSelect = event => {
    const tool = event.target.value
    const { currentSlide } = this.state

    this.carouselParent[`sketchParent${currentSlide}`].setTool(tool)
  }

  onSave = () => {
    const { currentSlide, images } = this.state
    const image = this.carouselParent[
      `sketchParent${currentSlide}`
    ]._sketch.toDataURL()

    images[currentSlide].image = image

    this.setState({ images })
  }

  onSubmit = () => {
    const { onSubmit } = this.props
    const { images } = this.state

    onSubmit(images)
  }

  render() {
    const { images, currentSlide, tool } = this.state
    const settings = {
      infinite: false,
      autoplay: false,
      draggable: false,
      swipe: false,
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
            <IconButton onClick={this.onPrev}>
              <ArrowBackIcon />
            </IconButton>

            <IconButton onClick={this.onNext}>
              <ArrowForwardIcon />
            </IconButton>

            <IconButton onClick={this.onSave}>
              <SaveIcon />
            </IconButton>

            <IconButton
              onClick={() =>
                this.carouselParent[`sketchParent${currentSlide}`].undo()
              }
            >
              <UndoIcon />
            </IconButton>

            <IconButton
              onClick={() =>
                this.carouselParent[`sketchParent${currentSlide}`].redo()
              }
            >
              <RedoIcon />
            </IconButton>
          </div>

          <div className="sketch-actions">
            <TextField
              fullWidth
              select
              value={tool}
              onChange={this.onToolSelect}
              margin="none"
              className="tool-select"
            >
              {tools.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="sketch-actions color-picker">
            <CompactPicker
              onChangeComplete={color =>
                this.carouselParent[`sketchParent${currentSlide}`].setLineColor(
                  color.hex
                )
              }
            />
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
