import React from 'react';
import Answer from './Answer.jsx';


class Question extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      aToDisplay: 2

    }
  }

  render() {
    return (
      <div>
        <div>
          <p>How much wood could a woodchuck chuck
             If a woodchuck could chuck wood?</p>
          <Answer />
        </div>
        <div>
          <p>question2</p>
          <Answer />
        </div>
      </div>
    )
  }
}

export default Question;