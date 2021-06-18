import React from 'react'
import { NavLink } from 'react-router-dom'
import emptyCart from './../assets/img/empty-cart.png'

export const Basket = () => {
    return (
      
      
        <div class="container container--cart">
          <div class="cart cart--empty">
            <h2>Корзина пустая <icon>😕</icon></h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.<br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={emptyCart} alt="Empty cart" />
            <NavLink to="/" class="button button--black">
              <span>Вернуться назад</span>
            </NavLink>
          </div>
        </div>
    )
}
