import React from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {

  let eachQuestion = props.props.map((item) => {
    return (
      <div>
        {item.question_body}
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