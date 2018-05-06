export const makeColumn = ({
  columnGap,
  imageWidth,
  index,
  maintenanceIssue,
}) => {
  const { images, finding, equipment, recommendations } = maintenanceIssue

  return {
    unbreakable: true,
    marginBottom: images.length > 1 ? columnGap : columnGap * 2,
    columnGap,
    columns: [
      {
        image: images[0].image,
        width: imageWidth,
      },
      [
        {
          text: [
            {
              text: 'Issue #: ',
              bold: true,
            },
            `00${index + 1}`,
          ],
        },
        {
          text: [
            {
              text: 'Equipment Type: ',
              bold: true,
            },
            equipment,
          ],
        },
        {
          text: [
            {
              text: 'Finding: ',
              bold: true,
            },
            finding,
          ],
        },
        {
          text: [
            {
              text: 'Recommendation: ',
              bold: true,
            },
            recommendations,
          ],
        },
      ],
    ],
  }
}
