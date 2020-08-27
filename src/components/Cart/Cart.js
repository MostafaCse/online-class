import React from 'react';
import './Cart.css';
import Button from 'react-bootstrap/Button';

const Cart = (props) => {
      const cart=props.cart;
    let totalPrice=0;
    for (let i = 0; i < cart.length; i++) {
        const price=cart[i].price;
        totalPrice+=price;
    }
  
    return (
        <div className="card-style">
           <h2>Course Order Summary</h2>
         <p>Add Course:{props.cart.length}</p>
           <p>total price:{totalPrice}</p>
           <Button variant="outline-success">Confirm Enrolled</Button>{' '}
   
        </div>
    );
};

export default Cart;