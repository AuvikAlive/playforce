export const getPlayingSurfaceSuggestions = component => value => {
  const { playingSurfaces } = component.props
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? playingSurfaces.map(
        ({ surfaceType, material }) => `${surfaceType} - ${material}`
      )
    : playingSurfaces
        .filter(({ surfaceType, material }) => {
          const title = `${surfaceType} - ${material}`

          return title.toLowerCase().slice(0, inputLength) === inputValue
        })
        .map(({ surfaceType, material }) => `${surfaceType} - ${material}`)
}
