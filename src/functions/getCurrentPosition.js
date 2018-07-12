export const getCurrentPosition = () => {
  if ('geolocation' in navigator) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude, accuracy } }) => {
          resolve({
            latitude: latitude.toFixed(5),
            longitude: longitude.toFixed(5),
            radius: accuracy,
          })
        },
        error => reject(error)
      )
    })
  }
}
