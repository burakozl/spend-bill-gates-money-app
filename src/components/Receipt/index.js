import React from "react";
import './styles.css';
import { useSelector } from "react-redux";

function Receipt() {
  const receiptItems = useSelector((state) => state.products.receiptItems);
  const total = useSelector((state) => state.products.totalReceipt);

  if (total && total > 0) {
    return (
      <div className="receiptContainerDiv">
        <h2>Your Receipt</h2>
        {receiptItems.map((item, index) => (
          <p
            className={
              item.quantity > 0 ? "receiptItemInfo" : "hidden"
            }
            key={index}
          >
            <span className="receiptItemTitle">{item.title}</span>
            <span className="receiptItemQuantity">x{item.quantity}</span>
            <span className="receiptItemPrice">
              $
              {Number(item.price * item.quantity)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </p>
        ))}
        <p className="totalContainer">
          <span>TOTAL:</span>
          <span>${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </p>
      </div>
    );
  }
  return <div></div>;
}

export default Receipt;