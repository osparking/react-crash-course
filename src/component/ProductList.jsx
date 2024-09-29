import React from 'react'
import {ListGroup} from "react-bootstrap"
import products from './ProductData';

const ProductList = () => {
  return (
    <section>
      <h2 className="text-info">범이비누 옵션 목록</h2>
      <hr />
      <ListGroup>
        {products.map((product, index) => (
          <ListGroup.Item key={index}>
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
