import React from 'react';
import App from '../index.jsx';

class Overview extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('rendered')
    return (
      <h2>Overview</h2>
    )
  }
}

export default Overview;