import React from 'react';
import { Card, CardText, CardTitle } from 'react-md';

const Products = () => (
  <Card className="md-cell md-cell--12 md-text-container">
    <CardTitle title="Products" />
    <CardText>
      <p>
        Products contents!
      </p>
    </CardText>
  </Card>
);
export default Products;
