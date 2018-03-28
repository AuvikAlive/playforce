export const setCoverImage = ({ doc, imgData }) => {
  doc.addImage(imgData, 'JPEG', 0, 216, doc.internal.pageSize.width, 432)
}
