import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden() {
    dispatch(toggleCartHidden());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);