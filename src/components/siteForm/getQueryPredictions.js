import { getCurrentPosition } from './getCurrentPosition'

export const getQueryPredictions = async (position, input, types) => {
  const { latitude, longitude, radius } =
    position || (await getCurrentPosition())
  const googleMaps = window.google.maps
  const location = new googleMaps.LatLng(latitude, longitude)
  const places = googleMaps.places
  const service = new places.AutocompleteService()

  return new Promise((resolve, reject) => {
    service.getPlacePredictions(
      {
        input,
        location,
        radius,
        ...(types && { types }),
      },
      (predictions, status) =>
        status === places.PlacesServiceStatus.OK
          ? resolve(predictions)
          : reject(status)
    )
  })
}
