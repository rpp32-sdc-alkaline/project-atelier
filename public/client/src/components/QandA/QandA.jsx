import React from 'react';
import Search from './Search.jsx';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';

class QandA extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      qToDisplay: 2
    };
  }

  moreQuestions (e) {
    //adjuest number of questions displayed
  }

  fetchQuestions () {
    //set state to questions for passed in product
    //organize in order of helpfulness
  }




  render() {
    return (
      <div>
      <h2>Q and A</h2>
      <Search />
      <Question />
      <button>More Anwsered Questions</button>
      <AddQuestion />
      </div>
    )
  }
}

export default QandA;