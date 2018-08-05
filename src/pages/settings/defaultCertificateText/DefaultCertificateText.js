import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { CertificateTextForm } from '../../../components/certificateTextForm/CertificateTextForm'
import { Content } from '../../../components/content/Content'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'

export class DefaultCertificateText extends Component {
  componentDidMount() {
    const title = 'Default Certificate Text'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { defaultCertificateText, updateProfile } = this.props

    return (
      <div>
        <CertificateTextForm
          initialData={defaultCertificateText}
          onSubmit={value => updateProfile({ defaultCertificateText: value })}
        />

        <Content>
          <div style={{ padding: 24 }}>
            <Typography variant="title" gutterBottom>
              Available placeholders
            </Typography>

            <Typography variant="subheading">
              - Long date = {`<<long date>>`}
            </Typography>

            <Typography variant="subheading">
              - Site name = {`<<site name>>`}
            </Typography>

            <Typography variant="subheading">
              - Client name = {`<<client name>>`}
            </Typography>
          </div>
        </Content>
      </div>
    )
  }
}

DefaultCertificateText.contextTypes = contextTypesTitleLeftNav
