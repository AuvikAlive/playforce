export const makeColumn = ({
  columnGap,
  imageWidth,
  index,
  maintenanceIssue,
}) => {
  const { images, finding, equipment, recommendation } = maintenanceIssue

  return {
    unbreakable: true,
    marginBottom: images && images.length > 1 ? columnGap : columnGap * 2,
    columnGap,
    columns: [
      images
        ? {
            image: images[0].image,
            width: imageWidth,
          }
        : null,
      [
        {
          text: [
            {
              text: 'Issue #: ',
              bold: true,
            },
            `${index + 1}`.padStart(3, '0'),
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
            recommendation,
          ],
        },
      ],
    ],
  }
}
