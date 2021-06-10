import React from 'react';
import { Categories, SortPopup, PizzaBlock } from './../component';

export const Home = ({ pizzas }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          click={(cat) => console.log(cat)}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          PopupItems={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((p) => (
          <PizzaBlock key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};
