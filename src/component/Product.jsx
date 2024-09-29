import React from 'react'
import {ListGroup} from "react-bootstrap"

const Product = () => {

  return (
    <div className='text-success'>
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

    </div>);
}

export default Product
