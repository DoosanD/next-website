import React from 'react'
import AddToCart from '../AddToCart';
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className='p-4 text-xl bg-red-900 hover:bg-sky-500 transition-colors' style={{
        // backgroundColor: 'purple',
        // padding: '1rem',
        borderRadius: '5px',
        margin: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <h2>Product Card</h2>
        <p>This is a product card.</p>
        <AddToCart />
    </div>
  )
}

export default ProductCard