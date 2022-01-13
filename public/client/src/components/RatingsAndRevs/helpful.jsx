import React from 'react'

class Helpful extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <p>Helpful?</p><p className="link">Yes {this.props.helpfulness}</p>
      </div>
    )
  }
}

export default Helpful