import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ProductGrid from './components/ProductGrid';
import { fetchProducts } from './state/product/actions';
import './App.css'

class App extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    const {
      isProductsLoading,
      products,
    } = this.props;

    if(isProductsLoading) {
      return <h2>Loading...</h2>;
    }

    return (
      <MuiThemeProvider>
        <Grid>
         <Row>
         <Col xs={12}>
         <AppBar title='Fallabela Shopping Car'/>
         </Col>
         </Row> 
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
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
