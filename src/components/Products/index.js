import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeOrder } from '../../redux/productsSlice';
import './styles.css';


function Products() {
    const items = useSelector((state) => state.products.items);
    const dispatch = useDispatch();

    const handleChange = (item, targetvalue) => {
        const id = item.id;
        const price = item.price;
        const innerHTML = targetvalue.innerHTML;

        if(targetvalue > 9999){
            return;
        }

        if(innerHTML === 'Buy'){
            targetvalue = Number(item.quantity) + 1;
        } else if (innerHTML === 'Sell') {
            targetvalue = Number(item.quantity) - 1;
        } else {
            targetvalue = Number(targetvalue);
        }
        dispatch(changeOrder({ id, price, targetvalue }));
    }


  return (
    <div className='gridContainer'>
        {items.map((item,index) => (
            <div className="carddiv" key={index}>
            <img src={item.img} alt={item.title}/> 
            <div className="cardTitle">{item.title}</div> 
            <div className="cardPrice">$ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div> 
            <div className="buyOptionsDiv">
                <button
                className="sellBtn"
                disabled={!item.anyBuyed}
                onClick={(e) => handleChange(item, e.target)}
                >
                Sell
                </button>
                <input
                className="priceInput"
                type="number"
                min="0"
                value={item.quantity}
                onChange={(e) => handleChange(item, e.target.value)}
                />
                <button
                className="buyBtn"
                disabled={!item.canBuyMore}
                onClick={(e) => handleChange(item, e.target)}
                >
                Buy
                </button>
          </div>
        </div>  
        ))
        }
    </div>
  )
}

export default Products;
