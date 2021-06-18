import React, { useCallback, useEffect, useMemo } from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from './../component';
import { setCategory, setSortBy } from '../redux/actions/filtersAC';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzass } from './../redux/actions/pizzasAC';
import { addPizzaToCart } from '../redux/actions/cartAC';

export const Home = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartITems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { categori, sortBy } = useSelector(({ filters }) => filters);



  useEffect(() => {
    dispatch(fetchPizzass(sortBy, categori));
  }, [categori, sortBy]);


  const setCategoryDispatch = useCallback((id) => {
    dispatch(setCategory(id));
  }, []);

  const onClickSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={categori}
          click={setCategoryDispatch}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          activeSortType={sortBy.type}
          onClickSortType={onClickSortType}
          PopupItems={[
            { name: 'популярности', type: 'popular', order: 'desc' },
            { name: 'цене', type: 'price', order: 'desc' },
            { name: 'алфавиту', type: 'name', order: 'asc' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((p) => <PizzaBlock addedcartCount={cartITems[p.id] && cartITems[p.id].items.length} onClickAddPizza={handleAddPizzaToCart} key={p.id} {...p} />)
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
};
