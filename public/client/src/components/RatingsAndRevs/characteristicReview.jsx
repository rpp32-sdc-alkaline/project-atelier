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
      fiveDescription: ''
    }
  }

  componentDidMount() {
    if (this.props.thisChar === 'size') {
      this.setState({
        oneDescription: 'A size too small',
        twoDescription: '1/2 a size too small',
        threeDescription: 'Perfect',
        fourDescription: '1/2 a size too big',
        fiveDescription: 'A size too wide',
        loaded: true
      })
    } else if (this.props.thisChar === 'width') {
      this.setState({
        oneDescription: 'Too narrow',
        twoDescription: 'Slightly narrow',
        threeDescription: 'Perfect',
        fourDescription: 'Slightly wide',
        fiveDescription: 'Too wide',
        loaded: true
      })
    } else if (this.props.thisChar === 'comfort') {
      this.setState({
        oneDescription: 'Uncomfortable',
        twoDescription: 'Slightly uncomfortable',
        threeDescription: 'Ok',
        fourDescription: 'Comfortable',
        fiveDescription: 'Perfect',
        loaded: true
      })
    } else if (this.props.thisChar === 'quality') {
      this.setState({
        oneDescription: 'Poor',
        twoDescription: 'Below average',
        threeDescription: 'What I expected',
        fourDescription: 'Pretty great',
        fiveDescription: 'Perfect',
        loaded: true
      })
    } else if (this.props.thisChar === 'length') {
      this.setState({
        oneDescription: 'Runs short',
        twoDescription: 'Runs slightly short',
        threeDescription: 'Perfect',
        fourDescription: 'Runs slighly long',
        fiveDescription: 'Runs long',
        loaded: true
      })
    } else if (this.props.thisChar === 'fit') {
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

  render() {
    let oneId = 'one-' + this.props.thisChar
    let twoId = 'two-' + this.props.thisChar
    let threeId = 'three-' + this.props.thisChar
    let fourId = 'four-' + this.props.thisChar
    let fiveId = 'five-' + this.props.thisChar
    return (
      <div>
        <form>
        <input type="radio" name={oneId} id={oneId} value="1"></input>
        <input type="radio" name={twoId} id={twoId}value="2"></input>
        <input type="radio" name={threeId} id={threeId}value="3"></input>
        <input type="radio" name={fourId} id={fourId}value="4"></input>
        <input type="radio" name={fiveId} id={fiveId}value="5"></input>
        <p>{this.state.oneDescription}</p>
        <p>{this.state.fiveDescription}</p>
        </form>
      </div>
    )
  }
}

export default CharacteristicReview