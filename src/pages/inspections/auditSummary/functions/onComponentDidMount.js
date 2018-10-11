import isEmpty from 'lodash/isEmpty'
import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'
import { loadInitialData } from './loadInitialData'

export const onComponentDidMount = async component => {
  const { auditSummary, cover } = component.props

  onComponentDidMountWithTitleLeftNav(component, 'Audit Summary')

  !isEmpty(cover) && loadInitialData(component, auditSummary, cover)
}
