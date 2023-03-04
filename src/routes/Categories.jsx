import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { checkStatus } from '../redux/categories/categoriesSlice';
import '../styles/Categories.css';

const Categories = () => {
  const categoriesList = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  return (
    <>
      <button className="checkStatus" type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
      <p className="UnderConst">{categoriesList}</p>
    </>
  );
};

export default Categories;
