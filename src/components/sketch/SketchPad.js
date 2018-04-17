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

  undo = () => {
    let sketch = this._sketch
    sketch.canUndo() && sketch.undo()
  }

  redo = () => {
    let sketch = this._sketch
    sketch.canRedo() && sketch.redo()
  }

  render() {
    return (
      <SketchField
        width="100%"
        height="768px"
        widthCorrection={0}
        tool={Tools.Pencil}
        lineColor="black"
        lineWidth={3}
        ref={c => (this._sketch = c)}
      />
    )
  }
}
