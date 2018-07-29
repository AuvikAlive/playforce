export const getBase64MimeType = str =>
  str.substring('data:'.length, str.indexOf(';base64'))
