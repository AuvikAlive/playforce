import React from 'react'
import { compose, withProps } from 'recompose'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { LoadingIndicator } from '../../components/loadingIndicator/LoadingIndicator'

export const Map = compose(
  withProps({
    loadingElement: <LoadingIndicator style={{ height: `245px` }} />,
    containerElement: <div style={{ height: `245px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withGoogleMap
)(({ lat, lng }) => {
  return navigator.onLine ? (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat, lng }}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  ) : null
})
