import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.table`
    width: 100%;
    border-collapse: collapse;

    td,th{
        border:1px solid #DDD;
        padding: 8px;
        text-aling: left;
    }
    tr:nth-child(even){
        background: #DDD;
    }
    `;


const CartTable = ({cart}) =>(
    <Wrapper>
        <thead>
            <tr>
            <th>Item Name</th> 
            <th>Item Price</th> 
            <th>Item quantity</th> 
            </tr>  
        </thead> 
        <tbody>
            {cart.items.map(item =>(

                <tr key ={item.productId}>
                 <td>Product Name ??{}</td> 
                 <td>Product Price ??{}</td> 
                 <td>{item.quantity}</td> 
                </tr>

            ))}
       
            </tbody> 

    </Wrapper>  
);
CartTable.propTypes = {
    cart: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
            product: PropTypes.shape({
                name: PropTypes.string.isRequired,
                price:PropTypes.number.isRequired,
            }).isRequired,
            productId: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        })).isRequired,   
    }).isRequired,  

}
export default CartTable;