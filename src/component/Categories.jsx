import React, { useState } from 'react';

export const Categories = React.memo(({ items, click }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    click(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((cat, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${cat}_${index}`}>
              {cat}
            </li>
          ))}
      </ul>
    </div>
  );
});
