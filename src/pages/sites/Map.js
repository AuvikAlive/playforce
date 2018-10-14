import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import { LoadingIndicator } from '../../components/loadingIndicator/LoadingIndicator'
import { googleMapURL } from '../../constants/'

const MapBase = ({ lat, lng }) => {
  return navigator.onLine ? (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat, lng }}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  ) : null
}

const enhance = compose(
  withProps({
    googleMapURL,
    loadingElement: <LoadingIndicator style={{ height: 245 }} />,
    containerElement: <div style={{ height: 245 }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)

export const Map = enhance(MapBase)
