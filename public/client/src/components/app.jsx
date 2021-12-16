import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview/Overview.jsx'
import RatingsAndReviews from './RatingsAndRevs/RatingsAndReviews.jsx'
import QandA from './QandA/QandA.jsx'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>Project Atelier</h1>
        <Overview />
        <QandA />
        <RatingsAndReviews />
      </div>
    )
  }
}

export default App