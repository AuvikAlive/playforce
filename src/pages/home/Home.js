import React, { Component } from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { Content } from "../../components/content/Content"

class Home extends Component {
  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle("Home")
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }

  render() {
    return (
      <Content>
        <Typography variant="h4">Home Page</Typography>
        <Typography variant="subtitle1">Subheading</Typography>
      </Content>
    )
  }
}

export default Home

Home.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
