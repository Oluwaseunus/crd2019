import React from 'react';
import shopData from './shop-data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = () => {
  const [collections, setCollections] = React.useState(shopData);

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

export default ShopPage;
