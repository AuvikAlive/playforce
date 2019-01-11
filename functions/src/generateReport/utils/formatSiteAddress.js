export const formatSiteAddress = siteAddress => {
  const { street, suburb, state, postcode, country } = siteAddress
  const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`

  return address
}
