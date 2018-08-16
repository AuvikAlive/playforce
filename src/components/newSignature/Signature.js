import React, { Component } from 'react'
import SignaturePad from 'signature_pad'
import { StyledSignature } from './StyledSignature'

export class Signature extends Component {
  state = {}

  componentDidMount() {
    let canvas = document.querySelector('canvas')

    let signaturePad = new SignaturePad(canvas)

    signaturePad.fromDataURL(this.props.image)
  }

  render() {
    return (
      <StyledSignature className="StyledSignature">
        <canvas />
      </StyledSignature>
    )
  }
}
