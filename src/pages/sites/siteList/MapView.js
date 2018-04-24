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

export const MapView = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp`,
    loadingElement: <LoadingIndicator style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `calc(100vh - 56*2px)` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ sites }) => {
  const latSum = sites.reduce((accumulator, currentValue) => {
    return (accumulator.latitude || accumulator) + currentValue.latitude
  })
  const lngSum = sites.reduce((accumulator, currentValue) => {
    return (accumulator.longitude || accumulator) + currentValue.longitude
  })

  return navigator.onLine ? (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: latSum / sites.length, lng: lngSum / sites.length }}
    >
      {sites.map(({ latitude, longitude }, index) => (
        <Marker key={index} position={{ lat: latitude, lng: longitude }} />
      ))}
    </GoogleMap>
  ) : null
})
