import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import { LoadingIndicator } from '../../../components/loadingIndicator/LoadingIndicator'

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4pZJlJSU8OQWQgfin9-Tq4IpxMDEzD28&v=3.exp',
    loadingElement: <LoadingIndicator style={{ height: `245px` }} />,
    containerElement: <div style={{ height: `245px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(({ lat, lng }) => (
  <GoogleMap defaultZoom={16} defaultCenter={{ lat, lng }}>
    <Marker position={{ lat, lng }} />
  </GoogleMap>
))
