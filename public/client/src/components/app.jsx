import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './Overview/Overview.jsx';
import RatingsAndReviews from './RatingsAndRevs/RatingsAndReviews.jsx';
import QandA from './QandA/QandA.jsx';
import $ from 'jquery';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    fetch('/API')
    .then((res) => res.json())
    .then((productList) => {
      console.log('productList', productList)
      this.setState({
        'productList': productList
      })
    })
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