import React from 'react';
import { connect } from 'react-redux';

import './CollectionItem.scss';

import CustomButton from '../CustomButton/CustomButton';

import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const imageStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className='collection-item'>
      <div className='image' style={imageStyle} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
