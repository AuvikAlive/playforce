export const makeCondition = condition => ({
  text: [
    {
      text: 'Condition: ',
      bold: true,
    },
    condition,
  ],
})
