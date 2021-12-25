import React from 'react';
import axios from 'axios';
const token = require('../../../dist/config.js');


class Answer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      haveData: false,
      anwsersToShow: 2
    }
  }

  componentDidMount () {

    let id = this.props.props.question_id;
    this.setState({
      questionId: id
    })
    this.getAnswerData(id, 1, 5)
  }

  getAnswerData(id, page, count) {
    let headers = {
      'Authorization': token.TOKEN
    };
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${id}/answers?page=${page}&count=${count}`, {headers: headers})
    .then((result) => {
      this.setState({
        answerData: result.data.results,
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
        <div>
          Answers are loading
        </div>
      )
    } else {
      let eachAnwser = this.state.answerData.map((item) => {
        return (
          <div>
            {item.body}
          </div>
        )
      })
      return (
        <div>
          {eachAnwser}
          <button>More Answers</button>
        </div>
      )
    }
  }

}

export default Answer;