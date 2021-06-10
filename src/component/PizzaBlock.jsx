import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'

export const PizzaBlock = ({ name, types, price, imageUrl, sizes }) => {
  const typesArr = ['тонкое', 'традиционное'];
  const sizesArr = [26, 30, 40];
  const [activeType, setactiveType] = useState(types[0]);
  const [activeSize, setactiveSize] = useState(sizes[0]);

  const onSelectType = (index) => {
    setactiveType(index);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typesArr.map((type, id) => (
            <li
              key={id}
              onClick={() => onSelectType(id)}
              className={classNames({
                active: activeType === id,
                disabled: !types.includes(id),
              })}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizesArr.map((s, id) => (
            <li
              key={s}
              onClick={() => setactiveSize(id)}
              className={classNames({
                active: activeSize === id,
                disabled: !sizes.includes(s),
              })}>
              {s} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

PizzaBlock.propTypes={
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired
}

PizzaBlock.defaultProps={
  types=[]
}