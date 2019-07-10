import React from 'react';

import MenuItem from '../Menu Item/MenuItem';
import { initialSections } from './helpers';
import './Directory.scss';

const Directory = () => {
  const [sections, setSections] = React.useState(initialSections);

  return (
    <div className='directory-menu'>
      {sections.map(section => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
