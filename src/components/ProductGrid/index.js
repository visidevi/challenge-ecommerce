import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const ProductGrid = ({ products }) => (

  <Row>
    {products.map(product => (
    <Col className="product" xs={6} md={2} key={product.id} zDepth={4}>
    <img src={product.imageURL} alt={product.id}/>
    <ul>
    <li>{product.name}</li>
    <li>{product.currency} {product.price}</li>
    </ul>
    <FlatButton label="Buy"  fullWidth={true} />

    </Col>
     ))}
  </Row>
);

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductGrid;
