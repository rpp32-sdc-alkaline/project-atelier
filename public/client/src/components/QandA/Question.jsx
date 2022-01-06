import React from 'react';
import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';
import axios from 'axios';
const token = require('../../../dist/config.js');

const Question = (props) => {
  //console.log('props', props);
  let markHelpful = (e) => {
    let id = e.target.id;
    //console.log('event', e);
    let headers = {
      'Authorization': token.TOKEN
    };
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${id}/helpful`,
      headers: headers
    })
    .then((result) => {
      console.log('Marked as helpful')
      //console.log('questionData', this.state.questionData);
    })
    .catch((error) => {
      throw error;
    })
  }

  let eachQuestion = props.props.map((item) => {
    //console.log('questionItem', item);
    return (
      <div key={item.question_id} className='question'>
        Q:{item.question_body} <span className='helpful'>Helpful? <span id={item.question_id} onClick={markHelpful}>Yes ({item.question_helpfulness})</span> | <AddAnswer id={item.question_id}/></span><br></br>
        <Answer props ={item}/>
      </div>
    )
  })

  return (
    <div className='questions'>
      {eachQuestion}
    </div>
  )
}

export default Question;