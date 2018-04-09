import React, { Component } from 'react'
import { getDisplayName } from '../../utilities/getDisplayName'
// import pica from 'pica/dist/pica.min'
import downscale from 'downscale'

export const withImageCapture = WrappedComponent => {
  class WithImageCapture extends Component {
    state = {
      imageCaptured: false,
      imageNaturalAspectRatio: null,
      images: null,
      aspectRatio: null,
      multiple: false,
    }

    capture = ({ aspectRatio, multiple }) => {
      if (aspectRatio && multiple) {
        this.setState({ aspectRatio, multiple }, () => this.fileInput.click())
      } else if (aspectRatio) {
        this.setState({ aspectRatio }, () => this.fileInput.click())
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

    createCanvas = (aspectRatio, imageNaturalAspectRatio) => {
      const canvas = document.createElement('canvas')
      canvas.width = 500
      canvas.height = aspectRatio
        ? 1 / aspectRatio * 500
        : 1 / imageNaturalAspectRatio * 500

      return canvas
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
          false,
        )
      })
    }

    // resizeImage = async (image, offScreenCanvas, fileType) => {
    //   const resizer = new pica()
    //   const result = await resizer.resize(image, offScreenCanvas, {
    //     alpha: true,
    //   })
    //   const blob = await resizer.toBlob(result, fileType, 0.9)

    //   return blob
    // }

    getImage = async (file, aspectRatio) => {
      const image = await this.loadImage(file)
      const { naturalHeight, naturalWidth } = image
      const imageNaturalAspectRatio = naturalWidth / naturalHeight
      const width = 500
      const height = aspectRatio
        ? 1 / aspectRatio * 500
        : 1 / imageNaturalAspectRatio * 500
      // const offScreenCanvas = this.createCanvas(
      //   aspectRatio,
      //   imageNaturalAspectRatio,
      // )
      // const resizedBlob = await this.resizeImage(
      //   image,
      //   offScreenCanvas,
      //   file.type,
      // )
      // const dataUrl = await this.createDataUrl(resizedBlob)
      const dataUrl = await downscale(image, width, height, {
        imageType: file.type,
      })

      return { image: dataUrl, imageNaturalAspectRatio }
    }

    getFile = async event => {
      const { aspectRatio, multiple } = this.state
      const fileList = event.target.files

      if (multiple && fileList.length > 0) {
        const images = Array.from(fileList).map(
          async file => await this.getImage(file, aspectRatio),
        )

        Promise.all(images).then(values => {
          this.setState({ images: values, imageCaptured: true })
        })
      } else if (fileList[0]) {
        const image = await this.getImage(fileList[0], aspectRatio)
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
    WrappedComponent,
  )})`

  return WithImageCapture
}
