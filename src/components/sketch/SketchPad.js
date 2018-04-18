import React, { Component } from 'react'
import { SketchField, Tools } from 'react-sketch'

export class SketchPad extends Component {
  state = { lineColor: '#000' }

  componentDidMount() {
    const { image } = this.props
    this.setBackground(image)
  }

  componentWillReceiveProps({ image }) {
    this._sketch.clear()
    this.setBackground(image)
  }

  setBackground = image => {
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

  setLineColor = hexColor => {
    this.setState({ lineColor: hexColor })
  }

  render() {
    const { lineColor } = this.state

    return (
      <SketchField
        height="calc(100vh - 48px - 36px - 90px - 56*2px)"
        widthCorrection={0}
        tool={Tools.Pencil}
        lineColor={lineColor}
        lineWidth={3}
        ref={c => (this._sketch = c)}
      />
    )
  }
}
