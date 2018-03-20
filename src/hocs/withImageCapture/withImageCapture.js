import React, { Component } from 'react'
import { getDisplayName } from '../../utilities/getDisplayName'

export const withImageCapture = WrappedComponent => {
  class WithImageCapture extends Component {
    state = {
      image: null,
    }

    capture = () => {
      this.fileInput.click()
    }

    getFile = event => {
      const reader = new FileReader()

      reader.readAsDataURL(event.target.files[0])

      reader.addEventListener(
        'load',
        () => {
          this.setState({ image: reader.result })
        },
        false,
      )
    }

    setImage = image => {
      this.setState({ image })
    }

    render() {
      const { image } = this.state

      return (
        <div>
          <input
            type="file"
            accept="image/*"
            // capture="environment"
            style={{ display: 'none' }}
            ref={input => {
              this.fileInput = input
            }}
            onChange={this.getFile}
          />
          <WrappedComponent
            image={image}
            setCapturedImage={this.setImage}
            captureImage={this.capture}
            {...this.props}
          />
        </div>
      )
    }
  }

  WithImageCapture.displayName = `WithImageCapture(${getDisplayName(
    WrappedComponent,
  )})`

  return WithImageCapture
}
