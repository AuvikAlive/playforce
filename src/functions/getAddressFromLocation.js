export const getAddressFromLocation = location => {
  const { street, suburb, state, postcode, country } = location
  const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`

  return address
}
