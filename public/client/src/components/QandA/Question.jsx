import React from 'react';
import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx'

const Question = (props) => {

  let eachQuestion = props.props.map((item) => {
    //console.log('questionItem', item);
    return (
      <div key={item.question_id} className='question'>
        Q:{item.question_body} <span className='helpful'>Helpful? <span>Yes ({item.question_helpfulness})</span> | <AddAnswer id={item.question_id}/></span><br></br>
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