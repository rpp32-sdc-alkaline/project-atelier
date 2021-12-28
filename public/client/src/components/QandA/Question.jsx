import React from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {

  let eachQuestion = props.props.map((item) => {
    //console.log('questionItem', item);
    return (
      <div>
        Q:{item.question_body} <a className='helpful'>Helpful? <a>Yes ({item.question_helpfulness})</a> | <a>Report</a></a><br></br>
        <Answer props ={item}/>
      </div>
    )
  })

  return (
    <div>
      {eachQuestion}
    </div>
  )
}

export default Question;