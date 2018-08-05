import { format } from 'date-fns'

export const replaceLongDate = str => {
  const date = new Date()
  const formatedDate = format(date, 'DD MMMM YYYY')

  return str.replace('<<long date>>', formatedDate)
}
