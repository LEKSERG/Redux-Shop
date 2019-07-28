import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions';

import './cart.css';

export class Cart extends Component {
  state ={
    totalSum: 0
  }

  componentDidMount () {
    return this.props.inCart.length !== 0 ? this.getTotalSum() : null
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.totalSum === this.state.totalSum && prevProps.inCart !== this.props.inCart) {
      if ( this.props.inCart.length === 0) {
        this.setState({totalSum: 0});
      } else {
        this.getTotalSum()
      }
    }
  }

  getTotalSum = () => {
    let tempSum = 0
    this.props.inCart.forEach(i => {
      tempSum = i.price*i.quantity + tempSum
    })
    this.setState({totalSum: tempSum}) 
  }

  removeFromCart (product) {
    this.props.removeFromCart(product);
    setTimeout(() => {
      if (this.props.inCart.length === 0) {
        alert("You cleared your cart!");
      }
    }, 500);
  }
  
  renderCartList() {
    return <React.Fragment>
      {this.props.inCart.map((product, index) => (        
        <div className="cart-table" key={index}>
          <span>{product.name}</span>
          <span> Price: {product.price}$</span>
          <div>
            <span>Max: {product.available} </span>
            <input
              className='quantity'
              type='number'
              value={product.quantity}
              onChange={(event) => this.props.quantityChanged(event.target.value, index)}
            />
            <span className="sum"> Sum: {product.quantity * product.price} </span>
            <span className='delete' onClick={() => this.removeFromCart(product)}> delete</span>
          </div>
        </div>
      ))}
      <div className="cartListControls">
        <button onClick={this.props.clearCart}>Clear Cart</button>
        <button onClick={() => {
          if(window.confirm(`Total price to pay: ${this.state.totalSum}$`)){
            this.props.clearCart()
            alert("Thank You for shopping");
            };}}
            >
            Submit Order
        </button>
      </div>
    </React.Fragment>
  }
  render() {
    return (
    <div className="App-cart">
      {this.props.inCart.length ? this.renderCartList() : 'Your cart is empty :('}      
    </div>);
  }
}

const mapStateToProps = state => ({inCart: state.cart.inCart});
const mapDispatchToProps = dispatch => ({
  quantityChanged: (quantity, index) => dispatch(actionCreators.quantityChanged(quantity, index)),
  removeFromCart: (product) => dispatch(actionCreators.removeFromCart(product)),    
  clearCart: () => dispatch(actionCreators.clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);