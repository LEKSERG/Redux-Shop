import * as actionTypes from '../actions/actionTypes';

const initState = {
    showAddModal: false
}

export default (state = initState, action) => {
    switch (action.type) {
      case actionTypes.TOGGLE_ADD_MODAL:
        return {...state, showAddModal: !state.showAddModal};
      default:
        return state;
    }
  }