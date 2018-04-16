import React, { Component } from 'react'
import { SketchField, Tools } from 'react-sketch'
import Button from 'material-ui/Button'
import Card from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import SaveIcon from 'material-ui-icons/Save'
import { Carousel } from '../carousel/Carousel'
import { StyledSketch } from './StyledSketch'

export class Sketch extends Component {
  state = { images: [], currentSlide: 0 }

  componentDidMount() {
    const { images } = this.props

    this.setState({ images })
    this.setSketchImage(images[0].image)
  }

  setSketchImage = image => {
    let sketch = this._sketch

    sketch.clear()
    sketch.setBackgroundFromDataUrl(image, { stretched: true })
  }

  onSlideChange = (current, next) => {
    if (next !== current) {
      const { images } = this.state

      this.setSketchImage(images[next].image)
      this.setState({ currentSlide: next })
    }
  }

  onSave = () => {
    const { currentSlide, images } = this.state
    const image = this._sketch.toDataURL()
    const newImages = images.slice()

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
      beforeChange: this.onSlideChange,
    }

    return (
      <StyledSketch className="StyledSketch">
        <SketchField
          width="100%"
          height="768px"
          tool={Tools.Pencil}
          lineColor="black"
          lineWidth={3}
          ref={c => (this._sketch = c)}
        />

        <div className="sketch-actions">
          <IconButton onClick={this.onSave}>
            <SaveIcon />
          </IconButton>
        </div>

        <Card className="card">
          <Carousel showNavs images={images} settings={settings} />

          <Button
            fullWidth
            variant="raised"
            color="primary"
            className="submit-button"
            onClick={this.onSubmit}
          >
            publish changes
          </Button>
        </Card>
      </StyledSketch>
    )
  }
}
