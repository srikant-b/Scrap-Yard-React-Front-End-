import React, { useContext, useEffect, useReducer, useState } from 'react'
import { createContext } from 'react'
import data from '../products/Products';
import { CartReducer } from './CartReducers';
import { myAxios } from '../services/helper';
import { wait } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
const Cart = createContext();

const Context = ({ children }) => {
  let Token = JSON.parse(localStorage.getItem("data"));
  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + Token.token,
  };
  const [loading, setLoading] = useState(true);
  const [scrapData, setScrapData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try{
      await myAxios.get('/apiScrapMaterial/getAllScrapMaterial', { headers }).
        then(Response => setScrapData(Response.data));
      }catch(error){
        console.error(error.message);
      }
      setLoading(false);   
      }
      fetchData();
  }, [])


  //const scrapMaterialData = async () => {
  //const result = await myAxios.get('/apiScrapMaterial/getAllScrapMaterial', { headers }).then(Response=>setScrapData(Response.data));
  //setScrapData(result.data);
  //console.log(result.data);
  //console.log(scrapData);
  //};
  console.log(scrapData);

  const [state, dispatch] = useReducer(CartReducer, {
    products: scrapData,
    cart: []
  });
console.log(state.products);
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