export const getGeocode = address => {
  const geocoder = new window.google.maps.Geocoder()

  return new Promise((resolve, reject) => {
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        resolve(results[0].geometry.location)
      } else {
        console.log(status)
        reject(status)
      }
    })
  })
}
