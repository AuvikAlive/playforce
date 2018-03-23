import React, { Component } from 'react'
import { getDisplayName } from '../../utilities/getDisplayName'
import pica from 'pica/dist/pica.min'

export const withImageCapture = WrappedComponent => {
  class WithImageCapture extends Component {
    state = {
      image: null,
    }

    capture = () => {
      this.fileInput.click()
    }

    getFile = event => {
      const resizer = pica()
      const file = event.target.files[0]

      let offScreenCanvas = document.createElement('canvas')
      offScreenCanvas.width = 500
      offScreenCanvas.height = 500

      let img = document.createElement('img')
      img.src = URL.createObjectURL(file)

      img.onload = () => {
        resizer
          .resize(img, offScreenCanvas, {
            alpha: true,
          })
          .then(result => resizer.toBlob(result, file.type, 0.9))
          .then(blob => {
            const reader = new FileReader()

            reader.readAsDataURL(blob)

            reader.addEventListener(
              'load',
              () => {
                this.setState({ image: reader.result })
              },
              false,
            )
          })
      }
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
