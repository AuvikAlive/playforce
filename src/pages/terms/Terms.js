import React, { Component } from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { Content } from "../../components/content/Content"

class Terms extends Component {
  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle("Terms")
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }
  render() {
    return (
      <Content>
        <Typography variant="h4">Terms of Service</Typography>
        <Typography variant="subtitle1">Subheading</Typography>
      </Content>
    )
  }
}

export default Terms

Terms.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
