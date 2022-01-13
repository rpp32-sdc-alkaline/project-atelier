import React from 'react';
import Question from './Question.jsx';
import axios from 'axios';
const token = require('../../../dist/config.js');


class Questions extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      qToDisplay: 2,
      showAll: false
    }
  }

  componentDidMount() {
    //console.log('questionDidLoad', this.props)
  }

  render() {
    let questions = this.props.questions;
    if (!this.props.questions) {
      return (
        <div>
          Questions are loading
        </div>
      )
    } else {
    return (
      <div className='questions'>
        <Question props={questions} moreButton={this.props.moreButton} update={this.props.update} productId={this.props.productId} searchData={this.props.searchData}/>
      </div>
    )
    }
  }
}

export default Questions;