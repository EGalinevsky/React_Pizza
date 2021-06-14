import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from './../assets/img/pizza-logo.svg';
import { Button } from './Button';

export const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

 
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img width="38" src={logo} alt="Pizza logo" />
          </Link>

          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <Button price={totalPrice} count={totalCount} />
      </div>
    </div>
  );
};
