import React from 'react';
import Search from './Search.jsx';
import Questions from './Questions.jsx';
import AddQuestion from './AddQuestion.jsx';
import axios from 'axios';
const token = require('../../../dist/config.js');

class QandA extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      haveData: false,
      qToDisplay: 2
    };
  }

  moreQuestions (e) {
    //adjuest number of questions displayed
  }

  componentDidMount () {

    let id = this.props.id;
    this.setState({
      product: id
    })
    this.getQuestionData(id, 3, 5)
  }

  getQuestionData(id, page, count) {
    let headers = {
      'Authorization': token.TOKEN
    };
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${id}&page=${page}&count=${count}`, {headers: headers})
    .then((result) => {
      this.setState({
        questionData: result.data.results,
        haveData: true
      })

    })
    .catch((error) => {
      throw error;
    })
  }

  render() {
    if (!this.state.haveData) {
      return (
        <div>Questions are Loading</div>
        )
      } else {
        return (
          <div>
        <h2>Q and A</h2>
        <Search />
        <Questions questions={this.state.questionData}/>
        <button>More Anwsered Questions</button>
        <AddQuestion />
        </div>
      )
    }
  }
}


export default QandA;