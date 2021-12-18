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
        'productList': productList,
        'currentProductId': productList[4].id
      })
    })
  }


  render() {
    if (!this.state.productList) {
      return (
        <div>
          <h1>Project Atelier</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Project Atelier</h1>
          <Overview />
          <QandA />
          <RatingsAndReviews id={this.state.currentProductId}/>
        </div>
      )
    }
  }
}

export default App