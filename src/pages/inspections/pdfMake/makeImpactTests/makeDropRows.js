const red = '#ff0000'
const green = '#008000'

export const makeDropRows = dropTests => {
  const rows = dropTests.map(
    ({ dropNumber, location, dropHeight, hic, hicDuration, gmax, result }) => [
      `00${dropNumber}`,
      location,
      dropHeight,
      {
        text: hic,
        ...(hic > 1000 && { color: red }),
      },
      {
        text: hicDuration,
        ...(hicDuration < 3 && { color: red }),
      },
      {
        text: gmax,
        ...(gmax > 200 && { color: red }),
      },
      {
        text: result,
        ...(result === 'Satisfactory' ? { color: green } : { color: red }),
      },
    ]
  )

  return rows
}
