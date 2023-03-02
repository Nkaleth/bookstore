import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const categoriesList = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
      <p>{categoriesList}</p>
    </>
  );
};

export default Categories;
