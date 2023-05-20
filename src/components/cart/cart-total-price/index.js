import React from 'react';
import './style.css';

export const CartTotalPrice = (props) => {

  const totalPrice = props.cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return ( totalPrice ?
    <div className='Cart-total-price'>
      <span className='price-text'>Итого</span>
      {`${totalPrice} \u20bd`}
    </div>
    :
    <h2 className='Cart-empty'>Корзина пуста</h2>
  )
}