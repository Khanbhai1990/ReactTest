import React from 'react';
import CartHeader from  './CartHeader';
import CartFooter from  './CartFooter';
import CartItems from  './CartItems';

const ShoppingCart = ({copyRight}) =>{
  return (
    <div className="ShoppingCart">
      <CartHeader />
      <CartItems />
      <CartFooter copyRight= {copyRight} />
    </div>
  )
}

export default ShoppingCart
