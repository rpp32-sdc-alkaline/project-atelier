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
        'currentProductId': productList[0].id
      })
    })
  }

  //TO DO: function that changes the current product id


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
          <Overview id={this.state.currentProductId}/>
          <QandA id={this.state.currentProductId}/>
          <RatingsAndReviews id={this.state.currentProductId}/>
        </div>
      )
    }
  }
}

export default App