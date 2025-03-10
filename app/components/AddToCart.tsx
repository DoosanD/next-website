'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
      <button className='btn btn-warning test' onClick={()=>{console.log('Click!')}}>Add to Cart</button>
      <div className='btn border-t-cyan-300' onClick={()=>{alert("does it work")}}>Test</div>
    </div>
  )
}

export default AddToCart