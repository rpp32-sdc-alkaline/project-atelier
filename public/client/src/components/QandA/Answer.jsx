import React from 'react';
import axios from 'axios';
const token = require('../../../dist/config.js');


class Answer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      haveData: false,
      allADisplayed: false
    }
    this.getMore = this.getMore.bind(this);
    this.getLess = this.getLess.bind(this);
  }

  getMore (e) {
    this.setState({
      allADisplayed: true
    })

  }

  getLess (e) {
    this.setState({
      allADisplayed: false
    })
  }

  componentDidMount () {
    let id = this.props.props.question_id;
    this.setState({
      questionId: id
    })
    this.getAnswerData(id);
  }

  dateFormat (date) {
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    let year = date.slice(0, 4);
    let months = ['shiftingToMatch', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


    return months[month] + ' ' + day + ', ' + year;
  }

  getAnswerData(id) {
    let headers = {
      'Authorization': token.TOKEN
    };
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${id}/answers?page=1&count=100`, {headers: headers})
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
        <div className='loading'>
          Answers are loading
        </div>
      )
    } else if (!this.state.allADisplayed) {
      let eachAnwser = this.state.answerData.slice(0, 2).map((item) => {
        //console.log('answerItem', item)
        return (
          <div key={item.answer_id} className='answer'>
            {item.body} <br></br>
            by {item.answerer_name}, {this.dateFormat(item.date)} <span className='helpful'>Helpful? <span>Yes ({item.helpfulness})</span> | <span>Report</span></span><br></br>
          </div>
        )
      })
      return (
        <div className='answers'>
          A: {eachAnwser} <br></br>
          {this.state.answerData.length > 2 && <button onClick={this.getMore}>Load More Answers</button>}
        </div>
      )
    } else {
      let eachAnwser = this.state.answerData.map((item) => {
        //console.log('answerItem', item)
        return (
          <div key={item.answer_id} className='answer'>
            {item.body} <br></br>
            by {item.answerer_name}, {this.dateFormat(item.date)} <span className='helpful'>Helpful? <span>Yes ({item.helpfulness})</span> | <span>Report</span></span><br></br>
          </div>
        )
      })
      return (
        <div className='answers'>
          A: {eachAnwser} <br></br>
          <button onClick={this.getLess}>Collapse Answers</button>
        </div>
      )
    }
  }

}

export default Answer;