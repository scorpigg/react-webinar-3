import React, {useState} from "react";
import PropTypes from "prop-types";
import {plural} from "../../utils";
import './style.css';
import Controls from "../controls";

function Item(props){

  return (
    <div className='Item'>
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title}
        {/* {count ? ` | Выделяли ${count} ${plural(count, {one: 'раз', few: 'раза', many: 'раз'})}` : ''} */}
      </div>
      <div className='Item-price'>{`${props.item.price} \u20bd`}</div>
      <Controls 
        innerText='Добавить' 
        onClick={() => props.onAddItem(props.item)}
      />
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired,
  onAddItem: PropTypes.func
};

Item.defaultProps = {
  onAddItem: () => {},
}

export default React.memo(Item);
