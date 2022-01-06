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
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    // console.log('id', id)
    this.setState({
      'selectedProductId': id
    })
  }

  componentDidMount() {
    fetch('/API')
    .then((res) => res.json())
    .then((productList) => {
      console.log('productList', productList)

      this.setState({
        'productList': productList,
        'defaultProductId': productList[0].id
      })
    })
  }


  //TO DO: function that changes the current product id


  render() {
<<<<<<< HEAD
    return (
      <div>
        <h1>Project Atelier</h1>
        <Overview props = {this.state}/>
        <QandA props = {this.state}/>
        <RatingsAndReviews props = {this.state}/>
      </div>
    )
=======
    if (!this.state.productList) {
      return (
        <div>
          <h1>Project Atelier</h1>
        </div>
      )
    } else {
      var id = this.state.selectedProductId ? this.state.selectedProductId : this.state.defaultProductId
      return (
        <div>
          <h1>Project Atelier</h1>
          <h3>Product List</h3>
          <div>
            {this.state.productList.map((product, index) =>
              <li key={index} onClick={(e)=>{this.handleClick(product.id)}}>{product.name}</li>
            )}
          </div>
          <Overview id={id}/>
          <QandA id={id}/>
          <RatingsAndReviews id={id}/>
        </div>
      )
    }
>>>>>>> e2a41c5c1fe55eea2640984683cfed790f114631
  }
}

export default App