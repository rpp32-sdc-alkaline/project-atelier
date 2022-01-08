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
      qToDisplay: 2,
      allQDisplayed: false
    };
    this.moreButton = this.moreButton.bind(this);
    this.getQuestionData = this.getQuestionData.bind(this);
  }

  moreButton (e) {
    //adjuest number of questions displayed
    let newSlice = this.state.qToDisplay + 2;
    if (newSlice >= this.state.questionData.length) {
      this.setState({
        allQDisplayed: true
      })
    }
    this.setState({
      qToDisplay: newSlice,
      slicedData: this.state.questionData.slice(0, newSlice)
    })
  }

  componentDidMount () {
    //console.log('QandAProps', this.props);
    let id = this.props.id;
    this.setState({
      id: id
    })
    this.getQuestionData(id, 1, 100)
  }

  componentDidUpdate(prevProps) {
    if(this.props.id !== prevProps.id) {
      this.setState({
        id: this.props.id
      })
      this.getQuestionData(this.props.id, 1, 100)
    }
  }

  getQuestionData(id, page, count) {
    let headers = {
      'Authorization': token.TOKEN
    };
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${id}&page=${page}&count=${count}&sort=helpful`, {headers: headers})
    .then((result) => {
      this.setState({
        questionData: result.data.results,
        slicedData: result.data.results.slice(0, this.state.qToDisplay),
        haveData: true,
        allQDisplayed: false
      })
      //console.log('questionData', this.state.questionData);
    })
    .catch((error) => {
      throw error;
    })
  }

  render() {
    if (!this.state.haveData) {
      return (
        <div>
          <h4>QUESTIONS & ANSWERS</h4>
          <p>Questions are Loading</p>
        </div>
        )
      } else if (this.state.questionData.length === 0) {
        return (
          <div>
          <h4>QUESTIONS & ANSWERS</h4>
          <AddQuestion />
          </div>
        )
      } else {
        return (
          <div className='qAndA'>
        <h4>QUESTIONS & ANSWERS</h4>
        <Search />
        <Questions questions={this.state.slicedData} moreButton={this.moreButton} update={this.getQuestionData} productId={this.state.id}/>
        {!this.state.allQDisplayed && <span className='moreQuestion' id='MoreQuestion' onClick={this.moreButton}>More Anwsered Questions </span>}
        <AddQuestion id ={this.props.id} update={this.getQuestionData}/> <br></br>
        </div>
      )
    }
  }
}


export default QandA;