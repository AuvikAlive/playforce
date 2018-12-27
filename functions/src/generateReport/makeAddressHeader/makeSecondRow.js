export const makeSecondRow = (street, phone) => [
  street,
  {
    text: [
      {
        text: 'Phone: ',
        bold: true,
      },
      {
        text: phone,
      },
    ],
  },
]
