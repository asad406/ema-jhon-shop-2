import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart; 
    // const {cart} = props;
console.log(cart)

let total = 0;
let shipping = 0;
for(const product of cart){
    total = total + product.price;
    shipping = shipping + product.shipping;
}
let tax = total*7/100;
const grandTotal = total + shipping + tax;
  return (
    <div className='cart'>
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length} </p>
      <p>Total Price: ${total}</p>
      <p>Shipping: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: {grandTotal}</h6>
    </div>
  );
};

export default Cart;
