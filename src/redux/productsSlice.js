import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: "products",
    initialState: {
      totalMoney: 100000000000,
        items: [
            {
              id: nanoid(),
              title: "Big Mac",
              price: 2,
              img: "https://neal.fun/spend/images/big-mac.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Year of Netflix",
              price: 100,
              img: "https://neal.fun/spend/images/year-of-netflix.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Drone",
              price: 350,
              img: "https://neal.fun/spend/images/drone.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Smartphone",
              price: 700,
              img: "https://neal.fun/spend/images/smartphone.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Acre of Farmland",
              price: 2500,
              img: "https://neal.fun/spend/images/acre-of-farmland.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Hot Tub",
              price: 6000,
              img: "https://neal.fun/spend/images/hot-tub.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Jet Ski",
              price: 11000,
              img: "https://neal.fun/spend/images/jet-ski.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Monster Truck",
              price: 150000,
              img: "https://neal.fun/spend/images/monster-truck.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Ferrari",
              price: 250000,
              img: "https://neal.fun/spend/images/ferrari.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "House",
              price: 260000,
              img: "https://neal.fun/spend/images/single-family-home.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "McDonalds Franchise",
              price: 1500000,
              img: "https://neal.fun/spend/images/mcdonalds-franchise.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "M1 Abrams",
              price: 8000000,
              img: "https://neal.fun/spend/images/m1-abrams.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Formula 1 Car",
              price: 15000000,
              img: "https://neal.fun/spend/images/formula-1-car.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Mansion",
              price: 45000000,
              img: "https://neal.fun/spend/images/mansion.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Boeing 747",
              price: 150000000,
              img: "https://neal.fun/spend/images/boeing-747.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Skyscraper",
              price: 750000000,
              img: "https://neal.fun/spend/images/skyscraper.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "Cruise Ship",
              price: 950000000,
              img: "https://neal.fun/spend/images/cruise-ship.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            {
              id: nanoid(),
              title: "NBA Team",
              price: 2250000000,
              img: "https://neal.fun/spend/images/nba-team.jpg",
              quantity: 0,
              anyBuyed: false,
              canBuyMore: true,
            },
            
          ],
      receiptItems: [],
      totalReceipt: 0,
    },
    reducers: {
      changeOrder: (state, action) => {
        const { id, price, targetvalue } = action.payload;
        const oldQuantity = state.items.find((item) => item.id === id).quantity;
        const fark = oldQuantity - targetvalue;
        const buy = fark < 0 ? true : false;
        if ((buy && state.totalMoney - price * Math.abs(fark) >= 0) || !buy) {
          if (targetvalue > 0) {
            const updatedItems = state.items.map((item) =>
              item.id === id
                ? { ...item, anyBuyed: true, quantity: targetvalue }
                : item
            );
            state.items = updatedItems;
          } else {
            const updatedItems = state.items.map((item) =>
              item.id === id
                ? { ...item, anyBuyed: false, quantity: targetvalue }
                : item
            );
            state.items = updatedItems;
          }
  
          const itemForReceipt = state.items.find((item) => item.id === id);
          const itemInReceipt = state.receiptItems.find((item) => item.id === id);
  
          if (itemInReceipt === undefined) {
            state.totalMoney -= price * targetvalue;
          } else if (itemForReceipt.quantity > itemInReceipt.quantity) {
            state.totalMoney -= price * Math.abs(fark);
          } else if (itemForReceipt.quantity < itemInReceipt.quantity) {
            state.totalMoney += price * Math.abs(fark);
          }
  
         
  
          const itemDahaOnceAlindiMi = state.receiptItems.find(
            (item) => item.id === id
          );
          if (itemDahaOnceAlindiMi === undefined) {
            state.receiptItems.push(itemForReceipt);
          } else {
            const updatedReceipt = state.receiptItems.map((item) =>
              item.id === id ? { ...item, quantity: targetvalue } : item
            );
            state.receiptItems = updatedReceipt;
          }
  
          // total receipt amount calculation
          let total = 0;
          state.receiptItems.map((item) => {
            total += item.quantity * item.price;
          });
          state.totalReceipt = total;
  
          const updateBuyMore = state.items.map(
            (item) =>
              item && {
                ...item,
                canBuyMore: item.price > state.totalMoney ? false : true,
              }
          );
          state.items = updateBuyMore;
        }
    },
  }
});

export const { changeOrder } = productsSlice.actions;
export default productsSlice.reducer;


