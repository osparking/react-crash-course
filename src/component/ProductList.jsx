import React, { useState } from 'react'
import {ListGroup} from "react-bootstrap"
import products from './ProductData';

const ProductList = () => {
    const[selectedIndex, setSelectedIndex] = useState(-1)
  return (
    <section className='mt-5'>
      <h2 className="text-info">범이비누 옵션 목록</h2>
      <hr />
      <ListGroup>
        {products.map((product, index) => (
          <ListGroup.Item key={index} 
          
                onClick={() => console.log(product)}>
            <h4>{product.name}</h4>
            <p>가격: ₩{product.price}</p>
            <p>설명: {product.description}</p>
            <hr />
          </ListGroup.Item>    
        ))}
      </ListGroup>
    </section>
  )
}

export default ProductList
