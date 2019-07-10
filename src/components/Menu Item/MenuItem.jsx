import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className={`${size} menu-item`} style={style}>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
