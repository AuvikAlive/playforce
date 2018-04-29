import React, { Component } from 'react'
import { getDisplayName } from '../../utilities/getDisplayName'
import downscale from 'downscale'

export const withImageCapture = WrappedComponent => {
  class WithImageCapture extends Component {
    state = {
      imageCaptured: false,
      imageNaturalAspectRatio: undefined,
      images: undefined,
      width: undefined,
      height: undefined,
      multiple: false,
    }

    capture = ({ width, height, multiple }) => {
      if (width && height && multiple) {
        this.setState({ width, height, multiple }, () => this.fileInput.click())
      } else if (width && height) {
        this.setState({ width, height }, () => this.fileInput.click())
      } else if (multiple) {
        this.setState({ multiple }, () => this.fileInput.click())
      } else {
        this.fileInput.click()
      }
    }

    loadImage = file => {
      const img = document.createElement('img')
      img.src = URL.createObjectURL(file)

      return new Promise(resolve => {
        img.onload = () => resolve(img)
      })
    }

    createDataUrl = (blob, imageNaturalAspectRatio) => {
      const reader = new FileReader()
      reader.readAsDataURL(blob)

      return new Promise(resolve => {
        reader.addEventListener(
          'load',
          () => {
            resolve({
              image: reader.result,
              imageNaturalAspectRatio,
            })
          },
          false
        )
      })
    }

    getImage = async file => {
      const image = await this.loadImage(file)
      const { naturalHeight, naturalWidth } = image
      const imageNaturalAspectRatio = naturalWidth / naturalHeight
      const {
        width = 500,
        height = Number((1 / imageNaturalAspectRatio * 500).toFixed(2)),
      } = this.state

      const dataUrl = await downscale(image, width, height, {
        imageType: file.type,
        quality: 1,
      })

      return { image: dataUrl, imageNaturalAspectRatio }
    }

    getFile = async event => {
      const { multiple } = this.state
      const fileList = event.target.files

      if (multiple && fileList.length > 0) {
        const images = Array.from(fileList).map(
          async file => await this.getImage(file)
        )

        Promise.all(images).then(values => {
          this.setState({ images: values, imageCaptured: true })
        })
      } else if (fileList[0]) {
        const image = await this.getImage(fileList[0])
        this.setState({ ...image, imageCaptured: true })
      }
    }

    setImage = image => {
      Array.isArray(image)
        ? this.setState({ images: image })
        : this.setState({ image })
    }

    render() {
      const {
        imageCaptured,
        image,
        imageNaturalAspectRatio,
        multiple,
        images,
      } = this.state

      return (
        <div>
          <input
            type="file"
            accept="image/*"
            multiple={multiple}
            // capture="environment"
            style={{ display: 'none' }}
            ref={input => {
              this.fileInput = input
            }}
            onChange={this.getFile}
          />
          <WrappedComponent
            imageCaptured={imageCaptured}
            imageNaturalAspectRatio={imageNaturalAspectRatio}
            image={image}
            images={images}
            setCapturedImage={this.setImage}
            captureImage={this.capture}
            {...this.props}
          />
        </div>
      )
    }
  }

  WithImageCapture.displayName = `WithImageCapture(${getDisplayName(
    WrappedComponent
  )})`

  return WithImageCapture
}
