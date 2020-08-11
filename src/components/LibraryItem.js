import React from 'react';
import './LibraryItem.scss';

function LibraryItem({ item }) {
  const { imageUrl, name, type, createdAt } = item
  return (
    <li className="libraryItem">
      <div className="image">
        <img src={imageUrl} alt={type}/>
      </div>
      <div className="libraryItem-description">
        <p className="title">{name}</p>
        <p className="subtitle">{createdAt}</p>
      </div>
    </li>
  )

}  
export default LibraryItem;