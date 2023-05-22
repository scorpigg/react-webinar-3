import React from 'react';
import {numberFormat, plural} from "../../utils";
import Controls from "../controls/index";
import './style.css';

export const CartBlock = (props) => {

  const cartItemsCount = props.cart.reduce((acc, item) => acc + item.count, 0);
  const cartItemsPrice = props.cart.reduce((acc, item) => acc + item.count * item.price, 0);

  return (
    <div className='Cart-block'>
      <div>
        В корзине:
        <span className='Cart-block-text'>
          {
            cartItemsCount ? 
              ` ${cartItemsCount} ${plural(cartItemsCount, {one: 'товар', few: 'товара', many: 'товаров'})} / ${numberFormat(cartItemsPrice)} \u20bd`
              : 
              ' пусто'
          }
        </span>
      </div>
      <Controls 
        innerText='Перейти'
        onClick={() => props.setIsCartShow(true)}
      />
    </div>
  )
}