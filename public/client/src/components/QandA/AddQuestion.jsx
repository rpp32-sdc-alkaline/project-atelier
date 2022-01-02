import React from 'react';
import axios from 'axios';
const token = require('../../../dist/config.js');


class AddQuestion extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    show: false
  };
  this.showModal = this.showModal.bind(this);
  this.hideModal = this.hideModal.bind(this);
  this.addQuestion = this.addQuestion.bind(this);
  }

  showModal () {
    this.setState({ show: true })
    console.log('showModal', this.state.show)
  }

  hideModal () {
    this.setState({ show: false })
  }

  addQuestion (e) {
    e.preventDefault();
    let body = e.target[0].value;
    let name = e.target[1].value;
    let email = e.target[2].value;
    let id = this.props.id;
    let header = {
      'Authorization': token.TOKEN
    };
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?body=${body}&name=${name}&email=${email}&product_id=${id}`, {headers: header})
    .then((result) => {
      console.log('add Q result', result);
    })
    .catch((error) => {
      throw error;
    })
    this.hideModal();
  }

  render () {
    if (this.state.show === false) {
      return(
        <button className='addQuestion' onClick={this.showModal}>Add A Question</button>
      )
    } else {
      return(
        <div className='modalBackground'>
          <div className='modalContainer'>
            <h3>Add Your Question</h3>
            <form className='newQForm' onSubmit={this.addQuestion}>
              <label className='bodylabel' for='body'>Your Question</label>
              <input className='bodyInput' type='text' placeholder='Your Question Here' ref='body' name='body'></input><br></br>
              <label className='nameLabel' for='name'>What is your nickname</label>
              <input className='nameInput' type='text' placeholder='Example: jackson11!' ref='name' name='name'></input><br></br>
              <div className='nameWarning'>For privacy reasons, do not use your full name or email address</div>
              <label className='emailLabel' for='email'>Your email</label>
              <input className='emailInput' type='text' placeholder='Why did you like the product of not?' ref='email' name='email'></input><br></br>
              <div className='emailWarning'>For authentication reasons, you will not be emailed</div>
              <input type='submit' value='submit'></input>
            </form>
          </div>
        </div>
      )
    }
  };
}

export default AddQuestion;