import React, { Component } from 'react'
import { InputLabel } from 'material-ui/Input'
import SignaturePad from 'react-signature-pad'
import IconButton from 'material-ui/IconButton'
import ClearIcon from 'material-ui-icons/Clear'
import CloudUploadIcon from 'material-ui-icons/CloudUpload'
import { withImageCapture } from '../../hocs/withImageCapture/withImageCapture'
import { StyledSignature } from './StyledSignature'

class SignatureWithout extends Component {
  componentWillReceiveProps({ imageCaptured, image }) {
    if (imageCaptured && image !== this.props.image) {
      this.clear()
      this.setSignature(image)
    }
  }

  setSignature = signature => this.mySignature.fromDataURL(signature)

  getSignature = () => this.mySignature.toDataURL()

  isEmpty = () => this.mySignature.isEmpty()

  clear = () => this.mySignature.clear()

  render() {
    const { captureImage } = this.props

    return (
      <StyledSignature className="StyledSignature">
        <div className="signature-label">
          <InputLabel shrink={false} focused={false}>
            Signature
          </InputLabel>

          <div className="action-buttons">
            <IconButton onClick={captureImage}>
              <CloudUploadIcon />
            </IconButton>

            <IconButton onClick={this.clear}>
              <ClearIcon />
            </IconButton>
          </div>
        </div>
        <SignaturePad
          ref={node => {
            this.mySignature = node
          }}
        />
      </StyledSignature>
    )
  }
}

export const Signature = withImageCapture(SignatureWithout)
