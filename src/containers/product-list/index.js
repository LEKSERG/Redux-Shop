import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions';

import './product-list.css';

class ProductList extends Component {
  state={
    productsToShow: this.props.products
  }

  componentDidMount () {
    this.props.getProductList();
  }

  sortProducts = (event) =>{
    const sorted = this.props.products;    
    switch (event.target.value) {
      case 'nameAZ':
        return this.setState({productsToShow: sorted.sort((a,b) => (a.name > b.name) ? 1 : -1)});
      case 'nameZA':
        return this.setState({productsToShow: sorted.sort((a,b) => (a.name < b.name) ? 1 : -1)});
      case 'priceMinMax':
        return  this.setState({productsToShow: sorted.sort((a,b) => (a.price > b.price) ? 1 : -1)});
      case 'priceMaxMin':
        return  this.setState({productsToShow: sorted.sort((a,b) => (a.price < b.price) ? 1 : -1)});
      case 'availability':
        return  this.setState({productsToShow: sorted.sort((a,b) => (a.available < b.available) ? 1 : -1)});    
      default: return this.props.products
    }
  }

  renderDropdown = () => {
   return <select 
            defaultValue="sort" 
            onChange={(event)=> this.sortProducts(event)}
            className='dropdown'>
            <option value="sort">Sort by</option>
            <option value="nameAZ">Name A-Z</option>
            <option value="nameZA">Name Z-A</option>
            <option value="priceMinMax">Price Min-Max</option>
            <option value="priceMaxMin">Price Max-Min</option>
            <option value="availability">Availability</option>
          </select>
  }
  
  renderProducts() {
    return this.props.products.map((i, index) => (
            <div className="product_list_item" key={index}>
              <p>{i.name}</p>
              <p>Price: {i.price}</p>
              <p>{i.available > 0 ? 'In stock' : 'Sold out'}</p>
              <button disabled={!i.available} className="add-to-cart-btn" onClick={() => this.props.addToCart(i)}>Add to card</button>
            </div>
    ));
  }

  render() {
    return (
    <div className="App-product_list">
      {this.renderDropdown()}
      {this.props.products ? this.renderProducts() : 'Loading Products'}
    </div>
    );
  }
}

const mapStateToProps = state => ({products: state.products.products});
const mapDispatchToProps = dispatch => ({
  addToCart: (product) => dispatch(actionCreators.addToCart(product)),
  getProductList: () => dispatch(actionCreators.getProductList())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
