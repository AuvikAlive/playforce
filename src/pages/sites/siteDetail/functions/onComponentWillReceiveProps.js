import { setup } from './setup'

export const onComponentWillReceiveProps = (component, nextProps) => {
  const { site } = nextProps

  if (!!site && site !== component.props.site) {
    setup(component, site)
  }
}
