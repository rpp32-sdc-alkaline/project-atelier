import React from 'react'

class CharacteristicReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      oneDescription: '',
      twoDescription: '',
      threeDescription: '',
      fourDescription: '',
      fiveDescription: '',
      selection: null
    }
  }

  componentDidMount() {
    if (this.props.thisChar === 'Size') {
      this.setState({
        oneDescription: 'A size too small',
        twoDescription: '1/2 a size too small',
        threeDescription: 'Perfect',
        fourDescription: '1/2 a size too big',
        fiveDescription: 'A size too wide',
        loaded: true
      })
    } else if (this.props.thisChar === 'Width') {
      this.setState({
        oneDescription: 'Too narrow',
        twoDescription: 'Slightly narrow',
        threeDescription: 'Perfect',
        fourDescription: 'Slightly wide',
        fiveDescription: 'Too wide',
        loaded: true
      })
    } else if (this.props.thisChar === 'Comfort') {
      this.setState({
        oneDescription: 'Uncomfortable',
        twoDescription: 'Slightly uncomfortable',
        threeDescription: 'Ok',
        fourDescription: 'Comfortable',
        fiveDescription: 'Perfect',
        loaded: true
      })
    } else if (this.props.thisChar === 'Quality') {
      this.setState({
        oneDescription: 'Poor',
        twoDescription: 'Below average',
        threeDescription: 'What I expected',
        fourDescription: 'Pretty great',
        fiveDescription: 'Perfect',
        loaded: true
      })
    } else if (this.props.thisChar === 'Length') {
      this.setState({
        oneDescription: 'Runs short',
        twoDescription: 'Runs slightly short',
        threeDescription: 'Perfect',
        fourDescription: 'Runs slighly long',
        fiveDescription: 'Runs long',
        loaded: true
      })
    } else if (this.props.thisChar === 'Fit') {
      this.setState({
        oneDescription: 'Runs tight',
        twoDescription: 'Runs slightly tight',
        threeDescription: 'Perfect',
        fourDescription: 'Runs slighly long',
        fiveDescription: 'Runs long',
        loaded: true
      })
    }
  }

  handleClick(e) {
    console.log('e.target.value', e.target.value)
    console.log('this.state.selection', this.state.selection)
    this.setState({
      selection: e.target.value
    })
    this.props.rateChar(this.props.thisChar, e.target.value)
  }

  render() {
    let char = this.props.thisChar
    let oneId = 'one-' + char
    let twoId = 'two-' + char
    let threeId = 'three-' + char
    let fourId = 'four-' + char
    let fiveId = 'five-' + char
    return (
      <div>
        <p>{char}</p>
        <input type="radio" name={char} id={oneId} value="1" onClick={this.handleClick.bind(this)}></input>
        <input type="radio" name={char} id={twoId}value="2" onClick={this.handleClick.bind(this)}></input>
        <input type="radio" name={char} id={threeId}value="3" onClick={this.handleClick.bind(this)}></input>
        <input type="radio" name={char} id={fourId}value="4" onClick={this.handleClick.bind(this)}></input>
        <input type="radio" name={char} id={fiveId}value="5" onClick={this.handleClick.bind(this)}></input>
        <p>{this.state.oneDescription}</p>
        <p>{this.state.fiveDescription}</p>
        <br></br>
      </div>
    )
  }
}

export default CharacteristicReview