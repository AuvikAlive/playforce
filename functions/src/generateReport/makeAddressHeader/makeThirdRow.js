export const makeThirdRow = (address, email) => {
  const { suburb, state, postcode } = address

  return [
    `${suburb} ${state} ${postcode}`,
    {
      text: [
        {
          text: 'Email: ',
          bold: true,
        },
        {
          text: email,
        },
      ],
    },
  ]
}
