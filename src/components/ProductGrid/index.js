import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const ProductGrid = ({ products }) => (
  

  <Row>
    {products.map(product => (
    
    <Col className="product" xs={6} md={2} key={product.id}>
    <Paper style={style} zDepth={4} >
    <img src={product.imageURL} alt={product.id}/>
    <p>{product.name}</p>
    <p>{product.currency} {product.price}</p>
    <FlatButton label="Buy" secondary={true}  fullWidth={true} />
    </Paper>
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
