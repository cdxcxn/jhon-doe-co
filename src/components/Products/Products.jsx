import React from 'react';
import CategoriesPanel from './CategoriesPanel';
import ProductList from './ProductList';
import './Products.css';

const Products = () => (
  <section className='products'>
    <CategoriesPanel />
    <ProductList />
  </section>
);
export default Products;
