import React from 'react';
import {plural} from "../../utils";
import Controls from "../controls/index";
import './style.css';

export const CartBlock = ({cart}) => {

  const cartItemsCount = cart.reduce((acc, item) => acc + item.count, 0);
  const cartItemsPrice = cart.reduce((acc, item) => acc + item.count * item.price, 0);

  return (
    <div className='Cart-block'>
      <div>
        В корзине:
        <span className='Cart-block-text'>
          {
            cartItemsCount ? 
              ` ${cartItemsCount} ${plural(cartItemsCount, {one: 'товар', few: 'товара', many: 'товаров'})} / ${cartItemsPrice} \u20bd`
              : 
              ' пусто'
          }
        </span>
      </div>
      <Controls 
        innerText='Перейти'
      />
    </div>
  )
}