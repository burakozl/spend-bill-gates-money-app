import React, { useCallback } from 'react';
import './styles.css';
import { useSelector } from 'react-redux';

function Money() {
  const money = useSelector((state) => state.products.totalMoney)
  return (
    <div className="moneyContainer">
        <h2>${money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
    </div>
  )
}

export default Money
