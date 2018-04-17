import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import { LoadingIndicator } from '../../../components/loadingIndicator/LoadingIndicator'
import { key } from '../../../config/googleMaps'

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp`,
    loadingElement: <LoadingIndicator style={{ height: `245px` }} />,
    containerElement: <div style={{ height: `245px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ lat, lng }) => {
  return navigator.onLine ? (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat, lng }}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  ) : null
})
