import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([])
  useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProduct(data))
  }, [])
  const handleAddToCart = (product) =>{
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  }
  return (
    <div className='shop-container'>
      <div className='products-container'>
        {
          products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}>

          </Product>)
        }
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;