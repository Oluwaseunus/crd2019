import React from 'react';

import './CollectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
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
    </div>
  );
};

export default CollectionItem;
