import React from 'react'

class Helpful extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <p>Helpful? <a href=''>Yes</a> {this.props.helpfulness}</p>
      </div>
    )
  }
}

export default Helpful