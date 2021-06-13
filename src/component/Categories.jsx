import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Categories = React.memo(({ activeCategory, items, click }) => {
   
 

  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => click(null)}>
          Все
        </li>
        {items &&
          items.map((cat, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => click(index)}
              key={`${cat}_${index}`}>
              {cat}
            </li>
          ))}
      </ul>
    </div>
  );
});


Categories.propTypes ={
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  click: PropTypes.func
}