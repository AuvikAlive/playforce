import React, { Component } from 'react'
import { getDisplayName } from '../../functions/getDisplayName'
import { state } from './state'
import { captureImage, getFile, setCapturedImage } from './functions/'

export const withImageCapture = WrappedComponent => {
  class WithImageCapture extends Component {
    state = state

    render() {
      const {
        imageCaptured,
        image,
        imageNaturalAspectRatio,
        multiple,
        images,
      } = this.state

      const { forwardedRef, ...rest } = this.props

      return (
        <div>
          <input
            type="file"
            accept="image/*"
            multiple={multiple}
            // capture
            // capture="environment"
            style={{ display: 'none' }}
            ref={input => {
              this.fileInput = input
            }}
            onChange={getFile(this)}
          />
          <WrappedComponent
            imageCaptured={imageCaptured}
            imageNaturalAspectRatio={imageNaturalAspectRatio}
            image={image}
            images={images}
            setCapturedImage={setCapturedImage(this)}
            captureImage={captureImage(this)}
            ref={forwardedRef}
            {...rest}
          />
        </div>
      )
    }
  }

  WithImageCapture.displayName = `WithImageCapture(${getDisplayName(
    WrappedComponent
  )})`

  return React.forwardRef((props, ref) => {
    return <WithImageCapture {...props} forwardedRef={ref} />
  })
}
