export const makeManufacturer = manufacturer => ({
  text: [
    {
      text: 'Manufacturer: ',
      bold: true,
    },
    manufacturer,
  ],
})
