import React, { Component } from 'react'
import { SketchField, Tools } from 'react-sketch'

export class SketchPad extends Component {
  state = { lineColor: '#000', tool: 'Pencil', height: undefined }

  componentDidMount() {
    const { image } = this.props

    this.setBackground(image)
    this.setHeight()
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps !== this.props) {
  //     console.log('runs')
  //     this._sketch.clear()
  //     this.setBackground(nextProps.image)
  //   }
  // }

  setHeight = () => {
    const { aspectRatio, width } = this.props
    const height = width / aspectRatio

    this.setState({ height })
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

  setTool = tool => {
    this.setState({ tool })
  }

  render() {
    const { lineColor, tool } = this.state
    const { aspectRatio, width } = this.props
    const height = width / aspectRatio

    return (
      <SketchField
        // height="calc(100vh - 48px - 32px - 90px - 64px - 56*2px)"
        height={height}
        widthCorrection={0}
        tool={Tools[tool]}
        lineColor={lineColor}
        lineWidth={3}
        ref={c => (this._sketch = c)}
        style={{
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    )
  }
}
