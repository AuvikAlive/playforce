import React, { Component } from 'react'
import { SketchField, Tools } from 'react-sketch'

export class SketchPad extends Component {
  componentDidMount() {
    const { image } = this.props
    this._sketch.setBackgroundFromDataUrl(image, { stretched: true })
  }

  componentWillReceiveProps({ image }) {
    this._sketch.clear()
    this._sketch.setBackgroundFromDataUrl(image, { stretched: true })
  }

  render() {
    return (
      <SketchField
        width="100%"
        height="768px"
        tool={Tools.Pencil}
        lineColor="black"
        lineWidth={3}
        ref={c => (this._sketch = c)}
      />
    )
  }
}
