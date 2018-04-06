import React, { Component } from 'react'
import { getDisplayName } from '../../utilities/getDisplayName'
import pica from 'pica/dist/pica.min'

export const withImageCapture = WrappedComponent => {
  class WithImageCapture extends Component {
    state = {
      imageNaturalAspectRatio: null,
      image: null,
      aspectRatio: null,
    }

    capture = ({ aspectRatio }) => {
      aspectRatio && this.setState({ aspectRatio })
      this.fileInput.click()
    }

    getFile = event => {
      const { aspectRatio } = this.state
      const resizer = pica()
      const file = event.target.files[0]

      if (file) {
        let img = document.createElement('img')
        img.src = URL.createObjectURL(file)

        img.onload = () => {
          let offScreenCanvas = document.createElement('canvas')
          offScreenCanvas.width = 500
          offScreenCanvas.height = aspectRatio
            ? 1 / aspectRatio * 500
            : img.naturalHeight / img.naturalWidth * 500

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
                  this.setState({
                    image: reader.result,
                    imageNaturalAspectRatio:
                      img.naturalWidth / img.naturalHeight,
                  })
                },
                false,
              )
            })
        }
      }
    }

    setImage = image => {
      this.setState({ image })
    }

    render() {
      const { image, imageNaturalAspectRatio } = this.state

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
            imageNaturalAspectRatio={imageNaturalAspectRatio}
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
