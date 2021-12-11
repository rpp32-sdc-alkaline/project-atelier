import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview/Overview.jsx'
import RatingsAndReviews from './components/RatingsAndRevs/RatingsAndReviews.jsx'
import QandA from './components/QandA/QandA.jsx'

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
        <RatingsAndReviews />
        <QandA />
      </div>

    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))

