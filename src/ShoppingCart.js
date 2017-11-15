import React from 'react';
import CartHeader from  './CartHeader';
import CartFooter from  './CartFooter';
import CartItems from  './CartItems';

class ShoppingCart extends React.Component{
  render(){
  return (
    <div className="ShoppingCart">
      <CartHeader />
      <CartItems items = {this.props.items} />
      <CartFooter copyRight= {this.props.copyRight} />
    </div>

    )
  }  
}

export default ShoppingCart
