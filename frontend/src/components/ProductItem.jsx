import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext);

  return (
    <Link 
        to={`/product/${id}`} 
        onClick={() => window.scrollTo(0, 0)} 
        className='text-gray-700 cursor-pointer block' // Added 'block' for better link behavior
    >

      {/* VITAL: This container enforces the 1:1 Aspect Ratio and clips overflow */}
      <div className='w-full aspect-square overflow-hidden'>
        {/* VITAL: object-cover scales the image uniformly to fit the container */}
        <img 
            className='w-full h-full object-cover transition ease-in-out duration-500 hover:scale-110' 
            src={image[0]} 
            alt={name} 
        />
      </div>

      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
      
    </Link>
  )
}

export default ProductItem