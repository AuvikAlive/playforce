import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import { LoadingIndicator } from '../../../components/loadingIndicator/LoadingIndicator'
import { googleMapURL, toolBarHeight } from '../../../constants/'

const MapViewBase = ({ sites }) => {
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
}

const enhance = compose(
  withProps({
    googleMapURL,
    loadingElement: <LoadingIndicator style={{ height: '100%' }} />,
    containerElement: (
      <div style={{ height: `calc(100vh - ${toolBarHeight}*2px - 32px)` }} />
    ),
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)

export const MapView = enhance(MapViewBase)
