import React from 'react';
import LibraryItem from './LibraryItem';
import './LibraryGallery.scss';

function LibraryGallery({ libraryItems }) {
  return <ul className="libraryGallery">
    {
      libraryItems.map( (item, i) => {
        return (
          <LibraryItem
            key={i}
            item={item} 
          />)
      })
    }        
  </ul>
}

export default LibraryGallery;