import React from 'react';
import CategoriesPanel from './CategoriesPanel';
import ProductList from './ProductList';
import './Products.css';

const Products = (props) => {
  return (
    <section className='products'>
      <CategoriesPanel router={props} />
      <ProductList />
    </section>
  )
};
export default Products;
