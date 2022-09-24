import React, { useContext, useEffect, useReducer, useState } from 'react'
import { createContext } from 'react'
import data from '../products/Products';
import { CartReducer } from './CartReducers';
import { myAxios } from '../services/helper';


const Cart = createContext();

const Context = ({ children }) => {

  
  //const scrapMaterialData = async () => {
  //const result = await myAxios.get('/apiScrapMaterial/getAllScrapMaterial', { headers }).then(Response=>setScrapData(Response.data));
  //setScrapData(result.data);
  //console.log(result.data);
  //console.log(scrapData);
  //};
 

   
  const [state, dispatch] =  useReducer(CartReducer, {
    products: [],
    cart: []
  });

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
};