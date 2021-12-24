import React from 'react';
import Question from './Question.jsx';


class Questions extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      qToDisplay: 2,
      showAll: false

    }
  }

  componentDidMount() {
    //console.log('questionDidLoad', this.props.questions)
  }



  render() {
    let questions = this.props.questions;
    if (!this.props.questions) {
      return (
        <div>
          Questions are loading
        </div>
      )
    } else {
    return (
      <div>
        <Question props={questions} />
      </div>
    )
    }
  }
}

export default Questions;