import React from 'react';
import Answer from './Answer.jsx';


class Question extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      aToDisplay: 2

    }
  }

  componentDidMount() {
    console.log('question', this.props.questions)
  }

  sortQuestions() {
    this.props.questions.map((question) => {
      <div>
        <div>{question.question_body}</div>
        <Answer data={question}/>
      </div>
    })
  }

  render() {
    return (
      <div>
        {this.props.questions[0].question_body}
        <Answer data={this.props.questions[0]}/>
      </div>
    )
  }
}

export default Question;