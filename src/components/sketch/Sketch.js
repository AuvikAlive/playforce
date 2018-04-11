import React, { Component } from 'react'
import { SketchField, Tools } from 'react-sketch'
import Button from 'material-ui/Button'
import Card from 'material-ui/Card'
import { Carousel } from '../carousel/Carousel'

const settings = {
  infinite: false,
  autoplay: false,
}

export class Sketch extends Component {
  state = {}

  onSubmit = () => {
    const { onSubmit } = this.props

    onSubmit()
  }

  render() {
    const { images } = this.props

    return (
      <div>
        <SketchField
          width="1024px"
          height="768px"
          tool={Tools.Pencil}
          lineColor="black"
          lineWidth={3}
          ref={c => (this._sketch = c)}
        />

        <Button
          fullWidth
          variant="raised"
          color="primary"
          className="submit-button"
          onClick={this.onSubmit}
        >
          save
        </Button>

        <Card>
          <Carousel images={images} settings={settings} />
        </Card>
      </div>
    )
  }
}
