import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions';

import './header.module.css'
import Modal from './Modal/Modal';

const header = (props) => {
    return (
        <React.Fragment>
            <Modal/>
            <header className="App-header">
            <Link to="/"><h1 className="App-title">My simple shop</h1></Link>
            <div className="inline">
            <button onClick={props.toggleAddModal}>Add product</button>
            <Link to="/cart">
                <h2 className="Cart">
                Cart {props.inCart.length}
                </h2>
            </Link>
            </div>          
            </header>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({inCart: state.cart.inCart});
const mapDispatchToProps = dispatch => ({
    toggleAddModal: () => dispatch(actionCreators.toggleAddModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(header);


