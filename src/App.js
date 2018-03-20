import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ProductGrid from './components/ProductGrid';
import CartTable from './components/CartTable';
import { fetchProducts } from './state/product/actions';
import { fetchCart } from './state/cart/actions';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchProducts();
    this.props.fetchCart();
  }

  render() {
    const {
      isProductsLoading,
      products,
      cart,
    } = this.props;


    if(isProductsLoading) {
      return <h2>Loading...</h2>;
    }
    console.log('cart',cart)

    return (
      <MuiThemeProvider>
        <Grid>
         <Row>
         <Col xs={12}>
         <AppBar title='Fallabela Shopping Car'/>
         </Col>
         </Row> 
         <CartTable
          cart={cart}/>
         <ProductGrid
          products={products}/>
         </Grid>
       </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  isProductsLoading: state.product.isLoading,
  products: state.product.products,
  cart: state.cart.cart,
});

const mapDispatchToProps = {
  fetchProducts,
  fetchCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
