export const makeAssetId = assetId => ({
  text: [
    {
      text: 'Asset Id: ',
      bold: true,
    },
    `${assetId ? assetId : 'None'}`,
  ],
})
