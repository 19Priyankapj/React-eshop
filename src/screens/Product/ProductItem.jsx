import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductItem(props) {
    
    let {id, title, image, category, description, price, rating} = props

  return (
    <div className='card'>
      <NavLink to={`/product/${id}`}>
        <div className='card-front'>
            <img src={image?image: ''} alt="" className='card-img'/>
            <div className='card-content'>
                <h6 className='card-title'> { title }</h6>
                <p className='price'>&#8377; {price}</p>
            <p className="category">{category}</p>
        </div>
        </div>
        </NavLink>
        
        <div className='card-back'>
          <button className='btn'>
            <i className='bi bi-cart'>Add to cart</i>
          </button>

        </div>
    </div>
  )
}

export default ProductItem