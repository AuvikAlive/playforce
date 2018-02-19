import React from 'react'
import Typography from 'material-ui/Typography'
import Content from '../../components/content/Content'
import NavBar from '../../components/navBar/NavBar'

const Dashboard = () => (
  <div>
    <NavBar />
    <Content>
      <Typography variant="display1">Dashboard</Typography>
      <Typography variant="subheading">Subheading</Typography>
    </Content>
  </div>
)

export default Dashboard
