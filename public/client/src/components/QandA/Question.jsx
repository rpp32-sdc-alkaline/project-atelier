import React from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {

  let eachQuestion = props.props.map((item) => {
    //console.log('questionItem', item);
    return (
      <div key={item.question_id} className='question'>
        Q:{item.question_body} <span className='helpful'>Helpful? <span>Yes ({item.question_helpfulness})</span> | <span>Report</span></span><br></br>
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