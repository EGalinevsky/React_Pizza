import React from 'react';
import { Categories, SortPopup, PizzaBlock } from './../component';
import { setCategory } from '../redux/actions/filtersAC';
import { useSelector, useDispatch } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);

  const setCategoryDispatch = (id)=>{
    dispatch(setCategory(id))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          click={(id) => setCategoryDispatch(id)}
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
        {items.map((p) => (
          <PizzaBlock key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};
