import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, history, match }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${title}`)}>
      <div className='background-image' style={style} />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
