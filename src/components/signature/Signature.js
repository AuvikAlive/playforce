import React, { Component } from 'react'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import SignaturePad from 'react-signature-pad'
import IconButton from 'material-ui/IconButton'
import ClearIcon from 'material-ui-icons/Clear'
import CloudUploadIcon from 'material-ui-icons/CloudUpload'
import { StyledSignature } from './StyledSignature'

export class Signature extends Component {
  setSignature = signature => this.mySignature.fromDataURL(signature)

  getSignature = () => this.mySignature.toDataURL()

  isEmpty = () => this.mySignature.isEmpty()

  render() {
    return (
      <StyledSignature className="StyledSignature">
        <FormControl fullWidth>
          <InputLabel
            shrink={false}
            focused={false}
            className="signature-label"
          >
            <div>Signature</div>

            <div>
              <IconButton>
                <CloudUploadIcon />
              </IconButton>

              <IconButton onClick={() => this.mySignature.clear()}>
                <ClearIcon />
              </IconButton>
            </div>
          </InputLabel>
          <SignaturePad
            ref={node => {
              this.mySignature = node
            }}
          />
        </FormControl>
      </StyledSignature>
    )
  }
}
